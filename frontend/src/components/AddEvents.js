import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
const AddEvents = () => {

    let history = useHistory();
    
    // const {token} = useSelector(state => state.load_user)
   
    const [photo, setPhoto] = useState(null)
    const [titre, setTitre] = useState(null)
    const [description, setDescription] = useState(null)
    const [type, setType] = useState(null)
    const [date, setDate] = useState(null)


    const addNewEvents = async () => {
        let formField = new FormData()
        formField.append('titre',titre)
        formField.append('description',description)
        formField.append('type',type)
        formField.append('date',date)

        if(photo !== null) {
          formField.append('photo', photo)
        }

        await axios({
           
          method: 'post',
          url:'http://localhost:7000/events/ajouterevents',
          data: formField,
          headers: {
            "Content-Type":"application/json",
            'Authorization': `JWT ${localStorage.getItem('access')}`, 
          }
        })
        
        .then(response=>{
          console.log(response.data);
          history.push('/')
        })
       
    }
   
    return (
        <div className="container">
            <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Ajouter un evenement</h2>
        

        <div className="form-group">
        <label>Image</label>
             <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])}/>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="ecrivez le titre"
              name="titre"
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="decrivez l'evenement"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
         
          <div className="form-group">
          <Form.Select  className="form-control"   onChange={(e) => setType(e.target.value)} 
                                value={type}>
                      <option value="Sportif">Sportif</option>
                      <option value="Culturel">Culturel</option>
                      
                     
                    </Form.Select>
          </div>
       
          <div className="form-group">
            <input
              type="datetime-local"
              className="form-control form-control-lg"
              placeholder="Enter la date de l'evenement"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" onClick={addNewEvents}>Ajouter</button>
       
      </div>
    </div>
        </div>
    );
};

export default AddEvents;
