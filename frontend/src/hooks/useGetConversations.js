import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';

const useGetConversations = () => {
  
    const [loading, setLoading] = React.useState(false);
    const [conversations, setConversations] = React.useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users"); // corrected 'fecth' to 'fetch'
                const data = await res.json();
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations;
