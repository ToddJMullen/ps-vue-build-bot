<template>
  <div class="part" :class="position" >
    <!-- <img :src="selectedPart.src" title="arm"
          @click="showPartInfo()"/> -->
    <!--{{pinPadding}}-->
    <router-link :to="{
          name: 'Parts'
          ,params: {
            partType: this.selectedPart.type
            ,id: this.selectedPart.id
          }
        }">
      <img :src="selectedPart.src" title="arm"/>
    </router-link>
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
	<!--@click="pinPadding='30px'"-->
    <span
	v-pin="{bottom: pinPadding, right: pinPadding}"
	  class="sale" v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
// import availableParts from '../data/parts';
//import pinDirective from "../shared/pin-directive";

// const parts = availableParts.heads;

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
//	directives: {
//	    pin: pinDirective
//	},
	props: {
		//data/name passed to the component in markup/instantiation
		parts: {//add validation info
			type: Array
			,required: true
		}
		,position: {
			type: String
			,required: true
			,validator: function(value){
				//position can be empty, but would still validate as empty string ""
				//here we provide custom validation against an explicity list
				return ["left","right","top","bottom","center"].includes( value );
			}
		}
	}
  ,data() {
    return {
      selectedPartIndex: 0
      ,changed: false
      ,pinPadding: "10px"
    };
  }
  ,created(){//called once when created
	  this.emitSelectedPart();//was triggering isDirty in RoboBuilder, don't remember if I put this, or he said to
  }
  ,updated(){//lifecycle hook for when data is changed
	  this.emitSelectedPart();
  }
  ,computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  methods: {
    showPartInfo(){
      // console.log("showPartInfo()");
      this.$router.push( {
          name: "Parts"
          , params: {
              id: this.selectedPart.id
              ,partType: this.selectedPart.type
          }
      });
    }
	  ,emitSelectedPart() {
		  // console.log("emitSelectedPart()", this.selectedPart, this.changed );
		  this.$emit("selectedPart", this.selectedPart, this.changed );
	  }
    ,selectNextPart() {
      this.changed = true;
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
	//   this.emitSelectedPart();//called bc data changed
    },
    selectPreviousPart() {
      this.changed = true;
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
	    	this.parts.length,
      );
	//   this.emitSelectedPart();//replaced with "updated()" lifecycle hook
    },

  },
};

</script>

<style scoped>
.part {
  position: relative;
  width:165px;
  height:165px;
  border: 3px solid #aaa;
}
.sale {
/*  position: absolute;
  bottom: 5px;
  right: 5px;*/
  color: white;
  background-color: red;
  padding: 3px;
}
.part-title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: red;
  padding-top: 5px;
  top: -25px;
}
.part img {
  width:165px;
  cursor: pointer;
}
.top {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.bottom {
  border-top: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
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
.left .prev-selector:after,  .right .prev-selector:after{
  content: '\25B2'
}
.left .next-selector:after, .right .next-selector:after {
  content: '\25BC'
}
.top .prev-selector:after, .bottom .prev-selector:after, .center .prev-selector:after{
  content: '\25C4'
}
.top .next-selector:after, .bottom .next-selector:after, .center .next-selector:after{
  content: '\25BA'
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
.highlight {
  border: 1px solid red;
}
</style>
