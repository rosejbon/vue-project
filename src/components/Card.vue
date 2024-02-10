<script lang="ts" setup>
import { defineProps } from 'vue'

import Box from './Box.vue'
import Link from './Link.vue'
import Stack from './Stack.vue';

export interface Props {
    title: string,
    text: string,
    callToActionText: string,
    callToActionLink: string,
}

defineProps<Props>()

</script>

<template>
    <Box padding="space-m" background="white">
        <Stack gap="space-s" :style="`align-items : flex-start`">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
            <Link :page="callToActionLink" :text="callToActionText" />
        </Stack>
    </Box>
</template>
