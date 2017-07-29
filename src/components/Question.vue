<template>
  <div class="question">
    <b-card :img="question.image"
          :title="question.title"
          class="mb-2">
      <b-list-group :flush="true">
        <choice 
          v-for="(choice, choiceIndex) in question.choices"
          :key="choiceIndex"
          :choice="choice"
          :index="choiceIndex" 
          :answer="question.answer"
          :answered="answered"
          @wasAnswered="wasAnswered"
          @wasCorrect="wasCorrect" />
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
import Choice from './Choice';

export default {
  name: 'Question',
  components: {
    choice: Choice,
  },
  props: [
    'question',
    'index',
  ],
  methods: {
    wasAnswered() {
      this.answered = true;
    },
    wasCorrect(wasIt) {
      if (wasIt) {
        this.$emit('increment');
      }
    },
  },
  data() {
    return {
      answered: false,
      correct: false,
    };
  },
};
</script>

<style>
.card-img {
  width: 100%;
  height: auto;
}
.question {
  margin: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  background: #fcfcfc;
}
</style>
