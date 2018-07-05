import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cart: []//create initial object so that Vue will know to set up watchers
		,parts: null
	}
	,mutations: {//all "direct" changes must/should be through mutation methods
		addBotToCart( state, bot ){
			state.cart.push( bot );
		}
		,updateParts( state, parts ){
			state.parts = parts;
		}
	}
	,getters: {
		cartSaleItems(state){
			return state.cart.filter( item => item.head.onSale );
		}
	}
	,actions: {
		getParts({commit}){ //destructure from context input which contains: state, getters, commit, dispatch
			// axios.get("http://localhost:8081/api/parts");
			// ^^^^ this will cause usual CORS problem, so we create a Vue proxy to treat as relative
			axios.get("/api/parts")
				.then( parts => commit("updateParts", parts.data ) )
				.catch( console.error );
		}
	}
});