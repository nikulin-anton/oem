<script setup lang="ts">
import { getIconByName } from "~/utils/helpers/getIconByName";
interface Props {
  icon: string;
}

const { icon } = defineProps<Props>();
const iconSvg = await getIconByName(icon);
</script>

<template><img class="icon" :src="iconSvg" :alt="icon" /></template>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
</style>
