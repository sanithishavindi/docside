// // import React from 'react'
// import React, { useState } from "react";

// import "../App.css";

// import {firestore} from "../firebase";
// import { addDoc, collection } from 'firebase/firestore';



// const Request = () => {
//   const [name, setName] = useState("");
//   const [special, setSpecial] = useState("");
//   const [level, setLevel] = useState("");
//   const [loader, setLoader] = useState(false);

//   const ref= collection(firestore,"Msg");
  
//   // const firebase = new Firebase();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);
//     console.log(level);
    
//  await addDoc(ref,
//   {
//         name: name,
//         special: special,
//         level: level,
//       })
//       .then(() => {
//         setLoader(false);
//         alert("Your message has been submitted👍");
//       })
//       .catch((error) => {
//         alert(error.message);
//         setLoader(false);
//       });

//     setName("");
//     setSpecial("");
//     setLevel("");
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <h1>Contact Us </h1>

//       <label> Patient Name</label>
//       <input
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <label>Specialization</label>
//       <input
//         placeholder="special"
//         value={special}
//         onChange={(e) => setSpecial(e.target.value)}
//       />

//       <label>Triage Level</label>
//       <select className=""
//         placeholder="level"
//         value={level}
//         onChange={(e) => setLevel(e.target.value)}
//         style={{ height: '60px' }}
        
//       >
//         <option value={1}>1</option>
//         <option value={2}>2</option>
//         <option value="three">3</option>
//         <option value="four">4</option>
//         <option value="five">5</option>

//       </select>

//       <button
//         type="submit"
//         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
//       >
//         Submit
//       </button>
//     </form>
//   )
// }

// export default Request
import React from 'react'
import { Box, Grid, Paper, Typography, Avatar } from '@mui/material';
import doc from "../assests/images/doc.png";

function Request ()  {
  const doctors = [
    { name: 'Dr. Prasanna', description: 'Specialist in Neurology.' },
    { name: 'Dr. Bandara', description: 'Expert in Cardiology.' },
    { name: 'Dr. Kirihena', description: 'Specialist in ENT.' },
    { name: 'Dr. Saman Kumara', description: 'prediactrision.' },
    { name: 'Dr. Nishendra', description: 'Specialist in gyn and obs.' },
    { name: 'Dr. Primal Pieries', description: 'Othopetic Specialist.' },
  ];
  return (
    <Box sx={{ mt: 8, px: 8 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Doctor Details
      </Typography>

      <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 2,
                borderRadius: 2,
                textAlign: 'center',
              }}
            >
              <Avatar
                alt={doctor.name}
                src={doc}
                sx={{ width: 80, height: 80, mb: 2 }}
              />
              <Typography variant="h6" component="p" sx={{ fontWeight: '600' }}>
                {doctor.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {doctor.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Request