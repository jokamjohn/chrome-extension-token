/*global chrome*/

import './App.css';
import {useEffect} from "react";

const sendTokenToChromeExtension = ({ extensionId, jwt}) => {
  chrome.runtime.sendMessage(extensionId, { jwt }, response => {
    if (!response.success) {
      console.log('error sending message', response);
      return response;
    }
    console.log('Sucesss ::: ', response.message)
  });
}

function App() {

  useEffect(() => {
    sendTokenToChromeExtension({ extensionId: 'joeibnoddmkbggaacjmfnefdmpdgpkmb', jwt: 'xxxxx.yyyyy.zzzzz'})
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chrome extension Token authentication</h1>
        <p>The token to be sent is <code>xxxxx.yyyyy.zzzzz</code></p>
      </header>
    </div>
  );
}

export default App;
