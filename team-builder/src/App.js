import React, { useState } from 'react';
import Forms from "./Members/Forms";
import Member from "./Members/Member";
import './App.css';

const App = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Alan Mir",
      email: "alanpaulphotos@gmail.com",
      role: "Full Stack Web Developer in Training"
    }
  ]);

  const addNewMem = (formData) => {
    const newMem = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role
    };
    setMembers([...members, newMem])
  };

  return (
    <div>
      <h1 className="header" >Members</h1>
      <Forms addNewMem={addNewMem}/>
      <Member members={members}/>
    </div>
  )
};

export default App;
