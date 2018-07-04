<template>
	<div>
		<div>
			<h1>{{ part.title }}</h1>
		</div>
		<div>
			{{ part.description }}
		</div>
	</div>
</template>

<script>
import parts from "../data/parts";

export default {
	name: "PartInfo"
	// ,props: ["partType","id"]//markup input attributes
	,props: {//markup input attributes
		"partType": {type: String}
		,"id": {
			type: [Number, String]
			,validator(value){
				return Number.isInteger(+value);
			}
		}
	}
	,computed: {
		part(){
			// let id		= this.$route.params.id
			// ,partType	= this.$route.params.partType
			// ;//old way
			// let { partType, id } = this.$route.params;//using router
			let { partType, id } = this;//using declared component props
			//ES2015, using destructuring

			// return parts[ type ][ id ];//wrong struct?
			return parts[ partType ].find( part => part.id === +id );
		}
	}
	,data(){
		return {
		}
	}
}
</script>

<style scoped >

</style>
