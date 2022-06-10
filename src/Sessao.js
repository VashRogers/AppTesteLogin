import * as SecureStore from 'expo-secure-store'

const Sessao = (function () {
    return{
        logado:false,
        user: null,
        token:'',

        async saveUser(){
            await SecureStore.setItemAsync('user', JSON.stringify(this.user))
        },
        async saveToken(){
            await SecureStore.setItemAsync('token', this.token)
        },
        login(token){
            this.token = token;
        },
        async logoff(){
            this.logado = false;
            this.user = null;
            this.token = '';

            this.clearStore();
        },
        async clearStore() {
            SecureStore.deleteItemAsync('user');
            SecureStore.deleteItemAsync('token')
        },
    };
}) ();

export default Sessao