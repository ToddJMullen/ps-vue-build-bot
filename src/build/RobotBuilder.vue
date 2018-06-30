<template>
	<div class="child-comp-root content">
		<button class="btnAddToCart" @click="addToCart()" >Add To Cart</button>
		<div class="top-row">
			<div class="top part" :style="headBorderStyle">
				<!--<div v-once class="robot-name">-->
				<!--above would only parse once, then remove binding to free binding-->
				<div class="deep-child-elem robot-name">
					{{ selectedRobot.head.title }}
					<span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
					<!--^^^^ removes element from DOM-->
					<span v-show="selectedRobot.head.onSale" class="sale">Sale!</span>
					<!--^^^^ show/hide element in DOM-->
				</div>
				<img :src="selectedRobot.head.src" title="Head"/>
				<button @click="prevHead()" class="prev-selector">&#9668;</button>
				<button @click="nextHead()" class="next-selector">&#9658;</button>
			</div>
		</div>
		<div class="middle-row">
			<div class="left part">
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
			</div>
		</div>
		<div class="bottom-row">
			<div class="bottom part">
				<img :src="selectedRobot.base.src" title="Base"/>
				<button @click="prevBase()" class="prev-selector">&#9668;</button>
				<button @click="nextBase()" class="next-selector">&#9658;</button>
			</div>
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
	//bring in robot part resource data
	import availableParts from "../data/parts";

	function getNextIdx(idx, length) {
		console.log("getNextIdx()", idx, length );
		return ++idx % length;
	}//getNextIdx

	function getPrevIdx(idx, length) {
		console.log("getPrevIdx()", idx, length );
		return --idx > -1 ? idx : length - 1;
	}//getPrevIdx

	export default {
		name: "RobotBuilder"
		,data() {
			return {
				availableParts
				,cart: []//cart has to be initialized here in order to use change detection
				,currentHead: 0
				,currentArmL: 0
				,currentTorso: 0
				,currentArmR: 0
				,currentBase: 0
			};
		}
		,computed: {
			selectedRobot(){
				return {
					head: availableParts.heads[ this.currentHead ]
					,armL: availableParts.arms[ this.currentArmL ]
					,torso: availableParts.torsos[ this.currentTorso ]
					,armR: availableParts.arms[ this.currentArmR ]
					,base: availableParts.bases[ this.currentBase ]
				}
			}//selectedRobot
			,headBorderStyle() {
				console.log("headBorderStyle()");
				return {
					border: this.selectedRobot.head.onSale ? "2px outset #0f0" : "1px solid #300"
				}
			}//headBorderStyle
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
			,nextHead() {
				this.currentHead = getNextIdx( this.currentHead, this.availableParts.heads.length );
			   console.log("nextHead()", this.currentHead );
			}//nextHead
			,prevHead() {
				this.currentHead = getPrevIdx( this.currentHead, this.availableParts.heads.length );
			   console.log("prevHead()", this.currentHead );
			}//prevHead

			,nextArmL() {
				this.currentArmL = getNextIdx( this.currentArmL, this.availableParts.arms.length );
			   console.log("nextArmL()", this.currentArmL );
			}//nextArmL
			,prevArmL() {
				this.currentArmL = getPrevIdx( this.currentArmL, this.availableParts.heads.length );
			   console.log("prevArmL()", this.currentArmL );
			}//prevArmL

			,nextTorso() {
				this.currentTorso = getNextIdx( this.currentTorso, this.availableParts.torsos.length );
			   console.log("nextTorso()", this.currentTorso );
			}//nextTorso
			,prevTorso() {
				this.currentTorso = getPrevIdx( this.currentTorso, this.availableParts.torsos.length );
			   console.log("prevTorso()", this.currentTorso );
			}//prevTorso

			,nextArmR() {
				this.currentArmR = getNextIdx( this.currentArmR, this.availableParts.arms.length );
			   console.log("nextArmR()", this.currentArmR );
			}//nextArmR
			,prevArmR() {
				this.currentArmR = getPrevIdx( this.currentArmR, this.availableParts.arms.length );
			   console.log("prevArmR()", this.currentArmR );
			}//prevArmR

			,nextBase() {
				this.currentBase = getNextIdx( this.currentBase, this.availableParts.bases.length );
			   console.log("nextBase()", this.currentBase );
			}//nextBase
			,prevBase() {
				this.currentBase = getPrevIdx( this.currentBase, this.availableParts.bases.length );
			   console.log("prevHead()", this.currentBase );
			}//prevHead
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
</style>