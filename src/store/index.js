import Vue from "vue";
import Vuex from "vuex";

import moduleRobots from "./modules/robots";
import moduleUsers	from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		robots: moduleRobots
		,users: moduleUsers
	}
});