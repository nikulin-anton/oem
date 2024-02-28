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
      <MessageSender
        class="message"
        v-if="message.sender.id === user.id"
        :message="message"
      />
      <MessageRecipient class="message" v-else :message="message" />
    </template>
  </div>
</template>

<style scoped>
.messages {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: var(--margin);
}

.message + .message {
  margin-top: var(--margin);
}
</style>
