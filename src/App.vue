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
</script>

<template>
  <div style="padding: 20px; color: black;">
    <h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, laborum.
    </h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quis
      ratione! Reiciendis nobis, nemo modi illum cumque sapiente officiis
      quisquam! Minus architecto atque ipsa porro temporibus velit facilis
      dolorum, voluptatem vero id incidunt nostrum sunt impedit vitae officiis
      eligendi excepturi non blanditiis iste inventore illo repudiandae
      laboriosam? Itaque atque nemo quos. Illum id delectus voluptatum
      architecto eaque ratione saepe officia omnis quo adipisci? Vel corrupti
      nemo facere veritatis, alias obcaecati laudantium quis iste fugit
      excepturi? Dolores quasi tempora, ipsum fuga atque veritatis eaque animi
      ex sed ut ab totam molestiae nemo velit doloribus minima quo sit
      reiciendis dignissimos praesentium quam!
    </p>
  </div>
  <div style="padding: 20px; color: black;">
    <h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, laborum.
    </h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quis
      ratione! Reiciendis nobis, nemo modi illum cumque sapiente officiis
      quisquam! Minus architecto atque ipsa porro temporibus velit facilis
      dolorum, voluptatem vero id incidunt nostrum sunt impedit vitae officiis
      eligendi excepturi non blanditiis iste inventore illo repudiandae
      laboriosam? Itaque atque nemo quos. Illum id delectus voluptatum
      architecto eaque ratione saepe officia omnis quo adipisci? Vel corrupti
      nemo facere veritatis, alias obcaecati laudantium quis iste fugit
      excepturi? Dolores quasi tempora, ipsum fuga atque veritatis eaque animi
      ex sed ut ab totam molestiae nemo velit doloribus minima quo sit
      reiciendis dignissimos praesentium quam!
    </p>
  </div>
  <div style="padding: 20px; color: black;">
    <h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, laborum.
    </h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quis
      ratione! Reiciendis nobis, nemo modi illum cumque sapiente officiis
      quisquam! Minus architecto atque ipsa porro temporibus velit facilis
      dolorum, voluptatem vero id incidunt nostrum sunt impedit vitae officiis
      eligendi excepturi non blanditiis iste inventore illo repudiandae
      laboriosam? Itaque atque nemo quos. Illum id delectus voluptatum
      architecto eaque ratione saepe officia omnis quo adipisci? Vel corrupti
      nemo facere veritatis, alias obcaecati laudantium quis iste fugit
      excepturi? Dolores quasi tempora, ipsum fuga atque veritatis eaque animi
      ex sed ut ab totam molestiae nemo velit doloribus minima quo sit
      reiciendis dignissimos praesentium quam!
    </p>
  </div>
  <div style="padding: 20px; color: black;">
    <h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, laborum.
    </h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, quis
      ratione! Reiciendis nobis, nemo modi illum cumque sapiente officiis
      quisquam! Minus architecto atque ipsa porro temporibus velit facilis
      dolorum, voluptatem vero id incidunt nostrum sunt impedit vitae officiis
      eligendi excepturi non blanditiis iste inventore illo repudiandae
      laboriosam? Itaque atque nemo quos. Illum id delectus voluptatum
      architecto eaque ratione saepe officia omnis quo adipisci? Vel corrupti
      nemo facere veritatis, alias obcaecati laudantium quis iste fugit
      excepturi? Dolores quasi tempora, ipsum fuga atque veritatis eaque animi
      ex sed ut ab totam molestiae nemo velit doloribus minima quo sit
      reiciendis dignissimos praesentium quam!
    </p>
  </div>
  <Chatbot
    title="Jonas"
    primaryColor="var(--primary-clr)"
    secondaryColor="var(--secondary-clr)"
    botMsgColor="#f2f2f4"
    :messages="messages"
  />
</template>

<style scoped></style>
