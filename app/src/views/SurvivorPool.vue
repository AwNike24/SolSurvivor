<template>
  <div>
    <header-dashboar-component />
    <main class="container-fluid bg-body">
      <div class="row no-gutters">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-4 content-menu-dashboard">
          <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav flex-column w-100">
                  <li class="nav-item">
                    <connect-to-wallet />
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/survivor-pool/my-entries"
                      class="d-flex align-items-center"
                    >
                      <img
                        src="../../public/icons/solsulvivor/Icon-awesome-external-link-square-alt.svg"
                      />
                      <h4 class="ms-3 my-0">My Entry</h4>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/survivor-pool/all-entries"
                      class="d-flex align-items-center"
                    >
                      <img
                        src="../../public/icons/solsulvivor/Icon-material-pageview.svg"
                      />
                      <h4 class="ms-3 my-0">View All Entries</h4>
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      to="/survivor-pool/rules"
                      class="d-flex align-items-center"
                    >
                      <img
                        src="../../public/icons/solsulvivor/Icon-awesome-list-alt.svg"
                      />
                      <h4 class="ms-3 my-0">Rules</h4>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- <nav class="left-sidebar p-4">
          <connect-to-wallet />
          <router-link
            to="/survivor-pool/my-entries"
            class="d-flex align-items-center"
          >
            <img
              src="../../public/icons/solsulvivor/Icon-awesome-external-link-square-alt.svg"
            />
            <h4 class="ms-3 my-0">My Entry</h4>
          </router-link>
          <router-link
            to="/survivor-pool/all-entries"
            class="d-flex align-items-center"
          >
            <img
              src="../../public/icons/solsulvivor/Icon-material-pageview.svg"
            />
            <h4 class="ms-3 my-0">View All Entries</h4>
          </router-link>
          <router-link
            to="/survivor-pool/rules"
            class="d-flex align-items-center"
          >
            <img
              src="../../public/icons/solsulvivor/Icon-awesome-list-alt.svg"
            />
            <h4 class="ms-3 my-0">Rules</h4>
          </router-link>
        </nav> -->
        </div>
        <div v-if="loading" class="col-xl-10 col-lg-9 col-md-12 col-sm-12">
          <spinner />
        </div>
        <div
          v-else-if="mode === 'not-connected'"
          class="col-xl-10 col-lg-9 col-md-12 col-sm-12 mt-2"
        >
          <not-connected />
        </div>
        <div
          v-else-if="mode === 'my-entries'"
          class="col-xl-10 col-lg-9 col-md-12 col-sm-12 mt-4"
        >
          <div class="container">
            <div class="card div-summary">
              <div class="card-header fw-bold">Contest Summary</div>
              <div class="card-body">
                <div class="d-flex justify-content-center content-abstract">
                  <div class="abstract">
                    <span class="font-summary"> Entries Remaining </span>
                    <br />
                    <span class="fw-bold">1111</span>
                  </div>
                  <div class="abstract">
                    <span class="font-summary"> Current Selection </span>
                    <br />
                    <span class="fw-bold">{{ currentSelectedTeam }}</span>
                  </div>
                  <div class="abstract">
                    <span class="font-summary"> Teams Selected </span>
                    <br />
                    <span class="fw-bold">{{ numberOfSelectedTeams }}</span>
                  </div>
                  <div class="abstract">
                    <span class="font-summary"> Status </span>
                    <br />
                    <span class="fw-bold font-summary-medium">
                      {{ capitalize(ticket.status) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="card div-weeks mt-3">
              <div
                class="
                  row
                  week-header
                  card-header
                  d-flex
                  justify-content-between
                "
              >
                <div
                  v-for="week in weeks"
                  :key="week"
                  class="
                    col-xs-12 col-sm-12 col-md-12 col-lg col-xl
                    p-2
                    flex-nowrap
                    align-items-center
                    my-1
                    week week-movil
                    text-center
                  "
                >
                  <b class="text-week">{{ week }}</b>
                </div>
              </div>
              <div class="row g-0 week-body d-flex justify-content-between">
                <pick-section
                  v-for="week in weeks"
                  :key="week"
                  :currentWeek="survivorPool.currentWeek || 0"
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
        <div
          v-else-if="mode === 'all-entries'"
          class="col-xl-10 col-lg-9 col-md-12 col-sm-12 mt-2"
        >
          <all-entry />
        </div>
        <div
          v-else-if="mode === 'rules'"
          class="col-xl-10 col-lg-9 col-md-12 col-sm-12 mt-2"
        >
          <contest-rules />
        </div>
      </div>
    </main>
  </div>
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
import HeaderDashboarComponent from "../components/header/HeaderDashboarComponent.vue";

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
    HeaderDashboarComponent,
  },
  data() {
    return {
      loading: true,
      selectedWeek: null,
      survivorPool: {},
      teamsModalShown: false,
      ticket: {},
      weeks: [10, 11, 12, 13, 14, 15, 16, 17, 18],
      capitalize: (value) => {
        if (!value) return value;
        const s = value.toString();
        return s.charAt(0).toUpperCase() + s.slice(1);
      },
    };
  },
  watch: {
    $route(to) {
      if (to.path !== "/") {
        this.loading = true;
        this.getSurvivorPool();
      }
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
    mode() {
      return this.$route.params.mode;
    },
    numberOfSelectedTeams() {
      if (!this.ticket || !this.ticket.selectedTeams) {
        return 0;
      }
      return this.ticket.selectedTeams.length;
    },
  },
  created() {
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
      if (!this.ticket || !this.ticket.selections) {
        return;
      }
      return this.ticket.selections.find(
        (selection) => selection.weekNumber === weekNumber
      );
    },
    // requests getSurvivorPool from API
    // this endpoint returns the contest and
    getSurvivorPool() {
      if (this.mode === "not-connected") {
        this.loading = false;
      } else if (!this.walletConnected) {
        this.$router.push("/survivor-pool/not-connected");
      } else if (this.mode === "my-entries" && this.walletConnected) {
        console.log(this.publicKey);
        api.request("survivorPool/getSurvivorPool").then((res) => {
          this.handleSurvivorPoolResponse(res);
        });
      }
      this.loading = false;
    },
    // generic handler called every time /getSurvivorPool is called from the api
    handleSurvivorPoolResponse(res) {
      this.survivorPool = res.survivorPool;
      [this.ticket] = res.tickets;
      this.loading = false;
    },
    // adds a new selection to the users survivor pool ticket
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
    // removes an already selected team from that week
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
    // initialize select teams modal
    selectWeekToPick({ weekNumber }) {
      this.selectedWeek = weekNumber;
      this.teamsModalShown = true;
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../assets/styles/variables"

h4
  font-weight: normal
  color: #272d58
  font-size: 16px

.bg-body
  background-color: rgba(242, 242, 246, 1)
  font-family: $font-poppins

.pickSection
  padding: 1.35rem 1rem
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  font-weight: bold
  font-size: $font-size-xs
  color: #272d58
  cursor: pointer
  &:not(:last-child)
    @media screen and (max-width: map_get($grid-breakpoints, lg))
      border-bottom: 1px solid #DBDBDB

  &:hover
    transform: scale(1.025)
    transition: transform 0.3s

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

.div-weeks
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    display: block !important
    width: 100%
    float: left
    border-radius: 10px !important
    margin: 25px 0 !important

.week-header
  font-weight: $font-weight-semibold
  color: #272d58
  border-radius: 0px
  font-size: $font-size-xs
  margin: 0
  width: 100%
  padding: 5px 0 !important
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    width: 25%
    float: left
    padding: 0 0 0 10px !important
    border-radius: 10px 0 0 10px !important

    .week
      @media screen and (max-width: map_get($grid-breakpoints, lg))
        margin: 0 !important

      &:not(:last-child)
        @media screen and (max-width: map_get($grid-breakpoints, lg))
          border-bottom: 1px solid #FFFFFF

.week-body
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    width: 75%
    float: left
    padding-right: 10px

.left-sidebar
  box-shadow: 0px 3px 6px #00000029
  height: 100vh
  background-color: #ffffff
  @media screen and (max-width: map_get($grid-breakpoints, md))
    height: auto

.content-menu-dashboard
  box-shadow: 0px 3px 6px #00000029
  height: 100vh
  background-color: #ffffff
  padding: 0
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    height: auto
    position: absolute
    top: 4px
    z-index: 999
    background-color: transparent
    box-shadow: none
    width: 230px

  nav.navbar
    align-items: start
    font-family: $font-poppins

    @media screen and (max-width: map_get($grid-breakpoints, lg))
      background-color: transparent !important
      padding: 0
      border-right: transparent
      margin-left: 0

    .container-fluid
      @media screen and (max-width: map_get($grid-breakpoints, lg))
        padding: 0 !important

    .navbar-toggler
      background: transparent
      color: #FFF
      border-color: transparent
      opacity: 1
      margin: 10px 10px 0

      @media screen and (max-width: map_get($grid-breakpoints, md))
        margin: 6px 10px 0

      .navbar-toggler-icon
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")

    .navbar-toggler:focus
      box-shadow: none

    .navbar-collapse.show
      background: #FFFFFF
      margin-top: 20px
      height: 100vh
      border-radius: 0
      box-shadow: 0px 3px 6px #00000029

      @media screen and (max-width: map-get($grid-breakpoints, lg))
        margin-top: 16px

      @media screen and (max-width: map-get($grid-breakpoints, md))
        margin-top: 7px

nav
  border-right: 1px solid rgba(150, 156, 203, 0.3)
  min-height: 100%
  height: 100%

  @media screen and (max-width: map_get($grid-breakpoints, md))
    min-height: 0
    border-right: 0
    margin-left: 0

  a, div
    font-size: $font-size-sm
    font-weight: normal
    display: block
    width: 100%
    padding: .75rem 1rem
    color: #0A0A0A !important

    &:not(:last-child)
      margin-bottom: .5rem

    &:hover, &.router-link-active
      background: none
      text-decoration: none

  button.connect-wallet
    padding: 10px !important

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

.content-abstract
  width: 100%
  @media screen and (max-width: 991px)
    display: block !important

  .font-summary
    color: #343b86
    font-weight: lighter

  .font-summary-medium
    font-family: $font-poppins-medium

  .abstract
    border-radius: 7px
    background: #fff
    width: 25%
    padding: 11px
    margin-left: 9px
    text-align: center
    color: #343b86
    box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
    font-size: 12px
    cursor: pointer
    border: 1px solid #7899D4

    @media screen and (max-width: map_get($grid-breakpoints, lg))
      margin-left: 1%
      float: left
      width: 47.3%
      margin-left: 2%
      margin-bottom: 2%

    @media screen and (max-width: 550px)
      width: 100%
      margin-left: 0
      margin-bottom: 4%

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
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    padding: 0 0 0 10px !important

.card-body
  -webkit-box-flex: 1
  -ms-flex: 1 1 auto
  flex: 1 1 auto
  padding: 1.25rem
  background: #f8f8f8
  border-bottom-left-radius: 10px
  border-bottom-right-radius: 10px

  @media screen and (max-width: map_get($grid-breakpoints, lg))
    padding-right: 10px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    padding: 1rem

.week-movil
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    width: 100%
    padding: 10px
    height: 115px
    box-shadow: none
    position: relative

.div-summary
  .card-header
    @media screen and (max-width: map_get($grid-breakpoints, lg))
      padding: 0.35rem 1.25rem !important
.items-weekens
  width: 11%
  text-align: center
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    width: 100%
.text-week
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    position: absolute
    top: 44%;
    left: 42%
</style>
