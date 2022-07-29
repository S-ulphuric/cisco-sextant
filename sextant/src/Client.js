import {useEffect, useState} from 'react';
import {w3cwebsocket} from 'websocket';

const client = new w3cwebsocket("ws://localhost:55455");

function Client(){
    
    const [latency, setLatency] = useState(0);
    
    useEffect(() => {
        client.onopen = () => {
            console.log("Client connected");
        };
        
        client.onmessage = (message) => {
            console.log(message.data); 
            const currentTime = Date.getTime();
            setLatency(currentTime - message.data);
        };
        
    },[]);
    
    return (
        <div>
            {latency}
        </div>
    );
}

export default Client; 