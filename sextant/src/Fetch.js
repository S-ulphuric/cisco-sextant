import {useState, useEffect} from 'react';

function Fetch({url}){
    
    const [ip, setIp] = useState(0);
    const [error, setError] = useState(false);
    
    
    useEffect(() => {
        async function fetchIp(url) {
            try {
                const response = await fetch(url);
                const {ip} = await response.json();
                setIp(ip);
            } catch (err) {
                console.log('-/-/-/- error -/-/-/-', err);
                setError(true);
            } finally {
                console.log('Nothing working');
            }
        }
        fetchIp(url);
    }, []);
    
    if (error){
        return <span>Oups there is a problem</span>
    }
    
    return (
        <div>{ip}</div>
    );
}

export default Fetch;