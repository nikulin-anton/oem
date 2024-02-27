<script setup lang="ts">
const { data } = await useFetch("/api/user");
</script>

<template>
  <AppHeader v-if="data" :user="data" />
</template>
