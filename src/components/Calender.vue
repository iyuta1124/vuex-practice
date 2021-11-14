<template>
  <div>
    <p>Hello</p>
    {{ doubleCount }}
    <button @click="increment">+2</button>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";
export default {
  mounted() {
    let date = moment().startOf("month");
    const dayOfWeek = date.day();
    console.log(dayOfWeek);
  },
  computed: {
    ...mapGetters(["doubleCount"]),
    message: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch("updateMessage", value);
      },
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", 2);
    },
  },
};
</script>
