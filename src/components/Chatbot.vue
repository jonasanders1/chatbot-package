<script setup>
import { ref } from "vue";

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
const userInput = ref("");
const isOpen = ref(true);

const props = defineProps({
  title: String,
  primaryColor: String,
  secondaryColor: String,
  botMsgColor: String,
});

const handleToggleChat = () => {
  isOpen.value = !isOpen.value;
}


const sendMessage = () => {
  if (userInput.value.trim() !== "") {
    const userMessage = {
      id: Date.now(),
      text: userInput.value,
      sender: "user",
    };

    messages.value.push(userMessage);
    userInput.value = "";

    const botResponse = {
      id: Date.now(),
      text: "Hello Jonas! This is just a test message.",
      sender: "bot",
    };
    messages.value.push(botResponse);
  }
};

const botMessageStyles = {
  backgroundColor: props.botMsgColor,
  color: "#333",
};
const userMessageStyles = {
  backgroundColor: props.primaryColor,
  color: "#fff",
};
</script>

<template>
  <div class="chatbot" v-if="isOpen">
    <div
      class="chatbot__header"
      :style="{ backgroundColor: props.primaryColor }"
    >
      <h1 class="header-title">{{ props.title ? props.title : "Chatbot" }}</h1>
      <div class="header-buttons">
        <button @click="handleToggleChat">close</button>
      </div>
    </div>
    <div class="chatbot__messages">
      <div
        v-for="message in messages"
        :key="message.id"
        :class="['message', message.sender]"
        :style="
          message.sender === 'user' ? userMessageStyles : botMessageStyles
        "
      >
        {{ message.text }}
      </div>
    </div>
    <div class="chatbot__input">
      <div
        class="input-wrapper"
        :style="{ border: '2px solid ' + props.primaryColor }"
      >
        <textarea
          type="text"
          v-model="userInput"
          @keyup.enter="sendMessage"
          placeholder="Type a message"
        />
        <button>Ask</button>
      </div>
    </div>
  </div>
  <div v-else>
    <button @click="handleToggleChat">Open</button>
  </div>
</template>

<style scoped>
.chatbot {
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  overflow: hidden;
  width: 360px;
  height: 600px;
}
/* HEADER */
.chatbot__header {
  color: white;
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-title {
  font-size: 1rem;
}

/* MESSAGES */
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
  color: white;
  word-wrap: break-word;
  max-width: 80%;
}
.user {
  align-self: flex-end;
}
.bot {
  align-self: flex-start;
}
/* INPUT */
.chatbot__input {
  padding: 0.5rem;
}
.input-wrapper {
  display: flex;
  padding: 0.5rem;
  border-radius: 1rem;
  gap: 1rem;
}
.input-wrapper textarea {
  flex: 1;
  border: none;
  height: auto;
  resize: none;
}
.input-wrapper textarea:focus {
  outline: none;
}
/* .messages {
  flex: 1;
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 10px;
}
.message {
  padding: 1rem;
}
.user {
  background-color: #7890e8;
  text-align: right;
}
.bot {
  background-color: #828282;
  text-align: left;
}
input {
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
} */
</style>
