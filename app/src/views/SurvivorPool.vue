<template>
  <main className="container py-md-2">
    <div class="row">
      <div class="col-12 col-md-2 mt-3">
        <nav>
          <div>
            <button v-if="connected" @click="disconnect">Disconnect</button>
            <button v-else @click="connectToPhantom">Connect</button>
          </div>
          <router-link to="/survivor-pool/my-entries"> My Entries </router-link>
          <router-link to="/survivor-pool/all-entries">
            View All Entries
          </router-link>
          <router-link to="/survivor-pool/rules"> Rules </router-link>
        </nav>
      </div>
      <div v-if="loading" class="col-10">
        <spinner />
      </div>
      <div v-else-if="mode === 'my-entries'" class="col-10 mt-2">
        My ENTRIES MODE
      </div>
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
import { mapMutations, mapState } from "vuex";
import Spinner from "@/components/other/Spinner.vue";
import ContestRules from "@/components/survivor/ContestRules.vue";
import AllEntry from "@/components/survivor/AllEntry.vue";
import { initWallet, useWallet } from "../useWallet";
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";
// import { Connection, clusterApiUrl } from "@solana/web3.js";
const wallets = [getPhantomWallet()];

export default {
  name: "SurvivorPool",
  components: {
    Spinner,
    AllEntry,
    ContestRules,
  },
  data() {
    return {
      loading: false,
      mode: "",
    };
  },
  watch: {
    $route() {
      this.setMode();
    },
  },
  setup() {
    // localStorage.setItem('solana-wallet-provider', JSON.stringify('Phantom'));
    initWallet(wallets);
    const {
      wallet,
      walletProvider,
      connect,
      disconnect,
      connected,
      select,
      publicKey,
    } = useWallet();

    const connectToPhantom = async () => {
      await select("Phantom");
      await connect();

      // const connection = new Connection(
      //   clusterApiUrl('mainnet-beta'),
      //   'confirmed'
      // );
      //
      // let account = await connection.getAccountInfo(
      //   publicKey.value,
      //   'confirmed'
      // );
      //
      // console.log('account', account);
      // console.log('connection', connection);
    };

    return {
      walletProvider,
      wallet,
      disconnect,
      connected,
      connect,
      connectToPhantom,
      publicKey,
    };
  },
  computed: {
    ...mapState({
      publicKey: state => state.publicKey,
    }),
  },
  created() {
    this.loading = true;
    this.setPublicKey(this.publicKey);
    this.setMode();
    if (!this.connected) {
      this.loading = true;
    } else {
      api.request("survivorPool/getSurvivorPool").then(() => {
        this.loading = false;
      });
    }
  },
  methods: {
    ...mapMutations(["setPublicKey"]),
    setMode() {
      this.mode = this.$route.params.mode;
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

.player-chart-header
  font-weight: $font-weight-semibold
  color: #272d58
  border-bottom: 2px solid #969ccb
  border-radius: 0px
  font-size: $font-size-xs
  margin: 0
  width: 100%
  @media screen and (max-width: map_get($grid-breakpoints, sm))
    display: none

.player-entry-header
  font-weight: $font-weight-semibold
  color: $color-primary
  border-bottom: 2px solid #969ccb
  border-radius: 0px
  font-size: $font-size-xs
  margin: 0
  width: 100%

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
</style>
