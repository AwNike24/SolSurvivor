<template>
  <div class="col-auto order-lg-2 order-1">
    <div class="d-flex align-items-center">
      <button
        class="sign-up-button font-weight-bold"
        v-if="connected"
        @click="disconnect"
      >
        Disconnect
      </button>
      <button
        class="sign-up-button font-weight-bold"
        v-else
        @click="connectToPhantom"
      >
        Connect
      </button>
    </div>
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
import { initWallet, useWallet } from '../../useWallet';
const wallets = [getPhantomWallet()];

export default {
  name: 'ConnectToWallet',
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
    connected () {
      if (this.connected) {
        this.setPublicKey(this.publicKey.toString());
        this.$router.push('/survivor-pool/my-entries');
      } else {
        this.$router.push('/');
      }
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
@import "../../assets/styles/variables"

.sign-up-button
  background: white
  transition: color ease .2s
  color: $color-primary
  border: 3px solid #969ccb

  &:hover, &.router-link-active
    text-decoration: none

    transform: scale(1.025)
    transition: transform 0.3s
</style>
