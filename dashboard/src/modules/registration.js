
export default {
    state: {
    },
    mutations: {

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

            console.log(config)
        },

    },
    getters: {}
};
