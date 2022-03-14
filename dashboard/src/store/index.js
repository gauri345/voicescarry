import {createStore} from 'vuex'

export default createStore({
    state: {
        emailAddress: '',
        password: ''
    },
    mutations: {
    },
    actions: {
        loginAction(state, payload){
            console.log(state);
            console.log(payload);

            // use the email and password and make http request ot the server.
        }
    },
    getters: {
        emailAddress: function (state) {
            return state.emailAddress;
        },
        password: function (state) {
            return state.password;
        }
    }
})
