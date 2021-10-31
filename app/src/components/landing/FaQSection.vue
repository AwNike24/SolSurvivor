<template>
  <section id="faquestions" class="py-5">
    <div class="container">
      <div>
        <div class="row">
          <div class="col-md-6 col-sm-12 text-center mt-md-2 text-color">
            <span class="text-faq">Still have questions</span>
            <span class="sign">?</span>
            <img class="fq-left" src="/images/fq.png" />
          </div>
          <div class="col-md-6 col-sm-12 text-justify">
            <div v-for="(item, x) in questionsItems" :key="x" class="questions">
              <div class="questions-title" @click="clickOpenQuestion(x, item)">
                <div class="title-text">
                  <div class="title-text-title">
                    {{ item.title }}
                  </div>
                  <div v-if="item.open && isActive === x" class="icons-toggle">
                    <font-awesome-icon :icon="['fas', 'angle-up']" />
                  </div>
                  <div v-else class="icons-toggle">
                    <font-awesome-icon :icon="['fas', 'angle-down']" />
                  </div>
                </div>
              </div>
              <transition name="fade" class="questions-response">
                <div v-if="item.open" class="response">
                  <p>{{ item.response }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "FaQSection",
  components: {},
  data() {
    return {
      name: "",
      email: "",
      loading: false,
      signedUp: false,
      isActive: false,
      isOpen: false,
      questionsItems: [
        {
          title: "What is a NFL survivor pool?",
          response: `A NFL survivor pool is a prediction contest where the objective is to strategically select 1 different team to win per week.
          Once you select a team you no longer can select them for the rest of the contest. The entries that make it through 10 games will split the prize.`,
          open: false,
        },
        {
          title: "What will I get from minting",
          response: `Everyone who mints a SolSurvivor will get a ticket with a unique number.
          If you survive, you will get a new NFT depending on what team you select in week 1 of the contest.
          Each week you survive, you will be able to upgrade your old NFT for a new one with another feature.
          The less common your pick is, the more rare the trait will be if it wins.`,
          open: false,
        },
        {
          title: "What is the Trait Schedule?",
          response:
            "Week 1: Goat, Week 2: Background, Week 3: Horns, Week 4: Shirt, Week 5: Eyes, Week 6: Mouth, Week 7: Head, Week 8: Necklace, Week 9: Pixelated.",
          open: false,
        },
        //  {
        //    title: 'How can I know what trait I will get?',
        //    response: 'The traits will change every week. For example, if the eagles are selected by someone in week 9 and someone else selects the eagles week 10, they will receive different traits.'
        //      + 'a HINT: the rarity of the team you select in the first week will be important in determining the evolution of your SolSurvivor.',
        //    open: false,
        //  },
        //  {
        //    title: 'Can I get multiple of the same trait?',
        //    response: 'No, every week all entries will get the same TYPE of trait. For example,'
        //      + 'the first week will give you a type of goat. Week 2 will get you a background.',
        //    open: false,
        //  },
        {
          title: "When is the Mint, how much does it cost?",
          response:
            "Our Mint Date is tentatively planned for November 10th, Mint Costs is TBD and there will be upto 1111 SolSurvivors available",
          open: false,
        },
        {
          title: "What Happens After The Survivor Pool?",
          response:
            "We will continue to run survivor pools! Your ticket from the genesis will serve as a pre-mint pass for future pools, " +
            "and it will also get you voting rights when we launch our DAO before the end of this NFL Season.",
          open: false,
        },
      ],
    };
  },
  created() {
    if (window.localStorage) {
      this.signedUp = window.localStorage.getItem("isAlreadyJoined") === "true";
    }
  },
  methods: {
    signUp() {
      this.loading = true;
      axios
        .post(
          "https://core-api-dot-fourcaster-221403.appspot.com/user/addToMailingList",
          {
            email: this.email,
            name: this.name,
          }
        )
        .then(() => {
          this.signedUp = true;
          this.loading = false;
          if (window.gtag) {
            window.gtag("event", "JoinWaitlist", {
              event_category: "Account",
            });
          }

          if (window.localStorage) {
            window.localStorage.setItem("isAlreadyJoined", "true");
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    clickOpenQuestion(x, item) {
      this.isActive = x;
      this.questionsItems[x].open = !item.open;
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
<style lang="sass" scoped>
@import "@/assets/styles/variables"

#faquestions
  background-image: url('/images/cuadricula-purple.png')
  background-repeat: no-repeat
  background-position: 20em 4.8cm
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    background-image: none
  @media screen and (max-width: map_get($grid-breakpoints, md))
    background-image: none
h5
  font-size: 1.25rem
  color: #343B86
.text-faq
  font-size: 30px
  text-align: left
  font-family: $font-poppins-medium !important
  letter-spacing: 0px
  color: #0A0A0A
.sign
  font-size: 30px !important
  text-align: left
  font-family: $font-poppins-medium !important
  letter-spacing: 0px
  color: #7784D5
img.fq-left
  height: 340px
  width: auto
  max-height: 240px
  margin-bottom: 20px
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    max-width: 80%
    height: auto
    max-height: 300px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    max-height: 200px
input
  display: block
  width: 100%
  padding: 1rem 2rem
  border: none
  border-radius: 10px
  background: rgba(150, 156, 203, .3)
  color: #343B86
  font-size: 1.25rem
  outline: none

input::placeholder
  color: #343B86

button
  display: block
  width: 100%
  padding: 1rem 2rem
  border: none
  border-radius: 10px
  background: #343B86
  color: white
  font-size: 1.25rem
  font-weight: bold
  outline: none
.questions
  border: none
.title-text
  width: 84%
  float: left
  padding: 10px 15px 10px 15px
  border-bottom: 1px solid #e9e9eb
  font-weight: normal
  background: #ffffff
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  cursor: pointer
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    width: 100%
  @media screen and (max-width: map_get($grid-breakpoints, md))
    width: 100%
.title-text-title
  width: 95%
  float: left
  color: #000
  font-weight: bold
  font-size: 14px
  font-family: $font-poppins-medium !important
  letter-spacing: 0px
  opacity: 1
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
.icons-toggle
  width: 5%
  float: left
  text-align: right
  color: #343b86
.questions-response
  font-weight: 300 !important
  color: #2b3dbb
  padding: 55px 0px 2px 0px
  background: #fff
.response
  float: left
  position: relative
  top: 1px
  bottom: 6px
  font-size: 13px
  width: 84%
  background: #fff
  text-align: justify
  font-weight: 400
  padding-left: 13px
  padding-right: 13px
  padding-top: 18px
  color: #343b86
  font-weight: lighter
  font-family: $font-poppins-medium !important
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    width: 100%
  @media screen and (max-width: map_get($grid-breakpoints, md))
    width: 100%
.text-color
  color: #343b86
.active-response
  max-height: 300px
  transition: .3s all ease-in
.disabled-response
  min-height: 0px
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0
</style>
