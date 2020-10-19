import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showForm: '',
        renderComponent: 'Home'
    },
    mutations: {
        renderForm(state, payload) {
            state.showForm = payload;
        },
        showBarbeiro(state, payload) {
            state.renderComponent = payload;
        }
    }
})