<template>
  <div class="quiz">
    <div v-if="numberOfQuestions">
      <question
        v-for="(question, questionIndex) in questions"
        :key="questionIndex"
        :question="question"
        :index="questionIndex"
        :current="current"
        :total-of-questions="numberOfQuestions"
        @increment="increment"
        @next="next"/>
    </div>

    <div v-if="current === numberOfQuestions">
      <b-card class="quiz__results">
        <div class="card-text">
          <p><img src="/static/congrats.png" alt=""/></p>
          <p class="quiz__results__description">Você acertou <strong>{{correct}}</strong> de um total de {{numberOfQuestions}}. {{getMotivationalSentence()}}</p>
          <p><a href="https://www.facebook.com/sharer/sharer.php?u=e"><img src="/static/fb.png" alt=""></a></p>
          <p class="quiz__results__again">Quer testar novamente seus conhecimentos? <a href="#" @click="reset">Repita o teste</a>.</p>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Question from './Question';

export default {
  name: 'Quiz',
  components: {
    question: Question,
  },
  methods: {
    getQuestions() {
      axios.get('http://wp.localhost/wp-json/wp/v2/quiz?per_page=20')
        .then((response) => {
          this.questions = this.shuffle(response.data).slice(0, 2);
        });
    },
    increment() {
      this.correct += 1;
    },
    next(index) {
      this.current = index >= this.numberOfQuestions ? this.numberOfQuestions : index;
    },
    reset() {
      this.correct = 0;
      this.current = 0;
      this.questions = [];
      this.questions = this.getQuestions();
    },
    getMotivationalSentence() {
      if (this.isScoreBetween(0, 30)) {
        return 'Você pode tentar com um pouco mais de afinco...';
      }

      if (this.isScoreBetween(30, 60)) {
        return 'Você foi bem, mas pode melhorar, hein?';
      }

      if (this.isScoreBetween(60, 80)) {
        return 'Uau! Você sabe bastante!';
      }

      if (this.isScoreBetween(80, 100)) {
        return 'Você sabe tudo sobre PROMOBe';
      }

      return 'Owch...';
    },
    isScoreBetween(lower, higher) {
      const score = (this.correct / this.numberOfQuestions) * 100;

      return score > lower && score <= higher;
    },
    shuffle(items) {
      let i = 0;
      let j = 0;
      let temp = null;
      const localItems = items;

      for (i = localItems.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = localItems[i];
        localItems[i] = localItems[j];
        localItems[j] = temp;
      }

      return localItems;
    },
  },
  data() {
    return {
      questions: [],
      correct: 0,
      current: 0,
    };
  },
  computed: {
    numberOfQuestions() {
      return this.questions !== undefined ? this.questions.length : 0;
    },
  },
  mounted() {
    this.getQuestions();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .quiz {
    max-width: 800px;
    margin: 20px auto;
  }

  .quiz h1 {
    text-align: center;
  }

  .card-img,
  .card-img-top,
  .card-img-bottom {
    width: 100%
  }

  .quiz__results {
    border: 1px solid #ececec;
    border-radius: 15px;
    padding: 40px 80px;
    background: #fafafa;
    text-align: center;
  }

  .quiz__results__description {
    font-size: 28px;
    margin: 40px 0;
  }

  .quiz__results__again {
    font-size: 18px;
  }
</style>
