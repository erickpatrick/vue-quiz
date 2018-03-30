<template>
    <div>
        <b-badge href="#" variant="myth" @click="isCorrect(0)">Mito</b-badge>
        <b-badge href="#" variant="truth" @click="isCorrect(1)">Verdade</b-badge>
    </div>
</template>

<script>
  export default {
    name: 'Choice',
    props: {
      answer: {
        required: true,
      },
    },
    methods: {
      isCorrect(answer) {
        this.$emit('answer', this.answer === answer);
      },
    },
  };
</script>

<style scoped>
    .badge-myth,
    .badge-truth {
        text-transform: uppercase;
        padding: 15px 40px;
        font-size: 20px;
        border-radius: 40px;
        margin: 0 15px;
        width: 200px;
    }
    .badge-myth {
        background-color: #993245
    }
    .badge-myth:hover,
    .is_myth .badge-myth {
        background-color: #ca95a3
    }
    .badge-truth {
        background-color: #59bcbd
    }
    .badge-truth:hover,
    .is_myth .badge-truth {
        background-color: #abddde
    }
</style>
