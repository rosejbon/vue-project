<!-- Based off the Grid component from Every Layout - https://every-layout.dev/layouts/grid/ -->

<template>
  <div class="grid" :style="computedStyles">
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
    styles += `grid-gap: var(--${props.gap}); `;
  }
  if (props.background) {
    styles += `background: var(--color-${props.background}); `;
  }
  return styles;
})

</script>

<style scoped>
.grid {
  display: grid;
}

@supports (width: min(250px, 100%)) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
  }
}
</style>
