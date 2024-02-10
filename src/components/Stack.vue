<!-- Based off the Stack component from Every Layout - https://every-layout.dev/layouts/stack/ -->

<template>
  <div class="stack" :style="computedStyles">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

interface Props {
  gap?: 'space-3xs' | 'space-2xs' | 'space-xs' | 'space-s' | 'space-m' | 'space-l' | 'space-xl' | 'space-2xl' | 'space-3xl',
  background?: 'white' | 'green' | 'red' | 'off-white'
}

const props = defineProps<Props>()

const computedStyles = computed(() => {
  let styles = '';
  if (props.gap) {
    styles += `gap: var(--${props.gap}); `;
  }
  if (props.background) {
    styles += `background: var(--color-${props.background}); `;
  }
  return styles; 
})
</script>

<style scoped>
.stack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.stack > * {
  margin-block: 0;
} 
</style>
