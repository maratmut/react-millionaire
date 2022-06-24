import './App.css';
import { useEffect, useState, useMemo } from 'react';
import Trivia from './components/Trivia';
import {data} from './data/data'
import Timer from './components/Timer';
import Start from './components/Start';
 



function App() {
  const moneyPyramid = useMemo(() => 
  [
    {id: 1, amount: '100 ₽'},
    {id: 2, amount: '200 ₽'},
    {id: 3, amount: '300 ₽'},
    {id: 4, amount: '500 ₽'},
    {id: 5, amount: '1000 ₽'},
    {id: 6, amount: '2000 ₽'},
    {id: 7, amount: '4000 ₽'},
    {id: 8, amount: '8000 ₽'},
    {id: 9, amount: '16000 ₽'},
    {id: 10, amount: '32000 ₽'},
    {id: 11, amount: '64000 ₽'},
    {id: 12, amount: '125000 ₽'},
    {id: 13, amount: '250000 ₽'},
    {id: 14, amount: '500000 ₽'},
    {id: 15, amount: '1000000 ₽'},
  ].reverse(),
 []
 )

  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('0 ₽')

  useEffect(() => {
    questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="App">
      {userName ? (
        <>
        <div className="main">
        {stop ? <h1 className='endText'>Вы заработали: {earned} </h1> : (
          <>
          <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber} />
          </div>
        </div>
        <div className="bottom">
          <Trivia 
            data={data} 
            setStop={setStop}
            questionNumber={questionNumber} 
            setQuestionNumber={setQuestionNumber} 
          />
        </div>
        </>
        )}
        
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map(item => (
            <li className={questionNumber === item.id ? 'moneyListItem active' : 'moneyListItem'}>
              <span className='moneyListItemNumber'>{item.id}</span>
              <span className='moneyListItemAmount'>{item.amount}</span>
          </li>
          ))}
          
        </ul>
      </div>
        </>
      ) : ( 
        <Start setUserName={setUserName} />
      
      )}
      
      
    </div>
  );
}

export default App;
