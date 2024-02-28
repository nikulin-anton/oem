import type user from '~/server/api/user';
<script setup lang="ts">
interface Props {
  messages: Message[];
  user: User;
}

const { messages, user } = defineProps<Props>();
const divRef = ref<HTMLElement | null>(null);

onMounted(() => divRef.value?.scrollTo(0, divRef.value.scrollHeight));
</script>

<template>
  <div class="messages" ref="divRef">
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
