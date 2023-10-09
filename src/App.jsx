import playerData from "./playerData";
import { useState } from "react";

function BaseballCard(props) {
  const [showPicture, getShowPic] = useState(true)

  const toggleCard = () => {
    getShowPic(!showPicture)
  }

  if (showPicture) {
  return (
    <div className="card" onClick = {toggleCard}> 
      <h2> {props.name} </h2>
      <img src = {props.imgUrl} alt = "base ball player"/>
    </div>
  );
  } else {
  const statsDisplay = Object.entries(props.stats).map(([statKey, StatValue]) =>(
    <p>{statKey}: {StatValue} </p>
  ))

  return (
    <div className="card" onClick = {toggleCard}>
      <h2>{props.name}</h2>
      <p>{props.team}</p>
      <p>{props.position}</p>
      {statsDisplay}
    </div>
  )
}}

function App() {
  const cards = playerData.map((player) =>{
   return  <BaseballCard 
   name = { player.name}
   team = {player.team}
   position = {player.position}
   stats = {player.stats}
   imgUrl = {player.imgUrl}
   cardId = {player.cardId}
      />
    })

  return <>{cards}</>;
  
}

export default App;
