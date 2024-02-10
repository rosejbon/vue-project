<!-- Based off the Box component from Every Layout - https://every-layout.dev/layouts/box/ -->

<template>
    <div class="box" :style="computedStyles">
        <slot></slot>
    </div>
</template>
  
<script lang="ts" setup>
import { defineProps, computed } from 'vue'

interface Props {
    padding?: 'space-3xs' | 'space-2xs' | 'space-xs' | 'space-s' | 'space-m' | 'space-l' | 'space-xl' | 'space-2xl' | 'space-3xl',
    background?: 'white' | 'green' | 'red' | 'off-white' | 'blue'
}

const props = defineProps<Props>()

const computedStyles = computed(() => {
    let styles = '';
    if (props.padding) {
        styles += `padding: var(--${props.padding}); `;
    }
    if (props.background) {
        styles += `background: var(--color-${props.background}); `;
    }
    return styles.trim();
})
</script>
  
<style scoped>
.box * {
    color: inherit;
}
</style>
  