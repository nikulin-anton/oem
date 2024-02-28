<script setup lang="ts">
interface Props {
  chats: Chat[];
}
const { chats } = defineProps<Props>();
</script>

<template>
  <section class="list">
    <ChatItem v-for="chat in chats" :chat="chat" :key="chat.id" />
  </section>
</template>

<style scoped>
.list {
  border-right: 1px solid var(--border-primary);
  overflow: scroll;
  max-height: 100%;
  box-shadow: 1px 0 8px 0px #00000023;
}
</style>
