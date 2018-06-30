<template>
	<div>
		<div class="top-row">
			<div class="top part">
				<img v-bind:src="availableParts.heads[ currentHead ].src" title="Head"/>
				<button v-on:click="prevHead()" class="prev-selector">&#9668;</button>
				<button v-on:click="nextHead()" class="next-selector">&#9658;</button>
			</div>
		</div>
		<div class="middle-row">
			<div class="left part">
				<img v-bind:src="availableParts.arms[ currentArmL ].src" title="Left arm"/>
				<button v-on:click="prevArmL()" class="prev-selector">&#9650;</button>
				<button v-on:click="nextArmL()" class="next-selector">&#9660;</button>
			</div>
			<div class="center part">
				<img v-bind:src="availableParts.torsos[ currentTorso ].src" title="Torso"/>
				<button v-on:click="prevTorso()" class="prev-selector">&#9668;</button>
				<button v-on:click="nextTorso()" class="next-selector">&#9658;</button>
			</div>
			<div class="right part">
				<img v-bind:src="availableParts.arms[ currentArmR ].src" title="Right arm"/>
				<button v-on:click="prevArmR()" class="prev-selector">&#9650;</button>
				<button v-on:click="nextArmR()" class="next-selector">&#9660;</button>
			</div>
		</div>
		<div class="bottom-row">
			<div class="bottom part">
				<img v-bind:src="availableParts.bases[ currentBase ].src" title="Base"/>
				<button v-on:click="prevBase()" class="prev-selector">&#9668;</button>
				<button v-on:click="nextBase()" class="next-selector">&#9658;</button>
			</div>
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
				,currentHead: 0
				,currentArmL: 0
				,currentTorso: 0
				,currentArmR: 0
				,currentBase: 0
			};
		}
		,methods: {
			nextHead() {
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
		}
	};
</script>

<style>
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

</style>