<script setup>
import { ref } from "vue";
import Chatbot from "./components/Chatbot.vue";

const messages = ref([
  {
    id: Date.now(),
    text: "What is the weather like today in Oslo?",
    sender: "user",
  },
  {
    id: Date.now() + 1,
    text: "Can you help me debug my JavaScript code?",
    sender: "bot",
  },
  { id: Date.now() + 2, text: "How do I center a div in CSS?", sender: "bot" },
  {
    id: Date.now() + 3,
    text: "What are the best exercises for building upper body strength?",
    sender: "user",
  },
  {
    id: Date.now() + 4,
    text:
      "Can you suggest some good resources for learning frontend development?",
    sender: "bot",
  },
  {
    id: Date.now() + 5,
    text: "How do I optimize my website for better performance?",
    sender: "user",
  },
  {
    id: Date.now() + 6,
    text: "What are some healthy meal options for someone who works out a lot?",
    sender: "bot",
  },
  {
    id: Date.now() + 7,
    text: "How do I prepare for my frontend development exams?",
    sender: "user",
  },
  {
    id: Date.now() + 8,
    text:
      "Can you explain the difference between let, var, and const in JavaScript?",
    sender: "bot",
  },
  {
    id: Date.now() + 9,
    text: "What are some effective time management strategies for students?",
    sender: "user",
  },
]);

const headerColors = {
  backgroundColor: "#2C3E50",
  textColor: "#fff",
};
const messageColors = {
  backgroundColor: "#fff",
  botMessageBubble: "#ECF0F1",
  botTextColor: "#2C3E50",
  userMessageBubble: "#2C3E50",
  userTextColor: "#FFFFFF",
};
const inputColors = {
  backgroundColor: "#fff",
  inputBgColor: "#ECF0F1",
};
const chatbotButtonColors = {
  backgroundColor: "#2C3E50",
};
const colors = {
  headerColors,
  messageColors,
  inputColors,
  chatbotButtonColors
};
</script>

<template>
  <Chatbot
    chatbotTitle="My Test bot"
    :chatbotColors="colors"
    :messages="messages"
  />
</template>

<style scoped></style>
