<template>
  <button class="mt-0 mb-3 connect-wallet" v-if="connected" @click="disconnect">
    DISCONNECT WALLET
  </button>
  <button class="mt-0 mb-3 connect-wallet" v-else @click="connectToPhantom">
    CONNECT WALLET
  </button>
</template>

<script>
/* eslint-disable prettier/prettier */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { ref } from 'vue';
import { mapActions, mapMutations, mapState } from "vuex";
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

    let account;

    const connectToPhantom = async () => {
      await select('Phantom');
      await connect();

      const connection = new Connection(
        clusterApiUrl('mainnet-beta'),
        'confirmed'
      );

      account = await connection.getAccountInfo(
        publicKey.value,
        'confirmed'
      );
    };

    return {
      account,
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
      storedPublicKey: (state) => state.publicKey,
    }),
  },
  watch: {
    connected () {
      if (this.connected) {
        this.setPublicKey(this.publicKey.toString());
        this.findOrCreate().then(() => {
          this.$router.push('/survivor-pool/my-entries');
        })
      } else {
        this.setNullPubKeyAndRedirect();
      }
    },
  },
  methods: {
    ...mapMutations([
      'setPublicKey'
    ]),
    ...mapActions([
      'findOrCreate',
    ]),
    setNullPubKeyAndRedirect () {
      this.setPublicKey(null);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"

button.connect-wallet
  border-radius: 35px
  padding: 10px
  background-color: #FF443C!important
  font-size: 12px
  width: 100%
</style>
