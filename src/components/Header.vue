<script setup>
import { useCssModule } from "vue";
const props = defineProps({
  colors: Object,
  title: String,
});
const $style = useCssModule();
const emits = defineEmits(["toggleChat"]);

const handleToggleChat = () => {
  emits("toggleChat");
};
</script>

<template>
  <div
    :class="$style.chatbot__header"
    :style="{
      backgroundColor: props.colors.backgroundColor,
      color: props.colors.textColor,
    }"
  >
    <h1 :class="$style['chatbot__header-title']">
      {{ props.title ? props.title : "Chatbot" }}
    </h1>
    <div :class="$style['chatbot__header-buttons']">
      <button @click="handleToggleChat" :class="$style['chatbot__close-btn']">
        <img
          src="../assets/icons/close.png"
          :class="$style['chatbot__close-icon']"
        />
      </button>
    </div>
  </div>
</template>

<style module>
.chatbot__header {
  border-radius: 0.3rem 0.3rem 0rem 0rem;
  color: white;
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.chatbot__header::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 10px;
  bottom: -10px;
  z-index: 10;
  left: 0px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
}
.chatbot__header-title {
  font-size: 1rem;
}
.chatbot__header-buttons {
  display: flex;
  align-items: center;
}
.chatbot__close-btn {
  height: 40px;
  aspect-ratio: 1;
  background-color: inherit;
  border: none;
  opacity: 0.8;
  transition: all 200ms ease;
}
.chatbot__close-btn:focus,
.chatbot__close-btn:hover {
  opacity: 1;
}
.chatbot__close-icon {
  width: 100%;
}
</style>
