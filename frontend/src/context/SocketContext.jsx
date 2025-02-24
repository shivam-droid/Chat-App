import { createContext, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { useState,useEffect } from "react";
import io from 'socket.io-client'


export const SocketContext = createContext();

export const useSocketContext = ()=>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children})=>{

    const [onlineUsers,setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();
    const [socket,setSocket] = useState();

    useEffect(()=>{
        if(authUser)
        {
            const socket = io("https://chat-app-o0b0.onrender.com",{
                query:{
                    userId: authUser._id,
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers",(user)=>{
                setOnlineUsers(user);
            })

            return () => socket.close();
        }
        else{
            if(socket)
            {
                socket.close();
                setSocket(null);
            }
        }
    },[authUser])

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
    )
}