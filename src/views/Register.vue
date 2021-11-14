<template>
  <div>
    <h3>登録画面</h3>
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" />
    <br />
    <label for="password">パスワード</label>
    <input id="password" type="password" v-model="password" />
    <button @click="register">登録</button>
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
    register() {
      console.log("登録するよ");
      axios
        .post("/accounts:signUp?key=AIzaSyB0SDbVwFlMZa0kmCIiR8v63WhSCEcFAGw", {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((res) => {
          console.log(res);
        });
      this.email = "";
      this.password = "";
    },
  },
};
</script>
