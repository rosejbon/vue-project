<template>
        <button class="button">
            <slot></slot>
        </button>
</template>
  
<style scoped>
.button {
    border-radius: 20px;
    background-color: var(--color-red);
    color: var(--color-white);
    padding: .66667em 1.5em;
    text-decoration: none;
    display: inline-block;
}

.button:hover,
.button:active,
.button:focus-visible {
    background-color: var(--color-green);
    color: var(--color-white);
    border: none;
    outline: none;
}
</style>