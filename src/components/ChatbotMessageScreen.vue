<script setup>
import { defineProps, onUpdated, ref } from "vue";

const props = defineProps({
  messages: {
    type: Array,
    required: true,
  },
  messageColors: Object,
});

const messageContainer = ref(null);

const scrollToBottom = () => {
  const container = messageContainer.value;
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }
};

onUpdated(scrollToBottom);
</script>

<template>
  <div class="chatbot__messages" ref="messageContainer">
    <div
      v-for="message in messages"
      :key="message.id"
      :class="[
        'chatbot__message',
        message.sender === 'user'
          ? 'chatbot__message--user'
          : 'chatbot__message--bot',
      ]"
      :style="
        message.sender === 'user'
          ? {
              backgroundColor: messageColors.userMessageBubble,
              color: messageColors.userTextColor,
            }
          : {
              backgroundColor: messageColors.botMessageBubble,
              color: messageColors.botTextColor,
            }
      "
    >
      {{ message.text }}
    </div>
  </div>
</template>

<style scoped>
.chatbot__messages {
  overflow-y: scroll;
  flex: 1;
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}
.chatbot__message {
  padding: 0.5rem;
  color: black;
  word-wrap: break-word;
  max-width: 80%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.chatbot__message--user {
  border-radius: 0.5rem 0.5rem 0.2rem 0.5rem;
  align-self: flex-end;
}
.chatbot__message--bot {
  align-self: flex-start;
  border-radius: 0.5rem 0.5rem 0.5rem 0.2rem;
}
</style>
