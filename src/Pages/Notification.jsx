import React, {useRef} from 'react'
import {firestore} from "../firebase";
import { addDoc, collection } from 'firebase/firestore';
import "../App.css";

export default function Notification ()  {

    const messageRef = useRef(null);
    const specialRef = useRef(null);
    const levelRef = useRef(null);
    const ref= collection(firestore,"Request");

    const handleSave = async (e) =>{
        e.preventDefault();
        // console.log(messageRef.current.value);
        

        let data ={
            message: messageRef.current.value,
            specialization: specialRef.current.value,
            level: levelRef.current.value,
         };
     
         try {
            await addDoc(ref, data);
            alert("Data saved successfully!");
            messageRef.current.value = "";
            specialRef.current.value = "option"; // reset to the default option
            levelRef.current.value = "1";
          } catch (e) {
            console.error("Error adding document: ", e);
          }

    };

    

  return (
    <div>
        <form className="form" onSubmit={handleSave}>
        <h1>Request </h1>
            <label>Enter Patient Name</label>
            <input type="text" ref={messageRef} />

            <label>Specialization</label>
            <select ref={specialRef} style={{ height: '60px' }}>
          <option value="option">--Select an Option--</option>
          <option value="Dengue Fever">Dengue Fever</option>
          <option value="Cardiac arrest">Cardiac arrest</option>
          <option value="Chest pain">Chest pain</option>
          <option value="Allergic reactions">Allergic reactions</option>
          <option value="Earache/toothache">Earache/toothache</option>
          <option value="Short of Breathing ">Short of breathing </option>
          <option value="Poisoning">Poisoning</option>
          <option value="Traumatic injury">Traumatic injury</option>
          <option value="Dislocation">Dislocation</option>
          <option value="Fracture">Fracture</option>
          <option value="Snake Bite">Snake Bite</option>
          <option value="Burns">Burns</option>
          <option value="Stroke">Stroke</option>
          <option value="Head Injury">Head Injury</option>
        </select>

        <label>Level</label>
        <select ref={levelRef} style={{ height: '60px' }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}

