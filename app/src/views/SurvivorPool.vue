<template>
  <main class="container-fluid bg-body">
    <div class="row no-gutters">
      <div class="col-12 col-md-2">
        <nav class="left-sidebar p-4">
          <connect-to-wallet />
          <router-link
            to="/survivor-pool/my-entries"
            class="d-flex align-items-center"
          >
            <img
              src="../../public/icons/solsulvivor/Icon-awesome-external-link-square-alt.svg"
            />
            <h4 class="ml-3 my-0">My Entry</h4>
          </router-link>
          <router-link
            to="/survivor-pool/all-entries"
            class="d-flex align-items-center"
          >
            <img
              src="../../public/icons/solsulvivor/Icon-material-pageview.svg"
            />
            <h4 class="ml-3 my-0">View All Entries</h4>
          </router-link>
          <router-link
            to="/survivor-pool/rules"
            class="d-flex align-items-center"
          >
            <img
              src="../../public/icons/solsulvivor/Icon-awesome-list-alt.svg"
            />
            <h4 class="ml-3 my-0">Rules</h4>
          </router-link>
        </nav>
      </div>
      <div v-if="loading" class="col-10">
        <spinner />
      </div>
      <div v-else-if="mode === 'not-connected'" class="col-10 mt-2">
        <not-connected />
      </div>
      <div v-else-if="mode === 'my-entries'" class="col-10 mt-4">
        <div class="container">
          <div class="card div-summary">
            <div class="card-header font-weight-bold">Contest Summary</div>
            <div class="card-body">
              <div class="d-flex justify-content-center">
                <div class="abstract">
                  <span class="font-summary"> Entries Remaining </span>
                  <br />
                  <span class="font-weight-bold">1111</span>
                </div>
                <div class="abstract">
                  <span class="font-summary"> Current Selection </span>
                  <br />
                  <span class="font-weight-bold">{{
                    currentSelectedTeam
                  }}</span>
                </div>
                <div class="abstract">
                  <span class="font-summary"> Teams Selected </span>
                  <br />
                  <span class="font-weight-bold">{{
                    ticket.selectedTeams.length
                  }}</span>
                </div>
                <div class="abstract">
                  <span class="font-summary"> Status </span>
                  <br />
                  <span class="font-weight-bold">{{
                    capitalize(ticket.status)
                  }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card mt-3">
            <div class="col-12 week-header card-header">
              <div class="row">
                <div
                  v-for="week in weeks"
                  :key="week"
                  class="
                    col-1
                    d-flex
                    justify-content-center
                    flex-nowrap
                    align-items-center
                    my-1
                  "
                >
                  {{ week }}
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row">
                <pick-section
                  v-for="week in weeks"
                  :key="week"
                  :currentWeek="survivorPool.currentWeek"
                  :weekNumber="week"
                  :selection="findSelectionForWeek(week)"
                  :is-dead="ticket.status === 'dead'"
                  @selectWeekToPick="selectWeekToPick"
                  @editSelection="editSelection"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <teams-modal
        v-if="teamsModalShown && !loading"
        :current-week="survivorPool.currentWeek"
        :selectedWeek="selectedWeek"
        :selectedTeams="ticket.selectedTeams"
        :selection="findSelectionForWeek(selectedWeek)"
        @selectTeam="selectTeam"
        @editSelection="editSelection"
        @removeSelection="removeSelection"
        @closeModal="closeModal"
      />
      <div v-else-if="mode === 'all-entries'" class="col-10 mt-2">
        <all-entry />
      </div>
      <div v-else-if="mode === 'rules'" class="col-10 mt-2">
        <contest-rules />
      </div>
    </div>
  </main>
</template>

<script>
import api from "@/core/api";
import { mapState } from "vuex";
import AllEntry from "@/components/survivor/AllEntry.vue";
import ConnectToWallet from "@/components/survivor/ConnectToWallet.vue";
import ContestRules from "@/components/survivor/ContestRules.vue";
import NotConnected from "@/components/survivor/NotConnected.vue";
import PickSection from "../components/survivor/PickSection";
import TeamsModal from "../components/survivor/modals/TeamsModal";
import Spinner from "@/components/other/Spinner.vue";

export default {
  name: "SurvivorPool",
  components: {
    AllEntry,
    ConnectToWallet,
    ContestRules,
    NotConnected,
    PickSection,
    Spinner,
    TeamsModal,
  },
  data() {
    return {
      loading: true,
      mode: "",
      selectedWeek: null,
      survivorPool: {},
      teamsModalShown: false,
      ticket: {},
      weeks: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      capitalize: (value) => {
        if (!value) return value;
        const s = value.toString();
        return s.charAt(0).toUpperCase() + s.slice(1);
      },
    };
  },
  watch: {
    $route() {
      this.setMode();
      this.getSurvivorPool();
    },
  },
  computed: {
    ...mapState({
      publicKey: (state) => state.publicKey,
      walletConnected: (state) => state.walletConnected,
    }),
    currentSelectedTeam() {
      if (!this.ticket || !this.ticket.selections) {
        return "None";
      }
      const mostRecentSelection = this.ticket.selections.find(
        (selection) => selection.weekNumber === this.survivorPool.currentWeek
      );
      if (!mostRecentSelection) {
        return "None";
      }
      return mostRecentSelection.selection.selection.longName;
    },
  },
  created() {
    this.setMode();
    this.getSurvivorPool();
  },
  methods: {
    closeModal() {
      this.teamsModalShown = false;
      this.selectedWeek = null;
    },
    editSelection({
      gameID,
      oldParticipantID,
      participantID,
      selectedWeek,
      selectionID,
    }) {
      this.closeModal();
      this.loading = true;
      const data = {
        ticketID: this.ticket.id,
        gameID,
        oldParticipantID,
        participantID,
        weekNumber: selectedWeek,
        selectionID,
      };
      api.request("survivorPool/editSelection", data).then((res) => {
        this.handleSurvivorPoolResponse(res);
      });
    },
    findSelectionForWeek(weekNumber) {
      return this.ticket.selections.find(
        (selection) => selection.weekNumber === weekNumber
      );
    },
    getSurvivorPool() {
      if (!this.walletConnected) {
        this.$router.push("/survivor-pool/not-connected");
      } else if (this.mode === "my-entries" && this.walletConnected) {
        api.request("survivorPool/getSurvivorPool").then((res) => {
          this.handleSurvivorPoolResponse(res);
        });
      }
    },
    handleSurvivorPoolResponse(res) {
      this.survivorPool = res.survivorPool;
      [this.ticket] = res.tickets;
      this.loading = false;
    },
    selectTeam({ selectedWeek, participantID, gameID }) {
      this.closeModal();
      this.loading = true;
      const data = {
        gameID,
        participantID,
        ticketID: this.ticket.id,
        weekNumber: selectedWeek,
      };
      api.request("survivorPool/createSelection", data).then((res) => {
        this.handleSurvivorPoolResponse(res);
      });
    },
    removeSelection({ gameID, oldParticipantID, selectionID }) {
      this.closeModal();
      this.loading = true;
      const data = {
        gameID,
        oldParticipantID,
        selectionID,
        ticketID: this.ticket.id,
      };
      api.request("survivorPool/removeSelection", data).then((res) => {
        this.handleSurvivorPoolResponse(res);
      });
    },
    selectWeekToPick({ weekNumber }) {
      this.selectedWeek = weekNumber;
      this.teamsModalShown = true;
    },
    setMode() {
      this.mode = this.$route.params.mode;
      if (this.mode === "not-connected") {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="sass">
@import "../assets/styles/variables"

h4
  font-weight: normal
  color: #272d58

.bg-body
  background-color: rgba(242, 242, 246, 1)

.pickSection
  padding: 1.35rem 1rem
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  font-weight: bold
  font-size: $font-size-xs
  color: #272d58
  cursor: pointer
  width: 100%

  &:hover
    transform: scale(1.025)
    transition: transform 0.3s

button.connect-wallet
  border-radius: 35px
  padding-right: 37px
  padding-left: 37px
  padding-top: 11px
  padding-bottom: 11px
  background-color: #FF443C!important
  font-size: 12px
  width: 100%

.usernameSection
  padding: 1.35rem 1rem
  font-weight: bold
  font-size: $font-size-xs
  color: $color-primary
  cursor: pointer
  width: 100%

  &:hover
    transform: scale(1.025)
    transition: transform 0.3s

.week-header
  font-weight: $font-weight-semibold
  color: #272d58
  border-radius: 0px
  font-size: $font-size-xs
  margin: 0
  width: 100%
  @media screen and (max-width: map_get($grid-breakpoints, sm))
    display: none
.left-sidebar
  box-shadow: 0px 3px 6px #00000029
  height: 100vh
  background-color: #ffffff
nav
  margin-left: -1rem
  border-right: 1px solid rgba(150, 156, 203, 0.3)
  min-height: 100%
  height: 100%
  // cursor: pointer

  @media screen and (max-width: map_get($grid-breakpoints, md))
    min-height: 0
    border-right: 0
    margin-left: 0

    a, div
      border-top-right-radius: 6px
      border-bottom-right-radius: 6px

  a, div
    font-size: $font-size-sm
    font-weight: normal
    display: block
    width: 100%
    padding: .75rem 1rem
    color: #0A0A0A!important
    border-top-left-radius: 6px
    border-bottom-left-radius: 6px

    &:not(:last-child)
      margin-bottom: .5rem

    &:hover, &.router-link-active
      background: none
      text-decoration: none

  button.connect-wallet
    border-radius: 35px
    padding-right: 37px
    padding-left: 37px
    padding-top: 11px
    padding-bottom: 11px
    background-color: #FF443C!important
    font-size: 12px
    width: 100%

.not-active
  background-color: #f8f8f8

  &:hover
    transform: none
    transition: none

.live
  color: $color-primary

h3
  color: $color-primary

.wallet-not-found
  color: $text-gray
  background: #f8f8f8
  font-weight: $font-weight-normal
  font-size: $font-size-sm
  text-align: center
  border-radius: 4px
  cursor: pointer

.font-summary
  color: #343b86
  font-weight: lighter

.abstract
  border-radius: 7px
  background: #fff
  width: 25%
  padding: 11px
  margin-left: 9px
  text-align: center
  color: #343b86
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  // font-weight: bold
  font-size: 12px
  cursor: pointer
// box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important

.player-chart-header
  background: #343b86
  font-weight: $font-weight-semibold
  color: #fff
  border-radius: 4px
  margin: 0
  width: 100%
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  @media screen and (max-width: map_get($grid-breakpoints, md))
    font-size: xx-small

.card
  position: relative
  display: -webkit-box
  display: -ms-flexbox
  display: flex
  -webkit-box-orient: vertical
  -webkit-box-direction: normal
  -ms-flex-direction: column
  flex-direction: column
  min-width: 0
  word-wrap: break-word
  background-color: #fff
  background-clip: border-box
  border-radius: .25rem
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15)
  border-bottom-left-radius: 10px
  border-bottom-right-radius: 10px
  border-top-left-radius: 10px
  border-top-right-radius: 10px
.card-header:first-child
// border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
.card-header
  padding: 0.35rem 1.25rem
  margin-bottom: 0
  background-color: rgb(52, 59, 134)
  color: #fff
  border-top-left-radius: 10px
  border-top-right-radius: 10px
.card-body
  -webkit-box-flex: 1
  -ms-flex: 1 1 auto
  flex: 1 1 auto
  padding: 1.25rem
  background: #f8f8f8
  border-bottom-left-radius: 10px
  border-bottom-right-radius: 10px

  @media screen and (max-width: map_get($grid-breakpoints, md))
    padding: 1rem
</style>
