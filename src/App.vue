<template>
  <div id="app">
	  Root Foo: {{rootFoo}}<br />
	  Robots Foo: {{robotsFoo}}<br />
	  Users Foo: {{usersFoo}}<br />
	  <br />
	  Root Getter: {{rootGetterFoo}}<br />
	  Robots Getter: {{robotsGetterFoo}}<br />
	  Users Getter: {{usersGetterFoo}}<br />
	  <header>
		  <nav>
			  <ul>
				  <li class="nav-item">
					  <router-link :to="{name:'Home'}" class="nav-link" exact >
							 <!-- active-class="you-are-here" << custom active css rule is being ignored by browser -->
							<img src="./assets/build-a-bot-logo.png" class="logo" alt="Build-A-Bot" >
							Build-A-Bot
						</router-link>
				  </li>
				  <li class="nav-item">
					  <router-link :to="{name:'Build'}" class="nav-link" exact >
							 <!-- active-class="you-are-here" << css rules not applied when used -->
							Build
						</router-link>
				  </li>
				  <li class="nav-item cart">
					  <router-link :to="{name:'Cart'}" class="nav-link" exact >
							View Cart 
							<div class="cart-items">
								{{cart.length}}
							</div>
						</router-link>
				  </li>
			  </ul>
		  </nav>
	  </header>
		<div class="container">
				<aside class="aside">
					<router-view name="sidebar"></router-view>
				</aside>
				<main>
					<!--<HomePage />-->
					<!-- <RobotBuilder id="robotBuilder" /> -->
					<router-view />
					<!-- ^^^^^ without name, router view has the default name "default" -->
				</main>
		</div>
  </div>
</template>

<script>
//import HomePage from './home/HomePage.vue';
// import RobotBuilder from "./build/RobotBuilder.vue";

import {mapState} from "vuex";

export default {
	name: 'app'//ref to div#app above
	,computed: {
		...mapState({
			rootFoo: "foo"//replaces rootFoo() below
			// ,robotsFoo: state => state.robots.foo//replaces robotsFoo() below
			,usersFoo: state => state.users.foo//replaces usersFoo() below
		})
		// ,...mapState("users", { usersFoo: "foo" })//also replaces usersFoo() below
		// ^^^^^^ this syntax ONLY works with namespaced modules, so we have to use the version above
		,...mapState("robots", {robotsFoo: "foo"})//namespaced only syntax replaced version above
		,cart(){
			return this.$store.state.robots.cart;
		}
		// ,rootFoo(){
		// 	return this.$store.state.foo;
		// }
		// ,robotsFoo(){
		// 	return this.$store.state.robots.foo;
		// }
		// ,usersFoo(){
		// 	return this.$store.state.users.foo;
		// }
		,rootGetterFoo(){
			return this.$store.getters.foo;
		}
		,robotsGetterFoo(){
			return this.$store.getters["robots/foo"];
		}
		,usersGetterFoo(){
			return this.$store.getters["users/foo"];
		}
	}
	,components: {
		//    HomePage
	// RobotBuilder
		//^^^ replaced with routing between components (here for initial dev)
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
	padding: 30px;
	background-color: white;
	width: 964px;
	min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
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
.nav-item.cart{
	position: relative;
	margin-left: auto;
	border-right: none;
}
.nav-link{
	text-decoration: none;
	color: inherit;
}
/* ^^^ custom active class */
.you-are-here
,.router-link-active{
	/* ^^^^^ Auto class for Vue router */
	color: white;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.container{
	display: flex;
	margin: 10px auto 0 auto;
	justify-content: center;
}
.aside{
	padding: 30px;
	background-color: #aaa;
	width: 100px;
	min-height: 300px;
}
.cart-items{
	position: absolute;
	top: -5px; right: -11px;
	font-size: 18px;
	width: 22px;
	text-align: center;
	display: inline-block;
	border-radius: 100px;
	background-color: mediumseagreen;
}
</style>
