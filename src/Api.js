const BASE_API = 'http://192.168.100.35:3000'

export default {
    signin: async(email, password) => {
        try{
            const request = await fetch(`${BASE_API}/signin`, {
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            })
            const response = await request.json()
            return response;
            }
        catch(e){
            console.log(e, 'erro de requisição')
        }
        
    }
}