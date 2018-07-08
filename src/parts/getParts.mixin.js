export default {
	beforeCreate(){
		console.log("getParts mixin beforeCreate()...");
		// this.$store.dispatch("robots/getParts");
	}
	,created(){
		console.log("getParts mixin created()...");
		this.$store.dispatch("robots/getParts");
	}
	,computed: {
		parts(){
			return this.$store.state.robots.parts || {arms:[],heads:[],torsos:[],bases:[]};
		}
	}
}