<script setup lang="ts">
import { useRoute } from "vue-router";

const { params } = useRoute();
const { data: user } = await useFetch<User>("/api/user"); // Use store instead
const { data: messages } = await useFetch<Message[]>(
  `/api/chat/${params.chatId}/messages`
);
</script>

<template>
  <div v-if="messages && user" class="messenger">
    <MessageContainer :messages="messages" :user="user" />
    <MessageBox />
  </div>
</template>

<style scoped>
.messenger {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
