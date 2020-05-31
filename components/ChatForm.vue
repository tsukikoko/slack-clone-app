<template>
  <div class="input-container">
    <textarea v-model="text" v-on:keydown.enter="addMessage"></textarea>
  </div>
</template>
<script>
import { db } from "~/plugins/firebase";
export default {
  data() {
    return {
      text: null
    };
  },
  methods: {
    addMessage() {
      const channelId = this.$route.params.id;
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .add({ text: this.text })
        .then(() => {
          alert("メッセージの保存に成功しました");
        });
    }
  }
};
</script>

<style scoped>
.input-container {
  padding: 10px;
  height: 100%;
}

textarea {
  width: 100%;
  height: 100%;
}
</style>
