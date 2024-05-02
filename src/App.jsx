import { useState } from "react";

const App=()=>{
  const [username,updateUsername]=useState("");
  const [gender,setGender]=useState("male");
  const [city,setCity]=useState("patna");
  const [description,setText]=useState("hello");

    
  const submitHandler=(event)=>{
    event.preventDefault();
    

    // console.log(event.target.username.value)
    // console.log(event.target.useremail.value)


    console.log(username)
  }



  return(
    <div>
       <h1> React form</h1>
       <form onSubmit={submitHandler}>
       <input onChange={(e)=>{updateUsername(e.target.value)}} name="username" value={username} type="text" placeholder="enter username" />
       <br />
        <br />
        <input type="radio" onChange={(e)=>{setGender(e.target.value)}} name="gender"  value={male} checked={gender==="male"?true:false} /> Male
        <input type="radio"  onChange={(e)=>{setGender(e.target.value)}} name="gender"  value={male} checked={gender==="female"?true:false} /> female
        <br />
        <select 

        defaultValue={city}
        onChange={(e)=>setCity(e.target.value)}
        
         >
            <option value="delhi">Delhi</option>
            <option value="bhopal">Bhopal</option>
            <option value="patna">Patna</option>
            <option value="kolkata">Kolkata</option>
            <option value="panjab">Panjab</option>
        </select>
        <br />
        <textarea placeholder="Enter text here" onChange={(e)=>setText(e.target.value)} value={description} ></textarea>

        <br />
        <input type="checkbox" checked={accept?true:false}  />
     
       <br />
       <button>submit</button>
       <button>helllo</button>
       
       </form>
    </div>
  )


}

export default App;
