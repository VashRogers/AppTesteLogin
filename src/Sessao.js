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
            await SecureStore.setItemAsync('token', JSON.stringify(this.token))
        },
        async login(token, user){
            this.token = token;
            this.user = user
            this.logado = true;
            
            this.saveUser()
            this.saveToken()
            console.log('-----SecureStore tem algo?----')
            console.log(await SecureStore.getItemAsync('user'))
            console.log(await SecureStore.getItemAsync('token'))
        },
        
        async logoff(){
            this.logado = false;
            this.user = null;
            this.token = '';

            this.clearStore();
            console.log('-----SecureStore ta mesmo vazia?----')
            console.log(await SecureStore.getItemAsync('user'))
            console.log(await SecureStore.getItemAsync('token'))
        },
        async clearStore() {
            SecureStore.deleteItemAsync('user');
            SecureStore.deleteItemAsync('token');
        },
    };
}) ();

export default Sessao