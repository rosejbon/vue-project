<template>
    <Box padding="space-xl" background="off-white">
        <Stack gap="space-m">
            <h2>How can we help you?</h2>
            <p>Let us know who you are and what you're looking for, and we'll help you get to the right place.</p>
            <Box padding="space-m" background="white">
                <form class="form" @submit.prevent="handleSubmit">
                    <label>
                        I am
                        <select v-model="whoYouAre">
                            <option value="individual">an individual</option>
                            <option value="charity">a charity</option>
                            <option value="volunteer">a volunteer</option>
                            <option value="trustee">a trustee</option>
                        </select>
                    </label>
                    <label>
                        And I
                        <select v-model="whatYouWant">
                            <option value="learn">want to learn</option>
                            <option value="share">want to share</option>
                            <option value="create">want to create</option>
                        </select>
                    </label>
                    <Button type="submit">Start now</Button>
                </form>
            </Box>
        </Stack>
    </Box>
</template>

<script lang="ts" setup>
import { useFormStore } from '@/stores/form';
import { ref } from 'vue'
import { useRouter } from 'vue-router';

import Box from './Box.vue';
import Button from './Button.vue';
import Stack from './Stack.vue';

const formStore = useFormStore();
const router = useRouter();

const whoYouAre = ref<string | null>(formStore.whoYouAre);
const whatYouWant = ref<string | null>(formStore.whatYouWant);

const handleSubmit = () => {
    formStore.setWhoYouAre(whoYouAre.value || "");
    formStore.setWhatYouWant(whatYouWant.value || "");
    router.push('/about');
};

</script>
  
<style scoped>
.form {
    display: inline-flex;
    gap: var(--space-s);
    align-items: center;
}
</style>
  