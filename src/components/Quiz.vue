<template>
  <div class="quiz">
    <h1>{{name}}</h1>
    <!-- <h2># of questions: {{numberOfQuestions}}</h2> -->
    <div v-if="numberOfQuestions">
      <question
        v-for="(question, questionIndex) in questions"
        :key="questionIndex"
        :question="question"
        :index="questionIndex"
        @increment="increment" />
      </div>
      <h5>Correct answers: {{correct}}</h5>
  </div>
</template>

<script>
import Question from './Question';

export default {
  name: 'Quiz',
  components: {
    question: Question,
  },
  methods: {
    increment() {
      this.correct += 1;
    },
  },
  data() {
    return {
      name: 'My really awesome quiz',
      questions: [
        {
          title: 'This is the title of the first question. Isn\'t it nice?',
          image: 'http://lorempixel.com/400/200/food',
          choices: [
            'first answer',
            'second answer',
            'thrid answer',
            'fourth answer',
          ],
          answer: 0,
        },
        {
          title: 'And what would you think about the second question?',
          image: 'http://lorempixel.com/400/200/sports',
          choices: [
            'first answer',
            'second answer',
            'thrid answer',
            'fourth answer',
          ],
          answer: 2,
        },
        {
          title: 'What about the third? Awesome for sure, right?!',
          image: 'http://lorempixel.com/400/200/animals',
          choices: [
            'first answer',
            'second answer',
            'thrid answer',
            'fourth answer',
          ],
          answer: Math.floor((Math.random() * 10) / 3),
        },
      ],
      correct: 0,
    };
  },
  computed: {
    numberOfQuestions() {
      return this.questions.length;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz {
  width: 500px;
  margin: 0 auto;
}

.quiz h1 {
  text-align: center;
}
</style>
