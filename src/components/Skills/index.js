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

  async function handleSubmit(e) {
    setChatLog([...chatlog, { user: 'client', message: textboxMessage }]);

    setTextboxMessage('');
  }
  return (
    <>

      <div className='row'>
        <div className='col-12'>
          <br />
          {
            chatlog.map((message, index) =>
              <ChatMessage key={index} message={message} />
            )
          }

        </div>

        <div className='row'>
          <div className="bottomZero">
            <div className='row'>
              <div className="col row-no-maring row-no-padding">
                <input name='textboxMessage' value={textboxMessage} onChange={(e) => setTextboxMessage(e.target.value)} className="textboxMessage" placeholder="say somethings ...." />
              </div>
              <div className="col-1 row-no-maring row-no-padding">
                <div onClick={handleSubmit} className='submitButton'>send</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills