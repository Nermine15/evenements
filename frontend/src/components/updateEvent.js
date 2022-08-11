import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';
const UpdateEvent = () => {

    let history = useHistory();
    const { id } = useParams();

    const [photo, setPhoto] = useState(null)
    const [titre, setTitre] = useState(null)
    const [description, setDescription] = useState(null)
    const [type, setType] = useState(null)
    const [date, setDate] = useState(null)


    useEffect(() => {
        loadEvents();
    }, [])


    // load students by its is and show data to forms by value

   let loadEvents = async () => {
    const result = await axios.get(`http://127.0.0.1:7000/events/Updateevents/${id}`);
    console.log(result.data.name);

    setPhoto(result.data.photo);
    setTitre(result.data.titre);
    setDescription(result.data.description);
    setType(result.data.type);
    setDate(result.data.date);
   }


// Update s single student by id

   const updateSingleEvent = async () => {
        let formField = new FormData()

        formField.append('titre',titre)
        formField.append('description',description)
        formField.append('type',type)
        formField.append('date',date)

        if(photo !== null) {
          formField.append('photo', photo)
        }

        await axios({
            method: 'PUT',
            url: `http://localhost/events/Updateevents/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push("/");
        })

    }



    

    return (
       
        <div className="container">
  <div className="w-75 mx-auto shadow p-5">
    <h2 className="text-center mb-4">modifier un evenement</h2>
    

    <div className="form-group">
      <img src={photo} height="100" width="200" alt="" srcSet="" />
    <label>modifier les photos</label>
         <input type="file" className="form-control" onChange={(e)=>setPhoto(e.target.files[0])}/>
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="tapez le titre"
          name="titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
      </div>
     
      <div className="form-group">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="description"
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
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
      <button onClick={updateSingleEvent} className="btn btn-primary btn-block">Modifier</button>
   
  </div>
</div>
 
    );
};

export default UpdateEvent;