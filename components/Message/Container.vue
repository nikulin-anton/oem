import type user from '~/server/api/user';
<script setup lang="ts">
interface Props {
  messages: Message[];
  user: User;
}

const { messages, user } = defineProps<Props>();
</script>

<template>
  <div class="messages">
    <template v-for="message in messages" :key="messages.id">
      <MessageSender v-if="message.sender.id === user.id" />
      <MessageRecipient v-else />
    </template>
  </div>
</template>
