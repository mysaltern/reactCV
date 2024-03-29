import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState  } from 'react';
const ChatMessage = ({ message }) => {
  return (
    <>
      <div className='col'>
        <div className={message.user === 'bot' ? "myChat" : "yourChat"}>
          <label > {message.message}</label>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}



const Skills = () => {
  const [textboxMessage, setTextboxMessage] = useState('');
  const [chatlog, setChatLog] = useState([

    {
      user: 'bot',
      message: 'hi how can I help you today?'
    }
  ]);
  const checkEnter=(event)=> {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }
  async function handleSubmit(e) {
    let chatLogNew = [...chatlog , { user:"me",message:textboxMessage}]


    setChatLog([...chatlog, { user: 'client', message: textboxMessage }]);
    setTextboxMessage("");

    const response = await fetch("localhost:3080",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        message:textboxMessage
      })
    })
  const data = await response.json();

  setChatLog([...chatLogNew, { user: 'bot', message:`${data.message}` }]);

  }
  return (
    <>

      <div className='row parentStd'>
        <div className='col-12'>
          <br />
          <div className='scrollStd' >
            {
              chatlog.map((message, index) =>
                  <ChatMessage key={index} message={message} />
              )
            }
          </div>


        </div>

        <div className='row'>
          <div className="bottomZero">
            <div className='row'>
              <div className="col-8">
                <input name='textboxMessage' value={textboxMessage} onKeyDown={(e) => checkEnter(e) } onChange={(e) => setTextboxMessage(e.target.value)} className="textboxMessage" placeholder="say somethings ...." />
              </div>
              <br/>
              <div className='row'>
              <div className="buttonSend">
                <div   onClick={handleSubmit} className='submitButton'>send</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills