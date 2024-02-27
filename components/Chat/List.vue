<script setup lang="ts">
interface Props {
  chats: Chat[];
}
const { chats } = defineProps<Props>();
</script>

<template>
  <ChatItem v-for="chat in chats" :chat="chat" :key="chat.id" />
</template>
