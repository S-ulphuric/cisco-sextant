
import './App.css';
import Banner from './Banner';
import Card from './Card';
import Fetch from './Fetch';
import Client from './Client';

function App() {
  return (
    <div className="App">
    
        <Banner />
        
        <div className="App-components">
          <Card title='IPv4 Address'>
            <Fetch url='https://api.ipify.org?format=json' />
          </Card>
          
          <Card title='IPv6 Address'>
            <Fetch url='https://api64.ipify.org?format=json'/>
          </Card>
          
          <Card title='Latency'>
            <Client />
          </Card>
        </div>
    </div>
  );
}

export default App;
