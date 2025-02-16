import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './conversationSlice';
import messageReducer from './messageSlice';

const appStore = configureStore({
    reducer: {
        selectedConversation: conversationReducer,
        message: messageReducer
    }
});

export default appStore;