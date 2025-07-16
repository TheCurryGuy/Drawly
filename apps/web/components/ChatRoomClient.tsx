"use client"

import { useEffect, useState } from "react";
import { useSocket } from "../hooks/useSocket";

export function ChatRoomClient({
    messages,
    id
}:{
    messages: {message: string}[];
    id: string
}){
    const [chats, setChats] = useState(messages)
    const {socket, loading} = useSocket();
    const [current, setCurrent] = useState("")
    useEffect(()=> {
        if(socket && !loading){
            socket.send(JSON.stringify({
                type: "join_room",
                roomId: id
            }));
            socket.onmessage = (event) => {
                const parsedData = JSON.parse(event.data);
                if(parsedData.type === "chat"){
                    setChats(c => [...c, parsedData.message] )
                }
            }
        }
        
    }, [socket, loading, id])

    return <>
    {chats.map(e => <div>{e.message}</div>)}

    <input value = {current} onChange={(e)=>setCurrent(e.target.value)} type="text" placeholder="Type Message"/>
    <button onClick={()=>{
        socket?.send(JSON.stringify({
            type: "chat",
            roomId: id,
            message: current
        }))

        setCurrent("");
    }}>send message</button>
    
    </>
}