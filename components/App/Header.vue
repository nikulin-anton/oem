<script setup lang="ts">
interface Params {
  user: User;
}

const { user } = defineProps<Params>();
</script>

<template>
  <header className="header">
    <BaseLogo />
    <BaseAvatar :src="user.avatar" alt="Avatar" :width="32" :height="32" />
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  box-shadow: 0 1px 2px rgba(2, 17, 37, 0.12);
}
</style>
