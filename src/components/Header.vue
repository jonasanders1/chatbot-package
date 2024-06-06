<script setup>
const props = defineProps({
  bgColor: String,
  headerStyles: Object,
});

const emits = defineEmits(["toggleChat"]);

const handleToggleChat = () => {
  emits("toggleChat");
  console.log(bgColor);
};
</script>
<template lang="">
  <div class="chatbot__header" :style="props.headerStyles">
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
  color: black;
  padding: 0rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
