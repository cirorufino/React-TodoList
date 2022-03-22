import React, {useEffect, useState} from "react";
import "./App.css";
import Button from "./components/button/button.js";
import Input from "./components/input/input.js";
import {MongoService} from './components/services/fetch';

export default function App() {
  const [state, setState] = useState(''); 
  const [data, setData] = useState([]); //response getData(), in [] è dove verranno archiviati i nostri todos 

  const loadData = async () =>{
    let tasks = await MongoService.getData('data');
    setData(tasks);
    console.log(tasks);
  }

  useEffect(() => {
  loadData();
  }, []); //Hook, senza l'uso delle quadre, andrà in un loop infinito che crasha l'applicativo

  const handleInputChange = async (e) =>{
    setState(e.target.value);
  }

  const addData = async (e) => {
    await MongoService.addData(state);
    loadData();
    setState('');
  }

  const deleteData = async (id) =>{
    await MongoService.deleteData(id);
    loadData();
  }

  return (
    <div className="container">
      <div className="input-container">
        <div className='data'>
          <Input
            placeholder="Task..."
            name="task"
            type="text"
            value={state}
            onChange={handleInputChange}
          ></Input>
          <Button
            theme="red"
            onClick={addData}
          >
            ADD
          </Button>
        </div>
      </div>
      <div className="task-container">
        <h3 className="title">Tasks:</h3>
        <div className="list">
          {data.map((data) => (
            <div key={data._id} className="task">
            <h3>{data.todo}</h3>
            <p onClick = { ()=> deleteData(data._id)}>x</p>
          </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}
