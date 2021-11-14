<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name" />
    <br />
    <label for="comment">コメント</label>
    <textarea id="comment" cols="30" rows="10" v-model="comment"></textarea>
    <button @click="createComment">コメントをサーバーに送る</button>
    <br />
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <p>名前：{{ post.fields.name.stringValue }}</p>
      <p>コメント：{{ post.fields.comment.stringValue }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    };
  },
  methods: {
    createComment() {
      axios
        .post("/comments", {
          fields: {
            name: {
              stringValue: this.name,
            },
            comment: {
              stringValue: this.comment,
            },
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
      this.name = "";
      this.comment = "";
    },
  },
  created() {
    axios.get("/comments").then((res) => {
      this.posts = res.data.documents;
      // console.log(res.data.documents);
      console.log(this.posts);
    });
  },
};
</script>
