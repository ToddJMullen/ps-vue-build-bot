import axios from "axios";

export default {
	namespaced: true
	,state: {
		cart: []//create initial object so that Vue will know to set up watchers
		,parts: null
		,foo: "robot-foo"
	}
	,mutations: {//all "direct" changes must/should be through mutation methods
		//mutations are accessed via $store.commit("methodName", params )
		addBotToCart( state, bot ){
			state.cart.push( bot );
		}
		,updateParts( state, parts ){
			console.log("updateParts() setting parts:", parts );
			state.parts = parts;
		}
	}
	,getters: {
		cartSaleItems(state){
			return state.cart.filter( item => item.head.onSale );
		}
		,foo(state){
			return `robot-getter/${state.foo}`;
		}
	}
	,actions: {//actions are accessed via $store.dispatch("methodName", params )
		getParts({commit}){ //destructure from context input which contains: state, getters, commit, dispatch
			// axios.get("http://localhost:8081/api/parts");
			// ^^^^ this will cause usual CORS problem, so we create a Vue proxy to treat as relative
			console.log("getParts() calling service...")
			axios.get("/api/parts")
				.then( parts => commit("updateParts", parts.data ) )
				.catch( console.error );
		}
		,addBotToCart({commit, state}, bot ){
			const cart = [...state.cart, bot ];
			return axios.post("/api/cart", cart )//add on server
						.then( () => commit("addBotToCart", bot ) )//when done, add locally too
						.catch( console.error );
		}
	}

}//export