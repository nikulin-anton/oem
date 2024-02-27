<script setup lang="ts">
interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const { src, alt, width = 24, height = 24 } = defineProps<Props>();
</script>

<template>
  <img class="avatar" :src="src" :alt="alt" :width="width" :height="height"
</template>

<style scoped>
.avatar {
  border-radius: 50%;
}
</style>
