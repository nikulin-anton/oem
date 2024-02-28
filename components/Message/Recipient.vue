<script setup lang="ts">
interface Props {
  message: Message;
}

const { message } = defineProps<Props>();
</script>

<template>
  <div class="message">
    <BaseAvatar
      alt="Sender"
      :src="message.sender.avatar"
      :width="40"
      :height="40"
    />
    <div class="message-content">
      <p class="name">{{ message.sender.firstName }}</p>
      <p class="content">{{ message.message }}</p>
      <p class="time">
        <NuxtTime
          :datetime="message.datetime"
          hour="2-digit"
          minute="2-digit"
        />
      </p>
    </div>
  </div>
</template>

<style scoped>
.message {
  display: flex;
  align-items: flex-end;
}

.message-content {
  flex-direction: column;
  align-items: flex-start;
  max-width: 60%;
  margin-left: var(--margin);
}

.name {
  color: var(--system-success);
}

.content {
  padding: 16px;
  background-color: var(--bg-block-tertiary);
  border-radius: 16px 16px 16px 0;
  font-size: 16px;
  margin: 2px 0;
}

.time {
  color: var(--text-secondary);
  font-size: 12px;
}
</style>
