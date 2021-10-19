import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import api from "./core/api";

const initialState = () => ({
  id: "",
  isAdmin: false,
  isLoggedIn: false,
  publicKey: null,
  survivorBalance: 0,
  type: "",
  username: "",
  userToken: "",
  walletConnected: false,
});

export default createStore({
  state: initialState(),
  mutations: {
    setPublicKey(state, publicKey) {
      if (publicKey) {
        state.walletConnected = true;
      } else {
        state.walletConnected = false;
      }
      state.publicKey = publicKey;
    },
    logIn(state, payload) {
      state.id = payload.id;
      state.isAdmin = payload.isAdmin;
      state.isLoggedIn = true;
      state.survivorBalance = payload.survivorBalance;
      state.type = payload.type;
      state.username = payload.username;
      state.publicKey = payload.publicKey;
    },
    logOut(state) {
      const s = initialState();
      Object.keys(s).forEach((key) => {
        state[key] = s[key];
      });
    },
  },
  actions: {
    findOrCreate: (context) =>
      api.request('user/findOrCreateUser')
        .then((response) => {
        context.commit("logIn", response.user);
      }),
    signUp: (context, payload) =>
      api
        .request("user/create/", {
          email: payload.email,
          username: payload.username,
          password: payload.password,
          telegramUsername: payload.telegramUsername,
        })
        .then((response) => {
          context.commit("makeJustSignedUpTruthy");
          context.commit("logIn", response.user);
        }),
  },
  strict: process.env.NODE_ENV !== "production",
  plugins: [createPersistedState({ storage: window.localStorage })],
});
