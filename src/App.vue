<template>
  <div id="app">
	  <header>
		  <nav>
			  <ul>
				  <li class="nav-item">
					  <router-link :to="{name:'Home'}" class="nav-link" exact >
							<img src="./assets/build-a-bot-logo.png" class="logo" alt="Build-A-Bot" >
							Build-A-Bot
						</router-link>
				  </li>
				  <li class="nav-item">
					  <router-link :to="{name:'Build'}" class="nav-link" exact >
							Build
						</router-link>
				  </li>
			  </ul>
		  </nav>
	  </header>
    <main>
		<!--<HomePage />-->
		<!-- <RobotBuilder id="robotBuilder" /> -->
		<router-view />
	</main>
  </div>
</template>

<script>
//import HomePage from './home/HomePage.vue';
// import RobotBuilder from "./build/RobotBuilder.vue";

export default {
  name: 'app',//ref to div#app above
  components: {
//    HomePage
	// RobotBuilder
  }
};
</script>
<style>
/*global style block*/
body {
	background-color: #777;
	background-attachment: fixed;
}
</style>

<style scoped>
/*"app" specific/scoped style block*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
RobotBuilder{
	/* does not work to style the instance */
	background-color: darkslategray;
}
#robotBuilder{
	/*does work like normal*/
	/*background-color: lightcyan;*/
}
.child-comp-root{
	/*target child component *root* elements can be styled */
	border: 1px inset rgba(0,133,0,.3);
	padding: 2px;
}
.deep-child-elem{
	/* "normal" nested child styling will NOT work bc these styles are scoped*/
	font-style: oblique;
	color:blue;
}
.child-comp-root .deep-child-elem{
	/* also will NOT work */
	font-style: oblique;
	color:purple;
}
.child-comp-root >>> .deep-child-elem{
	/* WILL work using Vue syntax to target a nested element */
	/*will also affect all nested component's components*/
/*.child-comp-root /deep/ .deep-child-elem{*/
	/* ^^^^^ alternate syntax in case >>> doesn't work with preprocessor being used */
	font-style: oblique;
	font-weight: bold;
}

main{
	margin: 0 auto;
	padding: 30px;
	background-color: white;
	width: 1024px;
	min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-link{
	text-decoration: none;
	color: inherit;
}
.router-link-active{
	/* ^^^^^ Auto class for Vue router */
	color: white;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
