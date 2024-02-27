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
  </div>
</template>
