<script setup lang="ts">
const { data: user } = await useFetch<User>("/api/user");
const { data: chats } = await useFetch<Chat[]>("/api/chat");
</script>

<template>
  <AppHeader v-if="user" :user="user" />
  <div v-if="chats" class="messanger-container">
    <ChatList :chats="chats" />
  </div>
</template>
