<template>
  <div class="question" v-if="current == index">
    <div class="question__position">
      <span class="question__position__number">{{index+1}}/{{totalOfQuestions}}</span>
    </div>
    <b-card title="Mito ou Verdade?" class="question__header" />
    <b-card :img-src="question.imagem.guid"
            :img-alt="question.pergunta"
            img-top
            :title="question.pergunta"
            :class="{question__content: true, is_myth: answered && isMyth}">
      <b-list-group :flush="true">
        <yes-no
          :answer="parseInt(question.mito)"
          @answer="answer"
        />
      </b-list-group>
      <div></div>
    </b-card>

    <div v-if="answered" class="question__answer">
      <b-card v-if="correct" title="Você acertou!">
        <div class="card-text">
          <p>{{question.resposta}}</p>
          <p class="question__answer__continue">
            <b-badge href="#" variant="continue" @click="next">
              Avançar<span>&raquo;</span>
            </b-badge>
          </p>
        </div>
      </b-card>
      <b-card v-if="!correct" title="Você errou...">
      <div class="card-text">
        <p>{{question.resposta}}</p>
        <p class="question__answer__continue">
          <b-badge href="#" variant="continue" @click="next">
            Avançar<span>&raquo;</span>
          </b-badge>
        </p>
      </div>
      </b-card>
    </div>

    <div class="question__reference">
      <p class="question__reference__title"><strong>Fontes consultadas:</strong></p>
      <p class="question__reference__content">{{question.fontes}}</p>
    </div>
  </div>
</template>

<script>
import YesNo from './YesNo';

export default {
  name: 'Question',
  components: { YesNo },
  props: [
    'question',
    'index',
    'current',
    'totalOfQuestions',
  ],
  data() {
    return {
      answered: false,
      correct: false,
    };
  },
  computed: {
    isMyth() {
      return parseInt(this.question.mito, 10) === 0;
    },
  },
  methods: {
    answer(wasCorrect) {
      this.answered = true;

      if (wasCorrect) {
        this.correct = wasCorrect;
        this.$emit('increment');
      }
    },
    next() {
      this.$emit('next', this.index + 1);
    },
  },
};
</script>

<style scoped>
  .question__position {
    text-align: center;
  }

  .question__position__number {
    border: 1px solid #cfcfcf;
    padding: 10px 20px;
    font-size: 16px;
    line-height: 16px;
    display: inline-block;
    background: #fafafa;
    font-weight: bold;
    border-radius: 20px;
  }

  .question__header,
  .question__content {
    background-color: #2e365f;
  }

  .question__header {
    margin-top: 20px;
    padding: 10px 0;
    text-transform: uppercase;
  }

  .question__content {
    margin-bottom: 10px;
    border-top: 5px dashed #fbb046;
    padding: 20px 40px;
  }

  .question__reference {
    color: black;
  }

  .question__reference__content {
    color: #333;
  }

  .question__reference__title {
    margin-bottom: 0;
  }

  .question__header .card-title,
  .question__content .card-title {
    margin: 0;
    padding: 20px 0;
    color: white;
    text-align: center;
  }

  .question__header .card-title {
    font-size: 30px;
  }

  .question__content .card-title {
    font-size: 24px;
  }

  .is_myth img {
    position: relative;
  }

  .is_myth img::before {
    height: 50px;
    width: 100%;

    content: attr(data-text);
    position: absolute;
    background-color: #2e365f;
  }

  .question__answer .card-title {
    margin: 40px 0 0 0;
    padding: 20px;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    background: #fbb046;
  }

  .question__answer .card-text {
    margin-bottom: 30px;
    border: 1px solid #dedede;
    border-top: none;
    padding: 40px;
    font-size: 16px;
    background: #fafafa;
  }
  
  .question__answer .question__answer__continue {
    text-align: center;
  }

  .question__answer .badge-continue {
    border-radius: 30px;
    padding: 15px 30px;
    font-size: 20px;
    font-weight: normal;
    text-transform: uppercase;
    background: #2e365f;
    color: white;
  }

  .question__answer .badge-continue span {
    padding-left: 20px;
    font-size: 30px;
    line-height: 20px;
    display: inline-block;
  }

  .list-group {
    text-align: center;
  }
</style>
