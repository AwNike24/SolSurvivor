<template>
  <modal v-if="!loading" @closeModal="close">
    <input
      id="search"
      v-model="search"
      class="col-12 mb-2 font-weight-light input text-center"
      type="text"
      name="search"
      placeholder="search for team"
    />
    <div
      v-for="(game, gameIx) in createdGameObjects"
      :key="gameIx"
      :class="{
        selected: isSelected(game.participantID),
        strikeThrough: alreadySelected.indexOf(game.participantID) !== -1,
      }"
      class="col-12 outline d-inline-flex"
    >
      <h4 class="col-9 font-weight-bold mt-2 mb-0">
        {{ game.longName }}
        <br />
        <div
          class="
            font-weight-normal
            justify-content-center
            text-black-50
            small
            my-0
          "
        >
          {{ dayjs(game.start).format("hh:mm A DD MMM") }} - {{ game.opponent }}
        </div>
      </h4>
      <div class="my-2">
        <button
          v-if="alreadySelected.indexOf(game.participantID) === -1"
          class="d-inline-flex"
          @click="
            handleSelectTeam(selectedWeek, game.participantID, game.gameID)
          "
        >
          <b> SELECT </b>
        </button>
      </div>
    </div>
  </modal>
  <modal v-else class="modal-wrap" @closeModal="close">
    <spinner />
  </modal>
</template>

<script>
import dayjs from "dayjs";
import api from "@/core/api";

import Spinner from "../../other/Spinner.vue";
import Modal from "../../other/Modal.vue";

export default {
  name: "TeamsModal",
  components: { Modal, Spinner },
  props: {
    selectedWeek: {
      type: Number,
      required: true,
    },
    currentWeek: {
      type: Number,
      required: true,
    },
    selectedTeams: {
      type: Array,
      required: true,
      default: () => {
        [];
      },
    },
    selection: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data() {
    return {
      loading: true,
      games: [],
      search: "",
      dayjs,
    };
  },
  computed: {
    alreadySelected() {
      return this.selectedTeams.filter(
        (teamID) => teamID !== this.getSelectedTeam.id
      );
    },
    searchFilteredGames() {
      return this.games.filter((game) => {
        const gameTitle = `#${game.participants[0].rotationNumber} ${game.participants[0].longName} ${game.participants[0].shortName} @ #${game.participants[1].rotationNumber} ${game.participants[1].longName} ${game.participants[1].shortName}`;
        return gameTitle.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    createdGameObjects() {
      const returnArray = [];
      this.searchFilteredGames.map((game) => {
        const homeTeam = game.participants[1].longName;
        const awayTeam = game.participants[0].longName;
        game.participants.map((team, ix) => {
          const opponent = ix === 0 ? homeTeam : awayTeam;
          returnArray.push({
            longName: team.longName,
            opponent,
            start: game.start,
            participantID: team.id,
            gameID: game.id,
          });
        });
      });
      return returnArray;
    },
    getSelectedTeam() {
      if (!this.selection.selection) {
        return { id: null };
      }
      const { selection } = this.selection.selection;
      return selection;
    },
  },
  created() {
    this.fetchGamesPerWeek();
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    fetchGamesPerWeek() {
      api
        .request("survivorPool/getGamesByWeek", { week: this.selectedWeek })
        .then((res) => {
          this.games = res.games;
          this.loading = false;
        });
    },
    handleSelectTeam(selectedWeek, participantID, gameID) {
      if (this.selectedWeek < this.currentWeek) {
        return;
      }
      if (this.alreadySelected.indexOf(participantID) !== -1) {
        return;
      }
      if (this.selectedTeams.indexOf(participantID) !== -1) {
        this.$emit("removeSelection", {
          gameID,
          oldParticipantID: participantID,
          selectionID: this.selection.selection.selectionID,
        });
      } else if (this.selection.selection) {
        this.$emit("editSelection", {
          gameID,
          oldParticipantID: this.getSelectedTeam.id,
          participantID,
          selectedWeek,
          selectionID: this.selection.selection.selectionID,
        });
      } else {
        this.$emit("selectTeam", {
          selectedWeek,
          participantID,
          gameID,
        });
      }
    },
    isSelected(participantID) {
      return (
        this.selection &&
        this.selection.selection &&
        participantID === this.getSelectedTeam.id
      );
    },
  },
};
</script>

<style scoped lang="sass">
@import "../../../assets/styles/variables"

.outline
  margin: 0
  max-width: 780px
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)

button
  font-weight: bold
  padding: .5rem

.small
  font-size: $font-size-xs

.selected
  background: rgba(72, 226, 37, 0.4)
.strikeThrough
  text-decoration: line-through

.input
  background: none
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
</style>
