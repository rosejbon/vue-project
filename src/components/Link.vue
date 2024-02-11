<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  page: string
  text: string
}

const props = defineProps<Props>()

</script>

<template>
    <a :href="props.page" class="link">
        <slot>{{ props.text }}</slot>
    </a>
</template>
  
<style scoped>
.link {
    border-radius: 20px;
    background-color: var(--color-white);
    border: solid 1px var(--color-black);
    color: var(--color-red);
    padding: .66667em 1.5em;
    text-decoration: none;
    display: inline-block;
}

.link:hover, .link:active, .link:focus-visible {
    background-color: var(--color-red);
    color: var(--color-white);
    outline: none;
}
</style>