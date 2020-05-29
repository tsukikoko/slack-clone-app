<template>
  <div class="chats-container">
    <message
      v-for="message in messages"
      :message="message"
      v-bind:key="message.text"
    />
  </div>
</template>

<script>
import Message from "~/components/Message";

export default {
  props: ["messages"],
  components: {
    Message
  },
  mounted() {}
};
</script>

<style>
.chats-container {
  padding: 16px;
}
</style>
