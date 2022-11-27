import Vue from "vue";
import Vuex from "vuex";
import converter from "./modules/converter";

// load vuex
Vue.use(Vuex);

// create a store
export default new Vuex.Store({
    modules: {
        converter
    }
});