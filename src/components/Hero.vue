<script lang="ts" setup>
import Link from './Link.vue';
import Stack from './Stack.vue';

import person from '../assets/person-on-their-phone.jpeg?url'
</script>

<template>
    <div class="hero">
        <img :src="person" alt="Person on their phone" />
        <Stack gap="space-m" :style="`align-items : flex-start`">
            <h1>Get online week 2021</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore
                magna aliqua. Lacinia at quis risus sed vulputate odio ut.
            </p>
            <Link page="/" text="Get involved now!"/>
        </Stack>
    </div>
</template>

<style scoped>
.hero {
    position: relative;
    display: inline-block;
    min-width: 100%;
    min-height: 100%;
}

.hero img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
}

.hero .stack {
    padding: var(--space-xl);
    position: relative;
}

.hero h1 {
    background-color: var(--color-blue);
    padding: var(--space-m);
    color: var(--color-white);
    }

.hero p {
    background-color: var(--color-white);
    padding: var(--space-m);
    color: var(--color-blue);
    max-width: 60ch;
}
</style>