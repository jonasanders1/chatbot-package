<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  borderColor: String,
  userInput: String,
});

const emit = defineEmits(["input", "sendMessage"]);

const inputValue = ref(props.userInput);

watch(
  () => props.userInput,
  (newVal) => {
    inputValue.value = newVal;
  }
);

const updateInput = () => {
  emit("input", inputValue.value);
};

const handleSendMessage = () => {
  emit("sendMessage");
};
</script>

<template>
  <div class="chatbot__input">
    <div class="input-wrapper" :style="{ backgroundColor: props.borderColor }">
      <textarea
        type="text"
        placeholder="Type a message"
        v-model="inputValue"
        @input="updateInput"
      />
    </div>
    <button class="input-button" @click="handleSendMessage">
      send
    </button>
  </div>
</template>

<style scoped>
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
</style>
