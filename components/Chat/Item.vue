<script setup lang="ts">
interface Props {
  chat: Chat;
}

const { chat } = defineProps<Props>();
const fullName = `${chat.interlocutor.firstName} ${chat.interlocutor.lastName}`;
const status = chat.sentMessageRead ? "secondary" : "primary";
const unreaded = chat.unreadedIncomingMessages;
</script>

<template>
  <NuxtLink class="item" :to="chat.id">
    <BaseAvatar
      :src="chat.interlocutor.avatar"
      :alt="`${chat.interlocutor.firstName} Avatar`"
      :width="40"
      :height="40"
    />
    <div class="middle-block">
      <p class="full-name">{{ fullName }}</p>
      <p class="last-message">{{ chat.lastMessage.value }}</p>
    </div>
    <div class="right-block">
      <p class="message-time">
        <NuxtTime
          :datetime="chat.lastMessage.dateTime"
          hour="2-digit"
          minute="2-digit"
        ></NuxtTime>
      </p>
      <div class="right-block-down">
        <BaseDot v-if="unreaded === 0 && !chat.sentMessageRead" />
        <BaseLabel v-if="unreaded" :status="status">{{ unreaded }}</BaseLabel>
        <BaseIcon v-if="chat.isPinned" icon="pin" />
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: min-content 2fr max-content;
  padding: 16px 24px;
  gap: 8px;
  align-items: center;
  max-height: 100%;
}

.router-link-active {
  background-color: var(--interactive-gray-hover);
}

.middle-block {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 2px;
}

.full-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}

.last-message {
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--text-secondary);
}

.right-block {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 6px;
}

.right-block-down {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
}

.message-time {
  color: var(--text-secondary);
  font-size: 12px;
  line-height: 16px;
  text-align: right;
}
</style>
