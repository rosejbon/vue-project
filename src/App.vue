<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import IconSearch from './components/icons/IconSearch.vue'
</script>

<template>
  <header>
    <div class="banner">
      <ul>
        <li><RouterLink to="/">Search <IconSearch/></RouterLink></li>
        <li><RouterLink to="/">Learn</RouterLink></li>
        <li><RouterLink to="/">Donate</RouterLink></li>
      </ul>
    </div>
    <div class="header">
      <RouterLink to="/" title="Back to homepage">
        <img class="logo" src="./assets/logo.png" />
      </RouterLink>
      <nav>
        <ul>
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">What we do</RouterLink>
          </li>
          <li>
            <RouterLink to="/digital-divide">The digital divide</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">Get involved</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">Our network</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">Insights</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
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

.banner ul li{
  padding: var(--space-xs) var(--space-s);
  border-right: 0.1rem solid var(--color-black);
  border-left:  0.1rem solid var(--color-black);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.banner ul li:first-child{
  margin-right: auto
}

.banner ul li:nth-child(2){
  background: linear-gradient(to top, var(--color-green) 10%, var(--color-white) 10% 100%);
}

.banner ul li:nth-child(3){
  border: unset;
  background-color: var(--color-red);
  color: var(--color-white);
}

a {
  text-decoration: none;
}
</style>
