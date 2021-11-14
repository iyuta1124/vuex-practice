<template>
  <div>
    <h3>ログイン</h3>
    <label for="email">Email</label>
    <input id="email" type="text" v-model="email" />
    <br />
    <label for="password">パスワード</label>
    <input id="password" type="password" v-model="password" />
    <button @click="login">ログインする</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "/accounts:signInWithPassword?key=AIzaSyB0SDbVwFlMZa0kmCIiR8v63WhSCEcFAGw",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true,
          }
        )
        .then((res) => {
          console.log(res);
        });
        this.email = ""
        this.password = ""

    },
  },
};
</script>
