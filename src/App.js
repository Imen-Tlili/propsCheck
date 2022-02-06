import React from "react";
import './App.css';
import ProfileComponent from "./profile/ProfileComponent";

function App() {

var fullName= {firstName:'Imen ', lastName:'Tlili'}
const bio='DM me'
let profession= 'Full Stack Developer'

const handelName=(name)=>{
alert(`Hello!I'am ${name}`)
}




return (
    
    <div>

      <ProfileComponent fullName={fullName} bio={bio} profession={profession} handelName={handelName}>
       
       <img src='./photoProfil.jpg' alt="myPhoto" width='200' borderRaduis='50%'/>
        
      </ProfileComponent>
       
    </div>
  );
}

export default App;
