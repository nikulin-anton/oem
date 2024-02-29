<script setup lang="ts">
type Emits = { submit: [message: string] };

const newMessage = ref<string>('');
const isValid = computed(() => newMessage.value.length > 0);
const emit = defineEmits<Emits>();

const onSubmit = () => {
  emit('submit', newMessage.value);
  newMessage.value = '';
};
</script>

<template>
  <form
    class="box"
    @submit.prevent="onSubmit()"
    @keypress.enter.prevent="onSubmit()">
    <textarea
      class="textarea"
      placeholder="Write a message..."
      v-model.trim="newMessage"
      rows="2"></textarea>
    <section class="actions">
      <BaseButton
        type="submit"
        status="secondary"
        size="small"
        :disabled="!isValid">
        Send
      </BaseButton>
    </section>
  </form>
</template>

<style scoped>
.box {
  flex-shrink: 0;
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  overflow: hidden;
  margin: var(--margin);
  box-sizing: border-box;
}

.textarea {
  display: block;
  padding: 8px 12px;
  font-family: var(--font-family);
  background-color: var(--bg-block-primary);
  font-size: 14px;
  border: none;
  width: 100%;
  resize: none;
  outline: none;
}

.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 12px;
  border-top: 1px solid var(--border-primary);
  background-color: var(--bg-block-secondary);
}
</style>
