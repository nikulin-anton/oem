<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue';

interface Props {
  size?: 'small' | 'medium' | 'large';
  status?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
}

const { size = 'medium', status = 'primary' } = defineProps<Props>();
</script>

<template>
  <button :class="['button', size, status]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid var(--disabled-border);
  padding: 10px 16px;
  font-family: var(--font-family);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background-color: var(--bg-block-primary);

  &:disabled {
    color: var(--disabled-primary);
    border: 1px solid var(--disabled-border);
    background-color: transparent;
  }
}

.small {
  padding: 6px 12px;
}
</style>
