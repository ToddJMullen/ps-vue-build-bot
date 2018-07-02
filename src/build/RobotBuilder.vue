<template>
	<div class="child-comp-root content">

		<button class="btnAddToCart" @click="addToCart()" >Add To Cart</button>

		<div class="top-row">
			<div class="top part" :style="headBorderStyle"
				 :class="[computedHeadClasses]">
				<!--<div v-once class="robot-name">-->
				<!--above would only parse once, then remove binding to free binding-->
				<div class="deep-child-elem robot-name">
					{{ selectedRobot.head.title }}
					<span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
					<!--^^^^ removes element from DOM-->
					<span v-show="selectedRobot.head.onSale" class="sale">Sale!</span>
					<!--^^^^ show/hide element in DOM-->
				</div>
				<PartSelector :parts="availableParts.heads"
								position="top" />
				<!-- <img :src="selectedRobot.head.src" title="Head"/>
				<button @click="prevHead()" class="prev-selector">&#9668;</button>
				<button @click="nextHead()" class="next-selector">&#9658;</button> -->
			</div>
		</div>
		<div class="middle-row">
			<PartSelector :parts="availableParts.arms"
							position="left" />
			<PartSelector :parts="availableParts.torsos"
							position="center" />
			<PartSelector :parts="availableParts.arms"
							position="right" />
			<!-- <div class="left part">
				<img :src="selectedRobot.armL.src" title="Left arm"/>
				<button @click="prevArmL()" class="prev-selector">&#9650;</button>
				<button @click="nextArmL()" class="next-selector">&#9660;</button>
			</div>
			<div class="center part">
				<img :src="selectedRobot.torso.src" title="Torso"/>
				<button @click="prevTorso()" class="prev-selector">&#9668;</button>
				<button @click="nextTorso()" class="next-selector">&#9658;</button>
			</div>
			<div class="right part">
				<img :src="selectedRobot.armR.src" title="Right arm"/>
				<button @click="prevArmR()" class="prev-selector">&#9650;</button>
				<button @click="nextArmR()" class="next-selector">&#9660;</button>
			</div> -->
		</div>
		<div class="bottom-row">
			<PartSelector :parts="availableParts.bases"
							position="bottom" />
			<!-- <div class="bottom part">
				<img :src="selectedRobot.base.src" title="Base"/>
				<button @click="prevBase()" class="prev-selector">&#9668;</button>
				<button @click="nextBase()" class="next-selector">&#9658;</button>
			</div> -->
		</div>



		<div>
			<h1>Cart</h1>
			<table>
				<thead>
					<tr>
						<th>Bot Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					<!--note: For performance, do not use v-if and v-for on same element. Filter elements instead-->
					<tr v-for="(bot, index) in cart" :key="index">
						<td>{{bot.head.title}}</td>
						<td class="cost">{{bot.cost}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	// bring in robot part resource data
	import availableParts from "../data/parts";
	import hookMixin from "./hook-mixin"
	import PartSelector from "./PartSelector";

	export default {
		name: "RobotBuilder"
		,components: {PartSelector}
		,mixins: [
			hookMixin
		]
		,data() {
			return {
				availableParts
				,cart: []//cart has to be initialized here in order to use change detection
				,selectedRobot: {
					head: {}
					,armL: {}
					,torso: {}
					,armR: {}
					,base: {}
				}//selectedRobot
			};
		}
		,computed: {

			headBorderStyle() {
				console.log("headBorderStyle()");
				return {
//					border: this.selectedRobot.head.onSale ? "2px outset #0f0" : "1px solid #300"
				}
			}//headBorderStyle

			,computedHeadClasses() {
				console.log("computedHeadClasses()",  );
				let classAry = []
				classAry.push( this.selectedRobot.head.onSale ? "sale-border" : "not-on-sale" )
				classAry.push( this.currentHead % 2 == 1 ? "is-odd" : "is-even" )
				return classAry;
			}//computedHeadClasses
		}//computed
		,methods: {
			addToCart() {
				let bot	= this.selectedRobot
				,cost		= bot.head.cost
								+ bot.armL.cost
								+ bot.torso.cost
								+ bot.armR.cost
								+ bot.base.cost
				//use object assign to create a clone of the robot + the cost property for it's parts
				,botCopy	= Object.assign({}, bot, {cost})
				;
				console.log("addToCart()", botCopy );

				this.cart.push( botCopy );

			}//addToCart

		}//methods
	};
</script>

<style scoped>
	.content{
		/*used to allow abs positioning with component instance*/
		position: relative;
	}
	.part {
		position: relative;
		width:165px;
		height:165px;
		border: 3px solid #aaa;
	}
	.part img {
		width:165px;
	}
	.top-row {
		display:flex;
		justify-content: space-around;
	}
	.middle-row {
		display:flex;
		justify-content: center;
	}
	.bottom-row {
		display:flex;
		justify-content: space-around;
		border-top: none;
	}
	.head {
		border-bottom: none;
	}
	.left {
		border-right: none;
	}
	.right {
		border-left: none;
	}
	.left img {
		transform: rotate(-90deg);
	}
	.right img {
		transform: rotate(90deg);
	}
	.bottom {
		border-top: none;
	}
	.prev-selector {
		position: absolute;
		z-index:1;
		top: -3px;
		left: -28px;
		width: 25px;
		height: 171px;
	}
	.next-selector {
		position: absolute;
		z-index:1;
		top: -3px;
		right: -28px;
		width: 25px;
		height: 171px;
	}
	.center .prev-selector, .center .next-selector {
		opacity:0.8;
	}
	.left .prev-selector {
		top: -28px;
		left: -3px;
		width: 144px;
		height: 25px;
	}
	.left .next-selector {
		top: auto;
		bottom: -28px;
		left: -3px;
		width: 144px;
		height: 25px;
	}
	.right .prev-selector {
		top: -28px;
		left: 24px;
		width: 144px;
		height: 25px;
	}
	.right .next-selector {
		top: auto;
		bottom: -28px;
		left: 24px;
		width: 144px;
		height: 25px;
	}
	.right .next-selector {
		right: -3px;
	}
	.robot-name{
		position: absolute;
		top: -25px;
		text-align: center;
		width: 100%;
	}
	.sale{
		font-size: smaller;
		color: red;
		font-weight: bold;
	}
	.btnAddToCart{
		position: absolute;
		right: 30px;
		width: 200px;
		padding: 7px;
		font-size: 2em;
		color: #090;
	}
	td,th{
		text-align: left;
		padding: 5px;
		padding-left: 20px;
	}
	td.cost{
		text-align: right;
		color: #090;
	}
	.sale-border{
		border: 3px solid red;
	}
	.is-odd{
		transform: rotate(20deg);
	}
	.is-odd:before{
		content: "(odd)"
	}
</style>