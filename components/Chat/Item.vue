<script setup lang="ts">
interface Props {
  chat: Chat;
}

const { chat } = defineProps<Props>();
const fullName = `${chat.interlocutor.firstName} ${chat.interlocutor.lastName}`;
const lastMessageTime = chat.lastMessage.dateTime.toString();
</script>

<template>
  <NuxtLink :to="chat.id">
    <BaseAvatar
      :src="chat.interlocutor.avatar"
      :alt="`${chat.interlocutor.firstName} Avatar`"
      :width="40"
      :height="40"
    />
    <div class="middle-block">
      <p class="full-name">{{ fullName }}</p>
      <p class="last-message">{{ lastMessageTime }}</p>
    </div>
    <div class="right-block">
      <!-- Need to add three base components -->
    </div>
  </NuxtLink>
</template>
