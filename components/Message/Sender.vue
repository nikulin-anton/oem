<script setup lang="ts">
interface Props {
  message: Message;
}

const { message } = defineProps<Props>();
</script>

<template>
  <div class="message">
    <p class="content">{{ message.message }}</p>
    <p class="time">
      <NuxtTime :datetime="message.datetime" hour="2-digit" minute="2-digit" />
    </p>
  </div>
</template>

<style scoped>
.message {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 24px 0;
}

.content {
  max-width: 60%;
  padding: 16px;
  background-color: var(--system-info-light);
  border-radius: 16px 16px 0 16px;
  font-size: 16px;
}

.time {
  color: var(--text-secondary);
  font-size: 12px;
  margin-top: 3px;
}
</style>
