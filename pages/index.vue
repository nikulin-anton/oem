<script setup lang="ts">
const { data: user } = await useFetch<User>('/api/user');
const { data: chats } = await useFetch<Chat[]>('/api/chat');
</script>

<template>
  <AppHeader v-if="user" :user="user" />
  <div v-if="chats" class="messanger-container">
    <ChatList :chats="chats" />
    <div class="chat-room"><NuxtPage /></div>
  </div>
</template>

<style scoped>
.messanger-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100%;
  overflow: hidden;
}

.chat-room {
  display: flex;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
}
</style>
