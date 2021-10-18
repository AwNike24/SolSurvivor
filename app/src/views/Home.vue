<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
  <div>
    <div>Wallet: {{ walletProvider }}</div>
    <button v-if="connected" @click="disconnect">Disconnect</button>
    <button v-else @click="connectToPhantom">Connect</button>
    <h1>publicKey: {{ publicKey }}</h1>
    <h1>connection: {{ connection }}</h1>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { ref } from 'vue';
import { mapMutations } from "vuex";
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import { initWallet, useWallet } from '../useWallet';
const wallets = [getPhantomWallet()];

export default {
  name: 'Home',
  components: {},
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
      await select('Phantom');
      await connect();

      const connection = new Connection(
        clusterApiUrl('mainnet-beta'),
        'confirmed'
      );

      let account = await connection.getAccountInfo(
        publicKey.value,
        'confirmed'
      );

      console.log('account', account);
      console.log('connection', connection);
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
  watch: {
    publicKey(newValue) {
      this.setPublicKey(newValue.toString());
    },
  },
  methods: {
    ...mapMutations([
      'setPublicKey'
    ]),
  }
};
</script>

<style scoped lang="sass">

@import "../assets/styles/variables"

.header-section
  background: #343B86


  h1
    font-weight: bold
    font-size: 5rem
    color: white
    margin-bottom: 0
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 3.75rem

  h2
    font-size: 2.25rem
    font-weight: lighter
    color: white
    margin-top: 0
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 1.25rem

  .title-container
    img
      margin-top: -25px
      transform: translateY(8.3%)
      width: 100%
      height: auto
      @media screen and (max-width: map_get($grid-breakpoints, sm))
        margin-top: 3px

.free-acct-info
  background-color: #F5F0F6
  border: 3px solid #969ccb
  color: $color-primary
  font-weight: bold

  &:hover, &.router-link-active
    text-decoration: none
    transform: scale(1.025)
    transition: transform 0.3s
</style>
