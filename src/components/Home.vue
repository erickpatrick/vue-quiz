<template>
    <div class="quiz">
        <b-card class="quiz__start">
            <div class="card-text">
                <div class="quiz__start__introduction">
                    <img src="static/como-funciona.png" alt="">
                    <p>Breve descrição sobre como funciona o Mitos e Verdades. Mais detalhes serão entregues quando necessário</p>
                </div>
                <p class="quiz__start__link">
                    <router-link to="/start" class="badge badge-continue">Iniciar</router-link>
                </p>
            </div>
        </b-card>
    </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .quiz__start {
        margin: 0 auto;
        max-width: 600px;
    }
    .quiz__start__introduction {
        font-size: 18px;
        text-align: center;
    }

    .quiz__start__introduction img {
        display: inline-block;
        margin-bottom: 20px;
    }

    .quiz__start__introduction p {
        text-align: left;
        margin-bottom: 40px;
    }

    .quiz__start .quiz__start__link {
        text-align: center;
    }

    .quiz__start .badge-continue {
        border-radius: 30px;
        padding: 15px 30px;
        font-size: 20px;
        font-weight: normal;
        text-transform: uppercase;
        background: #2e365f;
        color: white;
    }
</style>
