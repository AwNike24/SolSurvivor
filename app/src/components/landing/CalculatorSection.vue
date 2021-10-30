<template>
  <section id="save-money">
    <div
      class="container pt-5 calculator-container"
      :style="widthResp < 768 ? 'padding-left:15%;' : ''"
    >
      <div class="row">
        <div
          class="col-12 row"
          :class="
            widthResp < 768 ? 'justify-content-start' : 'justify-content-center'
          "
        >
          <h1 class="mt-md-3 mb-5 w-100 text-center">
            <img
              src="/images/Icon-roadmap.png"
              style="margin-right: 20px; margin-top: -6px"
            />
            <span>Roadmap</span>
          </h1>
          <div v-if="widthResp >= 768" class="w-100 mt-4">
            <transition-group ame="flip-list" tag="div">
              <div
                v-for="(roadmap, index) in roadmaps"
                :key="index"
                class="row w-100 justify-content-center"
              >
                <div :class="index % 2 == 0 ? 'col-md-3' : 'col-md-4'">
                  <div class="row justify-content-end d-block">
                    <div v-if="index % 2 == 0" class="card-road left">
                      {{ roadmap.content }}
                    </div>
                  </div>
                </div>
                <div
                  v-if="index % 2 == 0"
                  class="col-md-1 align-self-center px-0"
                >
                  <div class="circle left" />
                  <div class="line-h" />
                </div>
                <div class="col-md-1 px-0" style="max-width: 6px">
                  <div class="h-100" style="margin-left: auto">
                    <div v-if="index == 0" class="circle circle-init" />
                    <div
                      class="line"
                      :class="[
                        roadmaps.length == 1 + index ? 'line-endborder' : '',
                        0 == index ? 'line-initborder' : '',
                      ]"
                    />
                    <div
                      v-if="index == roadmaps.length - 1"
                      class="circle circle-end"
                    />
                  </div>
                </div>
                <div
                  v-if="index % 2 != 0"
                  class="col-md-1 align-self-center px-0"
                >
                  <div class="line-h" />
                  <div class="circle right" />
                </div>
                <div :class="index % 2 != 0 ? 'col-md-3' : 'col-md-4'">
                  <div class="row justify-content-start d-block">
                    <div v-if="index % 2 != 0" class="card-road right">
                      {{ roadmap.content }}
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>

          <div v-if="widthResp < 768" class="w-100 mt-4">
            <transition-group ame="flip-list" tag="div">
              <div
                v-for="(roadmap, index) in roadmaps"
                :key="index"
                class="row w-100 ms-2 box-principal"
              >
                <div class="col-1 px-0" style="max-width: 6px">
                  <div class="h-100" style="margin-left: auto">
                    <div v-if="index == 0" class="circle circle-init" />
                    <div
                      class="line"
                      :class="[
                        roadmaps.length == 1 + index ? 'line-endborder' : '',
                        0 == index ? 'line-initborder' : '',
                      ]"
                    />
                    <div
                      v-if="index == roadmaps.length - 1"
                      class="circle circle-end"
                    />
                  </div>
                </div>
                <div class="col-2 align-self-center px-0">
                  <div class="line-h" />
                  <div class="circle right" />
                </div>
                <div class="col-9">
                  <div
                    class="row justify-content-start my-4 w-100"
                    style="display: inline-table"
                  >
                    <div class="card-road right">
                      {{ roadmap.content }}
                    </div>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Selector from "../other/Selector.vue";

export default {
  name: "CalculatorSection",
  // eslint-disable-next-line vue/no-unused-components
  components: { Selector },
  data() {
    return {
      widthResp: window.innerWidth,
      roadmaps: [
        {
          title: "",
          content: "10-15 Enter Solana Hackathon",
          icon: "fa fa-globe",
        },
        {
          title: "",
          content: "10-18 Launch Discord & Twitter",
          icon: "fa fa-globe",
        },
        {
          title: "",
          content: "11-8 Sale begins, secondary market live.",
          icon: "fa fa-globe",
        },
        {
          title: "",
          content: "11-11 Survivor Pool Begins",
          icon: "fa fa-globe",
        },
        {
          title: "",
          content:
            "11-15 Survivor Pool Explorer is Live (See what every entry has previously picked)",
          icon: "fa fa-globe",
        },
        {
          title: "",
          content: "11-30 In-House Secondary Market is Live",
          icon: "fa fa-globe",
        },
        { title: "", content: "12-30 DAO established", icon: "fa fa-globe" },
        {
          title: "",
          content: "1-10 NFL Season Ends, Prizes Distributed",
          icon: "fa fa-globe",
        },
        {
          title: "",
          content: "1-12 NFL Playoffs Mint Launches, Prizes Distributed",
          icon: "fa fa-globe",
        },
        /*
        { title: '', content: '1-10 NFL Season Ends, Prizes Distributed', icon: 'fa fa-globe' },
        { title: '', content: '1-11-22 NFL Playoffs Mint Launches', icon: 'fa fa-globe' },
        { title: '', content: '11-15-22 NFL Playoffs Start', icon: 'fa fa-globe' },
        */
      ],
      betSize: 500,
      numBets: 25,
      avgLines: -110,

      selectors: {
        betSizes: [
          { name: "100", id: "1" },
          { name: "500", id: "2" },
          { name: "2000", id: "3" },
        ],
        numsBets: [
          { name: "10", id: "1" },
          { name: "25", id: "2" },
          { name: "50", id: "3" },
        ],
      },

      numBetsSelected: { name: "25", id: "2" },
      betSizesSelected: { name: "500", id: "2" },

      WEEKS_A_YEAR: 52,
    };
  },
  computed: {
    bookieFee() {
      return (
        1 - (Math.abs(this.avgLines) + 100) / (2 * Math.abs(this.avgLines))
      );
    },
  },
  watch: {
    numBetsSelected(value) {
      this.numBets = Number(value.name);
    },
    betSizesSelected(value) {
      this.betSize = Number(value.name);
    },
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    browseSignUp() {
      window.location.href = `${window.location.href}sign-up`;
    },
    onResize() {
      this.widthResp = window.innerWidth;
    },
  },
};
</script>
<style lang="sass" scoped>
@import "@/assets/styles/variables"

section
  font-size: 1.25rem
  background-color: white
  background-image: url(/images/Background-roadmap@2x.png)
  background-repeat: no-repeat
  background-size: 100% 99%
  padding-top: 90px
  color: white
  @media screen and (max-width: map_get($grid-breakpoints, sm))
    background-image: url('/images/Background-roadmap.png')
    background-repeat: no-repeat
    background-size: 100% 100%
    padding-top: 20px

h1
  font-size: 2.5rem
  margin-bottom: 1rem

h5
  font-size: 2.25rem

  &.savings
    color: #82D173

input
  text-align: center
  width: 100%
  padding: 1rem
  border: none
  border-radius: 10px
  background: #272D58
  font-weight: bold
  color: white
  font-size: 1.25rem

button
  width: 100%
  display: block
  padding: 1rem 2rem
  border: none
  border-radius: 10px
  background: white
  color: #343B86
  font-size: 1.25rem
  font-weight: bold
  outline: none

.calculator-container
  padding-bottom: 100px
  max-width: 1500px

  @media screen and (max-width: map_get($grid-breakpoints, md))
    background-position: center 30px, bottom center
    background-size: 80% auto, 80% auto
    padding-bottom: 200px !important

.shadow
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  margin: 0px
.card-road
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  transition: 0.3s
  border-radius: 25px
  background-color: #41489A
  height: 150px
  width: 100%
  font-family: $font-poppins-medium !important
  position: relative
  display: table-cell
  vertical-align: middle
  padding: 15px 45px 15px 20px

.card-road.left
  padding-right: 45px
  left: 13px

.card-road.right
  padding-left: 45px
  right: 13px

.line
  border-left: 6px solid white
  height: 100%
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
.line-h
  border-top: 6px solid white
  width: 100%
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  position: relative
  z-index: 9
.line-initborder
  border-top-right-radius:(5px)
  border-top-left-radius:(5px)
.line-endborder
  border-bottom-right-radius:(5px)
  border-bottom-left-radius:(5px)
.fade-enter-active, .fade-leave-active
  transition: opacity 0.5s
.fade-enter, .fade-leave-to
  transition: opacity 0
.flip-list-move
  transition: transform 1s
.circle
  width: 25px
  height: 25px
  border-radius: 50%
  border: 6px solid white
  margin-left: -20px
  margin-top: -10px
  position: absolute
.circle.left
  margin-left: -20px
.circle.right
    right: -20px
    z-index: 99
    margin-top: -15px
    float: right
    position: relative
.circle-init
  background-color: white
  margin-left: -10px
  margin-top: -23px
.circle-end
  background-color: white
  position: relative
  margin-left: -10px

.box-principal
  @media screen and (max-width: map_get($grid-breakpoints, md))
    margin-left: 0 !important
</style>
