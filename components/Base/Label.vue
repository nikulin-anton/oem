<script setup lang="ts">
interface Props {
  status: "primary" | "secondary";
}

const { status } = withDefaults(defineProps<Props>(), { status: "primary" });
</script>

<template>
  <span :class="['label', status]"><slot /></span>
</template>

<style scoped>
.label {
  border-radius: 15px;
  color: var(--text-white);
  background-color: var(--bg-block-3);
  font-size: 12px;
  padding: 2px 6px;
}

.primary {
  background-color: var(--system-info);
}
</style>
