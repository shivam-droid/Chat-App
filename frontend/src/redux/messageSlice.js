import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: []
    },
    reducers: {
        setMessages: (state, action) => {
            state.messages = action.payload; // Update only the messages part of the state
          },
        addMessage: (state, action) => {
            state.messages.push(action.payload); // Add a new message to the messages array
          },
        clearMessages: (state) => {
            state.messages = []; // Clear all messages from the array
          }
    }
})

export const {setMessages,addMessage,clearMessages} = messageSlice.actions;

export default messageSlice.reducer;