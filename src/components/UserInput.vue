<script setup>
import {
  ref,
  watch,
  defineProps,
  defineEmits,
  onMounted,
  onUpdated,
  useCssModule,
} from "vue";

const props = defineProps({
  userInput: String,
  inputColors: Object,
  isInputEmpty: Boolean,
});
const $style = useCssModule();
const emit = defineEmits(["input", "sendMessage"]);

const inputValue = ref(props.userInput);
const textareaRef = ref(null);

watch(
  () => props.userInput,
  (newVal) => {
    inputValue.value = newVal;
  }
);

const updateInput = () => {
  emit("input", inputValue.value);
  adjustTextareaHeight();
};

const handleSendMessage = () => {
  emit("sendMessage");
};

const adjustTextareaHeight = () => {
  const textarea = textareaRef.value;
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
};

const focusTextarea = () => {
  if (textareaRef.value) {
    textareaRef.value.focus();
  }
};

onMounted(() => {
  adjustTextareaHeight();
  focusTextarea();
});

onUpdated(() => {
  focusTextarea();
});
</script>

<template>
  <div :class="$style['chatbot__input']">
    <div
      :class="$style['chatbot__input-wrapper']"
      :style="{ backgroundColor: props.inputColors.inputBgColor }"
    >
      <textarea
        ref="textareaRef"
        type="text"
        placeholder="Type a message"
        v-model="inputValue"
        @input="updateInput"
        :class="$style['chatbot__textarea']"
      />
    </div>
    <button
      :class="$style['chatbot__input-button']"
      v-if="!props.isInputEmpty"
      @click="handleSendMessage"
    >
      send
    </button>
  </div>
</template>

<style module>
.chatbot__input {
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
}
.chatbot__input-wrapper {
  display: flex;
  padding: 0.5rem;
  border-radius: 1.5rem;
  flex: 1;
  gap: 1rem;
  transition: all 200ms ease;
  position: relative;
}
.chatbot__textarea {
  height: auto;
  max-height: 100px;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  overflow: hidden;
  background-color: inherit;
}
.chatbot__textarea:focus {
  outline: none;
  border: none;
  resize: none;
}
.chatbot__input-button {
  border: none;
  background-color: inherit;
}
</style>
