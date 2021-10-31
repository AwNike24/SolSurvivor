<template>
  <section id="about">
    <div class="container py-5 margin text-center">
      <h1>Rarity</h1>
      <h3 class="my-4">
        Unlike other NFTs, the rarity of your
        <span style="color: #a7c6ff; font-weight: 600"> SolSurvivor </span> NFT
        depends only on your skill predicting the NFL. Pick teams that others
        don't to get more rare traits. Everyone starts with the same NFT, the
        rest is up to you.<br />
        <b> Trait schedule by week: </b>
        Goat, Background, Horns, Shirt, Eyes, Mouth, Head, Necklace, Pixelated
      </h3>
      <div class="row justify-content-center">
        <div
          v-for="(cardContent, index) in cards"
          :key="index"
          class="
            col-12 col-sm-6 col-md-6 col-lg-3
            mb-4
            d-flex
            justify-content-center
          "
        >
          <div class="card-component" style="width: 16rem">
            <img
              v-if="cardContent.img && cardContent.img != ''"
              :src="cardContent.img"
              class="w-100 imagen-card"
            />
            <div
              v-for="(content, index2) in cardContent.contents"
              :key="index2"
              class="card-body"
            >
              <h5 :class="content.class">
                {{ content.title }}
              </h5>
              <span
                class="badge rounded-pill"
                :class="[
                  content.badged.status ? 'badge-middle' : 'badge-border',
                  index2 == cardContent.contents.length - 1 ? 'mb-3' : 'mb-0',
                ]"
                >{{ content.badged.content }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "VideoSection",
  components: {},
  data() {
    return {
      cards: [
        {
          img: require("../../../public/images/logo_card1.jpg"),
          contents: [
            {
              title: "Head: Jester Hat",
              class: ["card-title"],
              badged: {
                status: 0,
                content: "Jets Week 16: 0.50% Owned",
              },
            },
            {
              title: "Necklace: Royal Flush",
              class: ["card-subtitle"],
              badged: {
                status: 0,
                content: "Jaguars Week 17: 0.25% Owned",
              },
            },
          ],
        },
        {
          img: require("../../../public/images/logo_card2.jpg"),
          contents: [
            {
              title: "Head: 3rd Eye",
              class: ["card-title"],
              badged: {
                status: 1,
                content: "Colts Week 16: 1% owned",
              },
            },
            {
              title: "Shirt: Suit",
              class: ["card-subtitle"],
              badged: {
                status: 1,
                content: "Packers Week 13: 8% owned",
              },
            },
          ],
        },
        {
          img: require("../../../public/images/logo_card3.jpg"),
          contents: [
            {
              title: "Head: Purple Headband",
              class: ["card-title"],
              badged: {
                status: 0,
                content: "Rams Week 16: 10% owned",
              },
            },
            {
              title: "Background: Coins",
              class: ["card-subtitle"],
              badged: {
                status: 0,
                content: "Packers Week 11: 10% owned",
              },
            },
          ],
        },
      ],
      options: {
        currentPage: 0,
        autoplay: 3000,
        speed: 300,
        loop: true,
      },
    };
  },
  methods: {
    browseSignUp() {
      window.location.href = `${window.location.href}sign-up`;
    },
  },
};
</script>
<style lang="sass" scoped>
@import "@/assets/styles/variables"

h1
  font-family: $font-poppins-bold
  font-weight: bolder
  font-size: 2rem
  color: #A7C6FF

h3
  font-family: $font-poppins
  font-size: 14px
  font-weight: 400
  color: white
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    padding-left: 0
    padding-right: 0
  padding-left: 160px
  padding-right: 160px

section
  background-image: url('/images/Background-rarity@2x.png')
  background-repeat: no-repeat
  background-size: 100% 100%
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    background-image: url('/images/Background-raity.png')
    background-size: 100% 100%
    background-repeat: no-repeat

h5
  font-size: 1.25rem
  color: white
  font-weight: normal
#testimonials
  z-index: 1000
  margin-top: -210px
  position: absolute
  width: 100%
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    margin-top: -110px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    margin-top: -110px
.video-container
  position: relative
  padding-bottom: 54.25%
  height: 0

  iframe
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%

p
  color: white
  font-size: 1.25rem
  line-height: 1.75rem

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

  &:hover
    background-color: white
    text-decoration: underline
.slider-item
  color: #343B86
  font-size: 1.25rem
.mt-section
  margin-top: 290px !important
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    margin-top: 100px !important
  @media screen and (max-width: map_get($grid-breakpoints, md))
    margin-top: 100px !important
.margin-top
  margin-top: 10px
.div-aliens
  min-height: 250px
.card-component
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)
  transition: 0.3s
  border-radius:(20px)
  border: none
  background:(white !important)
  border-color:(white !important)
.card-body
  padding:(10px)
.card-title
  font-family: $font-poppins-bold
  font-size: 0.9rem
  color: #0A0A0A
.card-subtitle
  font-family: $font-poppins
  font-size: 0.9rem
  color: #0A0A0A
.imagen-card
  border-top-right-radius:(20px)
  border-top-left-radius:(20px)
  height: 200px
.badge
    display: inline-block
    padding: .35em .65em
    font-size: .7em
    font-weight: 400
    line-height: 1
    color: #fff
    text-align: center
    white-space: nowrap
    vertical-align: baseline
    border-radius: .25rem
    font-family: $font-poppins
    padding: .8rem .75rem
.badge-middle
  background-color: #757DCE
.badge-border
  background-color: #343B86
</style>
