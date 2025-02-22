import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import {useSocketContext} from '../context/SocketContext'
import { addMessage } from '../redux/messageSlice';
import notificationSound from '../assets/sound/notification.mp3'

const useListenMessages = () => {
  const dispatch = useDispatch();
  const {socket} = useSocketContext();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        const sound = new Audio(notificationSound);
        sound.play();
        dispatch(addMessage(newMessage));
    })
    return ()=> socket?.off("newMessage");
  },[socket,dispatch]);
}

export default useListenMessages