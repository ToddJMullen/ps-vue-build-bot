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
	,computed: {
		part(){
			// let id		= this.$route.params.id
			// ,partType	= this.$route.params.partType
			// ;//old way
			let { partType, id } = this.$route.params;
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
