import React, {useEffect, useState} from "react";
import Images from "./Images";
import "./character"
import './App.css';

const App = () => {
  const [avatarImage,setAvatarImage] = useState();
  const [section,setSection] = useState();
  const [sourceName,setSourceName] = useState();

  useEffect(()=>{
    let src = import(".public/character/");
    if (avatarImage){
      src = src + `${parent.name}/` + sourceName;
    }
    const handleImage = async () =>{

    }
  },[avatarImage]);
  const handleRandom = (e)=>{
    e.preventDefault();
    setAvatarImage();
  }

  return (
  <>
    <div className="title">CHARACTER</div>
    <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
    <div className="avatar-group gap-30">
      <div>
        <div className="avatar-wrapper">
          <div className="avatar">{avatarImage}</div>
          <div className="text-center">
            <button className="button" onClick={handleRandom}>Randomize!</button>
          </div>
        </div>
      </div>
      <div>
        <div className="list-section">
          <h2>{"./character/${character.name}"}</h2>
          <div className="list">
            <div className="clickable-square">
              <img
                  src ={`${<Images/>[1]}`}
                   alt height="60"
                   className="img-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;
