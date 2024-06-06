<script setup>
const emits = defineEmits(["toggleChat"]);

const props = defineProps({
  colors: Object,
});

const handleToggleChat = () => {
  emits("toggleChat");
};
</script>
<template>
  <div class="chat-button-container">
    <button
      @click="handleToggleChat"
      class="open-chat-btn"
      :style="{
        backgroundColor: props.colors.backgroundColor,
        opacity: isOpen ? 1 : 0.8,
      }"
    >
      <img src="../assets/icons/robot3.png" class="icon" alt="" />
    </button>
  </div>
</template>

<style scoped>
.chat-button-container {
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
.icon {
  width: 100%;
  aspect-ratio: 1;
}
</style>
