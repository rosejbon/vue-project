<script setup lang="ts">
import Box from './Box.vue'
import Card from './Card.vue'
import Grid from './Grid.vue'
import Hero from './Hero.vue'
import Form from './Form.vue'
import Link from './Link.vue'
import Stack from './Stack.vue'
</script>

<template>
  <div> 
    <Hero/>
    <Grid>
      <img src="../assets/person-smiling.jpeg" alt="Person smiling at a desk"
        :style="`height: 100%; width: 100%; object-fit: cover`">
      <Box padding="space-xl" background="green">
        <Stack gap="space-m" :style="`align-items : flex-start`">
          <h2>We are a social change charity, helping people to improve their lives through digital.</h2>
          <p>We tackle the most pressing issues of our time, working with partners in thousands of communities across the
            UK and further afield.</p>
          <Link page="/" text="Learn more about us"/>
        </Stack>
      </Box>
    </Grid>
    <Form />
    <Box padding="space-xl" background="blue">
      <Stack gap="space-m">
        <h2 :style="`color: var(--color-white)`">What do we do?</h2>
        <p :style="`color: var(--color-white)`">You might not have heard of us, but we're the people behind the following
          impactful programs.</p>
        <ul :style="`list-style-type: none; margin: 0; padding: 0`">
          <Grid gap="space-m">
            <li>
              <Card title="Get online work" text="Lorem ipsum doior sit amet" callToActionText="Read more"
                callToActionLink="/" />
            </li>
            <li>
              <Card title="Get online work" text="Lorem ipsum doior sit amet" callToActionText="Read more"
                callToActionLink="/" />
            </li>
            <li>
              <Card title="Get online work" text="Lorem ipsum doior sit amet" callToActionText="Read more"
                callToActionLink="/" />
            </li>
            <li>
              <Card title="Get online work" text="Lorem ipsum doior sit amet" callToActionText="Read more"
                callToActionLink="/" />
            </li>
          </Grid>
        </ul>
        <Link page="/" text="More about what we do" :style="`place-self: center`"/>
      </Stack>
    </Box>
  </div>
</template>
