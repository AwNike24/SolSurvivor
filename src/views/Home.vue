<template>
  <div class="home">
    <h1>This is an home page</h1>
  </div>
  <div>
    <div>Wallet: {{ walletProvider }}</div>
    <button v-if="connected" @click="disconnectToPhantom">Disconnect</button>
    <button v-else @click="connectToPhantom">Connect</button>
    <h1 v-if="connected">publicKey: {{ publicKey }}</h1>
  </div>
  <div v-if="connected">
    <h1 v-if="connected">Select NFT:</h1>
    <ul class="list-rendering">
      <li
        class="nft-item"
        v-for="(item, index) in nftsMetaInfo"
        v-bind:key="item.image"
      >
        <div style="padding: 10px">
          <div>Name: {{ item.name }}</div>
          <div class="img-cont">
            <img v-bind:src="item.image" alt="loading..." />
          </div>
          <div>Description: {{ item.description }}</div>
          <div>
            <input
              v-model="lamports[index]"
              placeholder="Amount"
              type="number"
            />
          </div>
          <div>
            <button
              v-on:click.self="transferNFTToFourCasters(index)"
              :disabled="!lamports[index]"
            >
              Transfer
            </button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable prettier/prettier */
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import { ref } from 'vue';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import {
  Connection,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

import { initWallet, useWallet } from '../useWallet';
import { decodeMetadata } from '../metaDataUtils';

const wallets = [getPhantomWallet()];
const METADATA_PUBKEY = new PublicKey(
  'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
);

const FOURCASTERS_PUBKEY = new PublicKey(
  'EWFwdKuGyHavLnTHjs6RYh2ZHzMimN1fH5nfGK7xkrV4'
);

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      wallet: null,
      walletProvider: null,
      connect: null,
      disconnect: null,
      connected: null,
      select: null,
      publicKey: null,
      nftsMetaInfo: [],
      nftAccounts: [],
      lamports: [],
    };
  },
  mounted() {
    initWallet(wallets);
    const {
      wallet,
      walletProvider,
      connect,
      disconnect,
      connected,
      select,
      publicKey,
      sendTransaction,
    } = useWallet();

    this.wallet = wallet;
    this.walletProvider = walletProvider;
    this.connect = connect;
    this.disconnect = disconnect;
    this.connected = connected;
    this.select = select;
    this.publicKey = publicKey;
    this.sendTransaction = sendTransaction;
  },
  methods: {
    async connectToPhantom() {
      await this.select('Phantom');
      await this.connect();

      await this.fetchNFTs();
    },

    async disconnectToPhantom() {
      await this.disconnect();
      this.nftsMetaInfo = [];
      this.nftAccounts = [];
    },

    async fetchNFTs() {
      this.nftsMetaInfo = [];
      this.nftAccounts = [];

      const connection = new Connection(clusterApiUrl('mainnet-beta'));
      let accounts = await connection.getParsedTokenAccountsByOwner(
        new PublicKey(this.publicKey),
        {
          programId: TOKEN_PROGRAM_ID,
        }
      );
      // console.log('accounts', accounts);

      const nftAccounts = accounts?.value?.filter(
        (obj) =>
          obj?.account?.data?.parsed?.info?.tokenAmount?.decimals === 0 &&
          obj?.account?.data?.parsed?.info?.tokenAmount?.uiAmount === 1
      );

      this.nftAccounts = nftAccounts;
      // console.log('nftAccounts', nftAccounts);

      for (let i = 0; i < nftAccounts.length; i++) {
        const mintAddress = nftAccounts[i]?.account?.data?.parsed?.info?.mint;
        if (mintAddress) {
          let [pda] = await PublicKey.findProgramAddress(
            [
              Buffer.from('metadata'),
              METADATA_PUBKEY.toBuffer(),
              new PublicKey(mintAddress).toBuffer(),
            ],
            METADATA_PUBKEY
          );

          let pdaAccountInfo = await connection.getAccountInfo(
            new PublicKey(pda)
          );
          // console.log('pdaAccountInfo', pdaAccountInfo);
          let buf = Buffer.from(pdaAccountInfo.data, 'base64');
          const metadata = decodeMetadata(buf);
          // console.log('metadata', metadata);

          if (metadata?.data?.uri) {
            let nftMetaInfo = await fetch(metadata.data.uri);
            nftMetaInfo = await nftMetaInfo.json();
            // console.log('nftMetaInfo', nftMetaInfo);
            this.nftsMetaInfo.push(nftMetaInfo);
          }
        }
      }
    },

    async transferNFTToFourCasters(index) {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: this.publicKey,
          // fromPubkey: this.nftAccounts[index].pubkey,
          toPubkey: FOURCASTERS_PUBKEY,
          lamports: this.lamports[index],
        })
      );

      const connection = new Connection(clusterApiUrl('mainnet-beta'));
      const signature = await this.sendTransaction(transaction, connection);

      await connection.confirmTransaction(signature, 'processed');

      await this.fetchNFTs();
    },
  },
};
</script>

<style scoped lang="sass">

@import "../assets/styles/variables"

.nft-item
  float: left
  border: 1px solid
  margin: 10px
  border-radius: 4px
  padding: 10px
  list-style: none
  cursor: pointer

.img-cont
  img
    height: 100px;
    width: 100px;



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
