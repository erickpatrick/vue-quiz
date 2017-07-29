<template>
  <b-list-group-item
    :class="updateClass" 
    @click.native="showAnswer(index)">
    {{choice}}
  </b-list-group-item>
</template>

<script>
export default {
  name: 'Choice',
  props: [
    'choice',
    'answer',
    'index',
    'answered',
  ],
  computed: {
    updateClass() {
      return {
        'list-group-item-success': this.status,
        'list-group-item-danger': this.chosen && this.status === false,
      };
    },
  },
  watch: {
    answered() {
      this.updateStatus(this.index);
    },
  },
  methods: {
    showAnswer(index) {
      if (this.answered) {
        return;
      }

      this.updateStatus(index);
      this.choose();

      this.$emit('wasAnswered');
      this.$emit('wasCorrect', this.answer === index);
    },
    updateStatus(index) {
      this.status = this.answer === index;
    },
    choose() {
      this.chosen = !this.status;
    },
  },
  data() {
    return {
      status: false,
      chosen: false,
    };
  },
};
</script>

<style scoped>
.choice {
  margin-bottom: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
.correct {
  background-color: chartreuse;
}
.incorrect {
  background-color: crimson;
  color: white;
}
.chosen {
  border-left-color: black;
}
</style>
