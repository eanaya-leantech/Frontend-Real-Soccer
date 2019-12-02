export const signIn = (payload)=>{
    return {
        type: 'SIGN_IN_USER',
        payload
    }
}

export const setSuccess= userData =>{
    return{
        type: 'SIGN_IN_SUCCESS',
        userData
    }
}

export const setError= error =>{
    return{
        type: 'SIGN_IN_ERROR',
        error
    }
}