import type user from '~/server/api/user';
<script setup lang="ts">
interface Props {
  messages: Message[];
  user: User;
}

const { messages, user } = defineProps<Props>();
const divRef = ref<HTMLElement | null>(null);
const scrollToBottom = () =>
  divRef.value?.scrollTo(0, divRef.value.scrollHeight);

watch(messages, () => setTimeout(() => scrollToBottom()));
onMounted(() => scrollToBottom());
</script>

<template>
  <div class="messages" ref="divRef">
    <TransitionGroup name="list">
      <template v-for="message in messages" :key="message.id">
        <MessageSender
          class="message"
          v-if="message.sender.id === user.id"
          :message="message"
          :key="message.id" />
        <MessageRecipient
          class="message"
          v-else
          :message="message"
          :key="message.id + '1'" />
      </template>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.messages {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
  padding: var(--margin);
}

.message + .message {
  margin-top: var(--margin);
}

.list-enter-active,
.list-leave-active {
  position: relative;
  transition: all 0.2s ease-out;
}
.list-enter-from,
.list-leave-to {
  transform: translateX(30%);
  opacity: 0;
}
</style>
