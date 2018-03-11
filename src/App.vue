<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
.quiz {
  max-width: 800px;
  margin: 0 auto;
}

.quiz h1 {
  text-align: center;
}

.card-img,
.card-img-top,
.card-img-bottom {
  width: 100%
}
</style>
