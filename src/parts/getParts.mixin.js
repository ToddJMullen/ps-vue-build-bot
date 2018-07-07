export default {
	beforeCreate(){
		console.log("getParts mixin beforeCreate()...");
		// this.$store.dispatch("getParts");
	}
	,created(){
		console.log("getParts mixin created()...");
		this.$store.dispatch("getParts");
	}
	,computed: {
		parts(){
			return this.$store.state.parts || {arms:[],heads:[],torsos:[],bases:[]};
		}
	}
}