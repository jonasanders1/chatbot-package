<script setup>
const props = defineProps({
  colors: Object,
  title: String,
});

const emits = defineEmits(["toggleChat"]);

const handleToggleChat = () => {
  emits("toggleChat");
};
</script>
<template lang="">
  <div
    class="chatbot__header"
    :style="{
      backgroundColor: props.colors.backgroundColor,
      color: props.colors.textColor,
    }"
  >
    <h1 class="header-title">
      {{ props.title ? props.title : "Chatbot" }}
    </h1>
    <div class="header-buttons">
      <button @click="handleToggleChat" class="close-btn">
        <img src="../assets/icons/close.png" class="icon" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.chatbot__header {
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
.header-title {
  font-size: 1rem;
}
.close-btn {
  height: 40px;
  aspect-ratio: 1;
  background-color: inherit;
  border: none;
  opacity: 0.8;
  transition: all 200ms ease;
}
.close-btn:focus,
.close-btn:hover {
  opacity: 1;
}
.icon {
  width: 100%;
}
</style>
