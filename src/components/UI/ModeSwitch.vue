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
  onColor: {
    type: String,
    default: '#4fd1c5',
  },
  offColor: {
    type: String,
    default: '#e2e8f0',
  }
});

const state = ref(props.defaultState);

const onSpanText = computed(() => {
  return state.value ? props.onText : '';
});

const offSpanText = computed(() => {
  return state.value ? '' : props.offText;
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
    <span class="switch">
      <span class="on-text">{{ onSpanText }}</span>
      <span class="off-text">{{ offSpanText }}</span>
    </span>
  </label>
</template>

<style scoped>
/* Container styles */
.container {
  display: flex;
  width: var(--switch-container-width);
  color: var(--light-text) !important;
  font-size: var(--switch-font-size);
}
/* Hidden input checkbox */
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
/* Switch background */
.switch {
  cursor: pointer;
  --switch-size: calc(var(--switch-container-width) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-items: center;
  position: relative;
  height: var(--switch-size);
  flex-basis: var(--switch-container-width);
  /* Make the container element rounded */
  border-radius: var(--switch-size);
  background-color: v-bind("props.offColor");
  transition: background-color 0.25s ease-in-out;
  border: 1px solid var(--light-text);
}
/* Switch circle */
.switch::before {
  content: '';
  position: absolute;
  /* Move a little bit the inner circle to the right */
  left: 1px;
  height: calc(var(--switch-size) - 4px);
  width: calc(var(--switch-size) - 4px);
  /* Make the inner circle fully rounded */
  border-radius: 9999px;
  background-color: aliceblue;
  transition: transform 0.375s ease-in-out;
  border: 1px solid var(--light-text);
}
/* Switch when checked */
.input:checked + .switch {
  /* Teal background */
  background-color: v-bind("props.onColor");
  justify-content: left;
}
/* Switch circle when checked */
.input:checked + .switch::before {
  /* border-color: v-bind("props.onColor"); */
  /* Move the inner circle to the right */
  transform: translateX(calc(var(--switch-container-width) - var(--switch-size)));
}
/* Vertical align text */
.on-text, .off-text {
}
</style>
