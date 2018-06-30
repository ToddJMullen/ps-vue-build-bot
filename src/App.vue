<template>
  <div id="app">
    <main>
	<HomePage />
	</main>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'app',//ref to div#app above
  components: {
    HomePage
  }
};
</script>

<style>
body {
	background-color: #777;
	background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main{
	margin: 0 auto;
	padding: 30px;
	background-color: white;
	width: 1024px;
	min-height: 300px;
}
</style>
