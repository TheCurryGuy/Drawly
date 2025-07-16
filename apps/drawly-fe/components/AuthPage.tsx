"use client"
import { useState } from "react"
import axios from "axios"

export function AuthPage({isSignin}:{isSignin :boolean}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const SigninCall = async ()=>{
        const response = await axios.post("", {
            username : username,
            password: password
        })
        if(response.data.token){
            localStorage.setItem("token", response.data.token)
        }
        setUsername("")
        setPassword("") 
        return

    }
    const SignupCall = async()=>{
        const response = await axios.post("", {
            username : username,
            name: name,
            password: password
        })
        if(response.data.token){
            localStorage.setItem("token", response.data.token)
        }
        setUsername("")
        setPassword("") 
        setName("")
        return
    }

    return <div className="h-screen w-screen items-center justify-center flex">
        <div className="px-6 py-8 m-2 bg-slate-500 rounded-xl flex flex-col items-center justify-center">
            {isSignin ? <div> Signin Form </div> : <div> Signup Form </div>}
            <div className="py-2 px-4 flex flex-col gap-2">
                {!isSignin && <input value={name} className=" bg-gray-500 border border-black p-2" type="text" onChange={(e)=>{
                    setName(e.target.value)
                }} placeholder="Name"></input>}
                <input value = {username} onChange={(e)=>{
                    setUsername(e.target.value)
                }} className="p-2 bg-gray-500 border border-black" type="text" placeholder="Email" />
                <input value= {password} onChange={(e)=>{
                    setPassword(e.target.value)
                }} className="p-2 bg-gray-500 border border-black" type="password" placeholder="Password"/>
            </div>
            <button className= "px-3 py-1 rounded-xl bg-black" onClick={()=>isSignin? SigninCall():SignupCall()}>Send</button>
        </div>
        
    </div>

}