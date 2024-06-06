<template>
  <div class="chatbot__messages" ref="messageContainer">
    <div
      v-for="message in messages"
      :key="message.id"
      :class="['message', message.sender]"
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
.message {
  padding: 0.5rem;
  color: black;
  word-wrap: break-word;
  max-width: 80%;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
.user {
  border-radius: .5rem .5rem .2rem .5rem;
  align-self: flex-end;
}
.bot {
  align-self: flex-start;
  border-radius: .5rem .5rem .5rem .2rem;
}
</style>
