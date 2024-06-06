<template>
  <div class="chatbot__messages">
    <div
      v-for="message in messages"
      :key="message.id"
      :class="['message', message.sender]"
      :style="message.sender === 'user' ? userMessageStyles : botMessageStyles"
    >
      {{ message.text }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  messages: {
    type: Array,
    required: true,
  },
  botMessageStyles: Object,
  userMessageStyles: Object,
});


</script>

<style scoped>
.chatbot__messages {
  overflow-y: scroll;
  flex: 1;
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.message {
  padding: 0.5rem;
  border-radius: 0.3rem;
  color: black;
  word-wrap: break-word;
  max-width: 80%;
}
.user {
  align-self: flex-end;
}
.bot {
  align-self: flex-start;
}
</style>
