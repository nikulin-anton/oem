<script setup lang="ts">
import { useRoute } from 'vue-router';

const { params } = useRoute();
const { data: user } = await useFetch<User>('/api/user'); // Use store instead
const messagesUrl = `/api/chat/${params.chatId}/messages`;
const { data: messages } = await useFetch<Message[]>(messagesUrl);

const addMessage = async (message: string) => {
  const newMessage = await $fetch<Message>(messagesUrl, {
    method: 'POST',
    body: { message },
  });

  messages.value?.push(newMessage);
};
</script>

<template>
  <div v-if="messages && user" class="messenger">
    <MessageContainer :messages="messages" :user="user" />
    <MessageBox @submit="addMessage" />
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
