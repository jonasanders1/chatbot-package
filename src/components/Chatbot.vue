<script setup>
import { ref, computed, defineProps } from "vue";

import ChatbotMessageScreen from "./ChatbotMessageScreen.vue";
import Header from "./Header.vue";
import UserInput from "./UserInput.vue";

const userInput = ref("");
const isOpen = ref(false);
const loading = ref(false);

const props = defineProps({
  title: String,
  primaryColor: String,
  secondaryColor: String,
  botMsgColor: String,
  messages: Array,
});

const handleToggleChat = () => {
  isOpen.value = !isOpen.value;
};

const handleInputChange = (value) => {
  userInput.value = value;
};

const sendMessage = () => {
  if (userInput.value.trim() !== "") {
    const userMessage = {
      id: Date.now(),
      text: userInput.value,
      sender: "user",
    };

    props.messages.push(userMessage);
    userInput.value = "";

    setTimeout(() => {
      const botResponse = {
        id: Date.now(),
        text: "Hello Jonas! This is just a test message.",
        sender: "bot",
      };

      props.messages.push(botResponse);
      loading.value = false; // Set loading state to false
    }, 2000); // 2 seconds delay to simulate fetch request
  }
};

const headerStyles = {
  backgroundColor: "#333",
  color: "#fff",
};

const botMessageStyles = {
  backgroundColor: props.botMsgColor,
  color: "#333",
};
const userMessageStyles = {
  backgroundColor: props.primaryColor,
  color: "#fff",
};

// Computed property to check if the textarea is empty
const isTextareaEmpty = computed(() => userInput.value.trim() === "");
</script>

<template>
  <div class="chatbot-wrapper" :class="isOpen ? 'open' : 'closed'">
    <div class="chatbot" v-if="isOpen">
      <Header
        :title="title"
        :headerStyles="headerStyles"
        @toggleChat="handleToggleChat"
      />
      <ChatbotMessageScreen
        :messages="props.messages"
        :botMessageStyles="botMessageStyles"
        :userMessageStyles="userMessageStyles"
      />
      <UserInput
        :userInput="userInput"
        @sendMessage="sendMessage"
        @input="handleInputChange"
      />
    </div>

    <div class="open-chatbot">
      <button
        @click="handleToggleChat"
        class="open-chat-btn"
        :style="{
          backgroundColor: props.primaryColor,
          opacity: isOpen ? 1 : 0.8,
        }"
      >
        <img src="../assets/icons/robot3.png" class="icon" alt="" />
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Wrappers */
.chatbot-wrapper {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
}
.chatbot-wrapper.open {
  inset: 0;
  margin: 0px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
}

.chatbot {
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  overflow: hidden;
  width: 360px;
  height: 600px;
}

/* OPEN CHATBOT */
.open-chatbot {
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
}
.open-chat-btn {
  border-radius: 50%;
  border: none;
  height: 100%;
  width: 100%;
  transition: opacity all ease;
}
.icon{
  width: 100%;
  aspect-ratio: 1;
}

</style>
