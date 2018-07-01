export default {//anything in this object will be included any component that uses it
	beforeCreate(){
		console.log("hook-mixin, beforeCreate() this", this );
	}
	,created(){
		console.log("hook-mixin, created() this:", this );
	}
	,beforeMount(){
		console.log("hook-mixin, beforeMount() this:", this );
	}
	,mounted(){
		console.log("hook-mixin, mounted() this:", this );
	}
};