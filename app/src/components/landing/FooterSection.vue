<template>
  <footer class="py-5">
    <div class="container-fluid">
      <div style="width: 100%" class="row justify-content-center">
        <div class="col-12 d-flex d-lg-none justify-content-start mb-4">
          <div class="row px-5">
            <div class="col-12">
              <img src="/images/solsurvivor-color@2x.png" />
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-12">
          <div class="row px-5">
            <div class="col-12 email-link">info@4castersports.com</div>
            <div class="col-12 address">
              2100 S Oak St., Champaign, Illinois, 61820 © Fourcaster LLC, 2019
            </div>
          </div>
        </div>
        <div class="col-3 d-none d-lg-flex align-self-center">
          <img class="mx-auto d-block" src="/images/solsurvivor-color@2x.png" />
        </div>
        <div class="col-lg-3 col-12 py-3 py-lg-0">
          <div class="row justify-content-center">
            <div class="col-2">
              <img
                class="mx-auto d-block social-link"
                src="/images/Facebook@2x.png"
              />
            </div>
            <div class="col-2">
              <img
                class="mx-auto d-block social-link"
                src="/images/Twitter@2x.png"
              />
            </div>
            <div class="col-2">
              <img
                class="mx-auto d-block social-link"
                src="/images/Youtube@2x.png"
              />
            </div>
            <div class="col-2">
              <img
                class="mx-auto d-block social-link"
                src="/images/Instagram@2x.png"
              />
            </div>
            <div class="col-2">
              <img class="mx-auto d-block social-link" src="/images/M@2x.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterSection",
};
</script>
<style lang="sass">
footer
  border-top: 10px solid #343B86
  color: #343B86

.social-link
    width: 44px
    height: 44px
    display: flex
    justify-content: center
    align-items: center
    line-height: 0
    background: #343B86
    color: white
    border-radius: 50%
    &:not(:last-child)
      margin-right: 1rem

.email-link
  font-family: 'Poppins-regular'
  color: #343B86
  font-weight: bold
  font-size: 13px
  &:hover
    color: #343B86

.address
  font-family: 'Poppins-regular'
  color: #141414
  font-size: 10px
</style>
