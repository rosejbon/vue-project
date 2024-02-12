<script setup lang="ts">
import IconSearch from './components/icons/IconSearch.vue'
import logo from './assets/logo.png?url'
</script>

<template>
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  </head>
  <header>
    <div class="banner">
      <ul>
        <li><a href="/">Search
            <IconSearch />
          </a></li>
        <li><a href="/">Learn</a></li>
        <li><a href="/">Donate</a></li>
      </ul>
    </div>
    <div class="header">
      <a href="/" title="Back to homepage">
        <img class="logo" :src="logo" alt="Good things foundation logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">What we do</a>
          </li>
          <li>
            <a href="/digital-divide">The digital divide</a>
          </li>
          <li>
            <a href="/about">Get involved</a>
          </li>
          <li>
            <a href="/about">Our network</a>
          </li>
          <li>
            <a href="/about">Insights</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <slot></slot>

  </html>
</template>

<style >
@import './assets/main.css';

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-s) var(--space-xl);
  gap: var(--space-s);
}

.header nav ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--space-xs);
}

.header nav a {
  text-decoration: none;
}

.logo {
  height: 40px;
}

.banner {
  padding: 0 var(--space-xl);
  border-bottom: 0.1rem solid var(--color-black);
}

.banner ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.banner ul li {
  padding: var(--space-xs) var(--space-s);
  border-right: 0.1rem solid var(--color-black);
  border-left: 0.1rem solid var(--color-black);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.banner ul li:first-child {
  margin-right: auto
}

.banner ul li:nth-child(2) {
  background: linear-gradient(to top, var(--color-green) 10%, var(--color-white) 10% 100%);
}

.banner ul li:nth-child(3) {
  border: unset;
  background-color: var(--color-red);
  color: var(--color-white);
}

a {
  text-decoration: none;
}</style>
