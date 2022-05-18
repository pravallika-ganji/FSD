import { useState } from "react";
import "./App.css";

export default function App() {
  const [score,setScore] =useState(0)
  const [wickets,setWickets]=useState(0)
  const [balls,setBalls]=useState(0.0)
  const [overs,setOvers]=useState(-1)
const changeScore=(value)=>
{
  setScore(score+value);
  changeBalls();
}
const changeBalls=()=>
{
  if((balls+1)%6==0)
  setOvers(overs+1)
  setBalls((balls+1)%6)
}
  const handleClick=(e)=>
  {
    const id=e.target.id;
    switch(id)
    {
      case '2':changeScore(2)
              break;
      case '3':changeScore(3)
            break;
      case '4':changeScore(4)
            break;
      case '5':changeScore(5)
            break;
      case '6':changeScore(6)
            break;
      case '1':changeScore(1)
            break;
      case 'noball':
          changeScore(1)
      case'wide':
          changeScore(1)
          break;
      case 'wicket':
        setWickets(wickets+1)
        break;
      case'Wide':
        changeScore(1);
        break;
      case '0':
          changeBalls()
          break;
      default:break;

    }

  }

  return (
    <div className="App">
      <h1>Score board :Cricket</h1>
      <h2>Score:{score}/{wickets}</h2>
      <h2>Overs:{overs}.{balls}</h2>
      <div>
        <button id='0' onClick={handleClick}>0</button>
        <button id='1' onClick={handleClick}>1</button>
        <button id='2' onClick={handleClick}>2</button>
        <button id='3' onClick={handleClick}>3</button>
        <button id='4' onClick={handleClick}>4</button>
        <button id='5' onClick={handleClick}>5</button>
        <button id='6' onClick={handleClick}>6</button>
        <button id='wide' onClick={handleClick}>wide</button>
        <button id='noball' onClick={handleClick}>noball</button>
        <button id='wicket' onClick={handleClick}>wicket</button>
      </div>

    </div>
  );
}