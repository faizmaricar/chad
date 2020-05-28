import React, { useCallback, FunctionComponent, useEffect, useState } from 'react';
import { createPubNubListener } from "pubnub-redux";
import { createAppStore } from "../store";
import PubNub from 'pubnub';
import { createTypingIndicatorsListener } from "../features/typingIndicator/typingIndicatorModel";
import ReactDOM from 'react-dom';
import { PubNubProvider, usePubNub } from 'pubnub-react';

// import LEChatRoom from '../components/LEChatRoom';
// import LEEventViewer from '../components/LEEventViewer';
// import LEMessage from '../components/LEMessage';
// import LELogin from '../components/LELogin';

interface ChatInitProps {
    skin: string,
    store: any,
    client: any,
   }

const ChatDemo: React.SFC<ChatInitProps> = (props) => {
//const ChatDemo:FunctionComponent<{ props?: ChatInitProps }> = ({ props = {} }) => {
const channels = ['awesomeChannel'];
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');
useEffect(() => console.log(messages), [messages]);
useEffect(() => console.log(props), [props]);
const [time, setTime] = useState<number | null>(null);
const [error, setError] = useState<string | null>(null);

//useEffect(() => console.log(props.store.dispatch), [props.store.dispatch]);
const leaveApplication = () => {
    // This is required to show the current user leave immediately rather than
    // wating for the timeout period
    //useEffect(() => console.log(props), [props]);

    //props.store.unsubscribeAll();
  };

//   useEffect(() => {

//     // Create an scoped async function in the hook
//     async function adaptFunction() {
//         await  props.client
//         .time()
//         .then(({ timetoken }) => {
//           setTime(timetoken);
//         })
//         .catch((error?: string) => {
//           setError(error.message);
//         });
//       }    // Execute the created function directly
      
//      // adaptFunction();


//   }, []);
useEffect(() => {
    // Start listening for messages and events from PubNub
    props.client.addListener(createPubNubListener(props.store.dispatch));
    props.client.addListener(createTypingIndicatorsListener(props.store.dispatch));
    return  leaveApplication();
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => { leaveApplication() });
  }, []);


  useEffect(() => {

    // props.client.getMessage('channel1', (msg) => {
    //     console.log(msg);
    // });
    
    props.client.addListener({
      message: (messages) => {
         
        setMessages([messages]);
      },
    });
 
    props.client.subscribe({ channels });
  }, [messages]);
 
//   const sendMessage = useCallback(

//     async message => {
//       await props.client.publish({
//         channel: channels[0],
//         message,
//       });
 
//       setInput('');
//     }
//     ,

//     [props.client, setInput]
//   );

    //return (<div>Test</div>);

    return (
      <div className="App">
        <header className="App-header">
          <div
            style={{
              width: '500px',
              height: '301px',
              border: '1px solid black',
            }}
          >
            <div style={{ backgroundColor: 'grey' }}>React Chat Example {time}</div>
            <div
              style={{
                backgroundColor: 'white',
                height: '260px',
                overflow: 'scroll',
              }}
            >
              {messages.map((message, messageIndex) => {
                return (
                  <div
                    key={`message-${messageIndex}`}
                    style={{
                      display: 'inline-block',
                      float: 'left',
                      backgroundColor: '#eee',
                      color: 'black',
                      borderRadius: '20px',
                      margin: '5px',
                      padding: '8px 15px',
                    }}
                  >
                    {message}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                display: 'flex',
                height: '40px',
                backgroundColor: 'lightgrey',
              }}
            >
              <input
                type="text"
                style={{
                  borderRadius: '5px',
                  flexGrow: 1,
                  fontSize: '18px',
                }}
                placeholder="Type your message"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <button
                style={{
                  backgroundColor: 'blue',
                  color: 'white',
                  borderRadius: '5px',
                  fontSize: '16px',
                }}
                onClick={e => {
                  e.preventDefault();
                  //sendMessage(input);
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </header>
      </div>
    );
    
}



export { ChatDemo };
