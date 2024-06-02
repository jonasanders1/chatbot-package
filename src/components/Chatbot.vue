<script setup>
import { ref, computed, defineProps } from "vue";

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
};

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

// Computed property to check if the textarea is empty
const isTextareaEmpty = computed(() => userInput.value.trim() === "");
</script>

<template>
  <div class="chatbot-wrapper">
    <div class="chatbot" v-if="isOpen">
      <div
        class="chatbot__header"
        :style="{ backgroundColor: props.primaryColor }"
      >
        <h1 class="header-title">
          {{ props.title ? props.title : "Chatbot" }}
        </h1>
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
          :style="{ backgroundColor: props.botMsgColor }"
        >
          <textarea
            type="text"
            v-model="userInput"
            @keyup.enter="sendMessage"
            placeholder="Type a message"
          />
        </div>
        <button v-show="userInput.trim() !== ''" class="input-button">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12L4 4L6 12M20 12L4 20L6 12M20 12H6"
              :stroke="props.primaryColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
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
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12V15M12 9H12.01M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 3.00463 21 3.00463 21C3.00463 21 4.56382 17.2561 3.93982 16.0008C3.34076 14.7956 3.00391 13.4372 3.00391 12C3.00391 7.02944 7.03334 3 12.0039 3C16.9745 3 21.0039 7.02944 21.0039 12Z"
            :stroke="props.botMsgColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
  border: 2px solid green;
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
  display: flex;
  gap: 0.5rem;
}
.input-wrapper {
  display: flex;
  padding: 0.5rem;
  border-radius: 2rem;
  flex: 1;
  gap: 1rem;
  transition: all 200ms ease;
  position: relative;
}
.input-wrapper textarea {
  height: 18px;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  background-color: inherit;
}
.input-wrapper textarea:focus {
  outline: none;
  border: none;
  resize: none;
}

.input-button {
  border: none;
  background-color: inherit;
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
</style>
