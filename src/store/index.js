import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		cart: []//create initial object so that Vue will know to set up watchers
	}
	,mutations: {//all "direct" changes must/should be through mutation methods
		addBotToCart( state, bot ){
			state.cart.push( bot );
		}
	}
	,getters: {
		cartSaleItems(state){
			return state.cart.filter( item => item.head.onSale );
		}
	}
});