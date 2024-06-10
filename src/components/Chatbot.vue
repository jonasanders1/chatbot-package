<script setup>
import { ref, computed, useCssModule } from "vue";
import ChatbotMessageScreen from "./ChatbotMessageScreen.vue";
import Header from "./Header.vue";
import UserInput from "./UserInput.vue";
import ChatbotButton from "./ChatbotButton.vue";


const userInput = ref("");
const isOpen = ref(false);
const loading = ref(false);

const $style = useCssModule();

const props = defineProps({
  chatbotTitle: String,
  chatbotColors: Object,
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
      loading.value = false;
    }, 2000);
  }
};

const isTextareaEmpty = computed(() => userInput.value.trim() === "");
</script>

<template>
  <div :class="[$style.chatbot, isOpen ? $style['chatbot--open'] : '']">
    <div :class="$style.chatbot__content" v-if="isOpen">
      <Header
        :title="props.chatbotTitle"
        :colors="chatbotColors.headerColors"
        @toggleChat="handleToggleChat"
      />
      <ChatbotMessageScreen
        :messages="props.messages"
        :messageColors="chatbotColors.messageColors"
      />
      <UserInput
        :userInput="userInput"
        @sendMessage="sendMessage"
        @input="handleInputChange"
        :inputColors="chatbotColors.inputColors"
        :isInputEmpty="isTextareaEmpty"
      />
    </div>
    <ChatbotButton
      @toggleChat="handleToggleChat"
      :colors="chatbotColors.chatbotButtonColors"
    />
  </div>
</template>

<style module>
.chatbot {
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
.chatbot--open {
  inset: 0;
  margin: 0px;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
}
.chatbot__content {
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  width: 360px;
  height: 600px;
}
</style>
