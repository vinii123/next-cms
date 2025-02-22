import { GoogleLogin } from "@react-oauth/google";
import React from "react";


const LoginButton = () => {

    const onSuccess = (res) => {
        console.log(res,"onSuccess")
    }

    const onError = () => {
        console.log("onError")
    }

    return(
        <GoogleLogin  onSuccess={onSuccess} onError={onError}/>
    )
}

export default LoginButton