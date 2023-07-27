<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
  onText: {
    type: String,
    default: '😀',
  },
  offText: {
    type: String,
    default: '☹️',
  },
  defaultState: {
    type: Boolean,
    default: true,
  },
});

const state = ref(props.defaultState);

const switchText = computed(() => {
  return state.value ? props.onText : props.offText;
});

const emits = defineEmits(['clicked']);

function switchValue() {
  state.value = !state.value;
  emits('clicked');
}

</script>

<template>
  <label class="container">
    <input type="checkbox" class="input" @change="switchValue" :checked="state" />
    <span class="switch"><span>{{ switchText }}</span></span>
  </label>
</template>

<style scoped>
.container {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.switch {
  --switch-container-width: 50px;
  --switch-size: calc(var(--switch-container-width) / 2);
  display: flex;
  align-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  /* Make the container element rounded */
  border-radius: var(--switch-size);
  background-color: #e2e8f0;
  transition: background-color 0.25s ease-in-out;
}
.switch::before {
  content: '';
  position: absolute;
  /* Move a little bit the inner circle to the right */
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  /* Make the inner circle fully rounded */
  border-radius: 9999px;
  background-color: white;
  transition: transform 0.375s ease-in-out;
}
.input:checked + .switch {
  /* Teal background */
  background-color: #4fd1c5;
}

.input:checked + .switch::before {
  border-color: #4fd1c5;
  /* Move the inner circle to the right */
  transform: translateX(calc(var(--switch-container-width) - var(--switch-size)));
}
</style>
