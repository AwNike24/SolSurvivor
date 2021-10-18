<template>
  <main className="container py-md-2">
    <div class="row">
      <div class="col-12 col-md-2 mt-3">
        <nav>
          <router-link to="/survivor-pool/my-entries">
            My Entries {{ publicKey }}
          </router-link>
          <router-link to="/survivor-pool/all-entries">
            View All Entries
          </router-link>
          <router-link to="/survivor-pool/rules"> Rules </router-link>
        </nav>
      </div>
      <div v-if="loading" class="col-10">
        <spinner />
      </div>
      <div v-else-if="mode === 'my-entries'" class="col-10 mt-4">
        <div class="card div-summary">
          <div class="card-header font-weight-bold">Contest Information</div>
          <div class="card-body">
            <div class="d-flex justify-content-center">
              <div class="abstract">
                <span class="font-weight-light"> Entries Remaning </span>
                <br />
                1111
              </div>
              <div class="abstract">
                <span class="font-weight-light"> Current Selection </span>
                <br />
                d
              </div>
              <div class="abstract">
                <span class="font-weight-light"> Teams Selected </span>
                <br />
                d
              </div>
              <div class="abstract">
                <span class="font-weight-light"> Available Credit </span>
                <br />
                d
              </div>
            </div>
          </div>
          <div class="col-12 week-header card-header mt-4">
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
                "
              >
                {{ week }}
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row mb-3">
              <pick-section
                v-for="week in weeks"
                :key="week"
                :currentWeek="survivorPool.currentWeek"
                :weekNumber="week"
                :selection="findSelectionForWeek(week)"
                @selectWeekToPick="selectWeekToPick"
              />
            </div>
          </div>
        </div>
      </div>
      <teams-modal
        v-if="teamsModalShown"
        :selectedWeek="selectedWeek"
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
import Spinner from "@/components/other/Spinner.vue";
import ContestRules from "@/components/survivor/ContestRules.vue";
import AllEntry from "@/components/survivor/AllEntry.vue";
import PickSection from "../components/survivor/PickSection";
import TeamsModal from "../components/survivor/modals/TeamsModal";
// import { initWallet, useWallet } from "../useWallet";
// import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
// import { Connection, clusterApiUrl } from "@solana/web3.js";
// const wallets = [getPhantomWallet()];

export default {
  name: "SurvivorPool",
  components: {
    PickSection,
    Spinner,
    AllEntry,
    ContestRules,
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
    };
  },
  watch: {
    $route() {
      this.setMode();
    },
  },
  computed: {
    ...mapState({
      publicKey: (state) => state.publicKey,
    }),
  },
  created() {
    this.setMode();
    api.request("survivorPool/getSurvivorPool").then((res) => {
      this.survivorPool = res.survivorPool;
      [this.ticket] = res.tickets;
      this.loading = false;
    });
  },
  methods: {
    closeModal() {
      this.teamsModalShown = false;
      this.selectedWeek = null;
    },
    selectWeekToPick({ weekNumber }) {
      this.selectedWeek = weekNumber;
      this.teamsModalShown = true;
    },
    setMode() {
      this.mode = this.$route.params.mode;
    },
    findSelectionForWeek(weekNumber) {
      return this.ticket.selections.find(
        (selection) => selection.weekNumber === weekNumber
      );
    },
  },
};
</script>

<style lang="sass">
@import "../assets/styles/variables"

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

nav
  margin-left: -1rem
  border-right: 1px solid rgba(150, 156, 203, 0.3)
  min-height: 400px
  cursor: pointer

  @media screen and (max-width: map_get($grid-breakpoints, md))
    min-height: 0
    border-right: 0
    margin-left: 0

    a, div
      border-top-right-radius: 6px
      border-bottom-right-radius: 6px

  a, div
    font-size: $font-size-sm
    font-weight: $font-weight-light
    display: block
    width: 100%
    padding: .75rem 1rem
    color: $color-primary
    border-top-left-radius: 6px
    border-bottom-left-radius: 6px

    &:not(:last-child)
      margin-bottom: .5rem

    &:hover, &.router-link-active
      background: rgba(150, 156, 203, 0.3)
      text-decoration: none

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

.abstract
  border-radius: 7px
  background: #fff
  width: 25%
  padding: 11px
  margin-left: 9px
  text-align: center
  color: #343b86
  font-weight: bold
  font-size: 12px
  cursor: pointer
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important

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
.card-header:first-child
  border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0
.card-header
  padding: 0.35rem 1.25rem
  margin-bottom: 0
  background-color: rgb(52, 59, 134)
  color: #fff
.card-body
  -webkit-box-flex: 1
  -ms-flex: 1 1 auto
  flex: 1 1 auto
  padding: 1.25rem
  background: #f8f8f8

  @media screen and (max-width: map_get($grid-breakpoints, md))
    padding: 1rem
</style>
