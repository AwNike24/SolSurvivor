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
      <div class="col-1 my-2">
        <button class="d-inline-flex">SELECT</button>
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
  },
  created() {
    this.fetchGamesPerWeek();
  },
  methods: {
    fetchGamesPerWeek() {
      api
        .request("survivorPool/getGamesByWeek", { week: this.selectedWeek })
        .then((res) => {
          this.games = res.games;
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped></style>
