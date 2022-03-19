const axios = require('axios');
import router from '../routes';


//function test() {

    //let fun1 = (aNumber) => {
        //console.log('function one', aNumber);
   // }

    //let fun2 = (kk) => {
       // console.log('function two', kk());
    //}

   // fun2(function (){});

    //let fun3 = (callback) => {
    //    console.log('kurkur ko kando');
     //   callback(10);
       // console.log('biraloko ko turi');
    //}

   // const kando = function (anotherNumber) { console.log('a number: ', anotherNumber); };
   // fun3(kando);

   // fun3(function (anotherNumber) { console.log('a number: ', anotherNumber); });
    // kukur ko kando
    // a number: 10
    // biralako ko turi


export default {
    state: {
        errorMessage: ''
    },
    mutations: {
        UPDATE_ERROR_MESSAGE: function (state, message) {
            state.errorMessage = message;
        }
    },
    actions: {
        async registerAction({commit}, payload) {

            const data = JSON.stringify(payload);

            const config = {
                method: 'post',
                url: 'http://localhost:4000/api/registration',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            try {
                const response = await axios(config);
                console.log(response)
                await router.push('registerForm');
            } catch (error) {
                commit('UPDATE_ERROR_MESSAGE', error.response.data.message);
            }
        },
        clearErrorMessage({commit}) {
            commit('UPDATE_ERROR_MESSAGE', "");
        }
    },
    getters: {
        errorMessage: function (state) {
            return state.errorMessage;
        }
    }
};
