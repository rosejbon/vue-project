import { defineStore } from 'pinia';

interface FormData {
  whoYouAre: string | null;
  whatYouWant: string | null;
}

export const useFormStore = defineStore('form', {
  state: (): FormData => ({
    whoYouAre: null,
    whatYouWant: null,
  }),
  actions: {
    setWhoYouAre(value: string) {
      this.whoYouAre = value;
    },
    setWhatYouWant(value: string) {
      this.whatYouWant = value;
    },
  },
});
