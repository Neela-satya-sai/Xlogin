import React, { use, useState } from 'react'

function Login() {

  const[formdata, setFormdata]= useState({user:"", password:""});
   const [islogged, setIsLogged]  = useState(false)
  const [status, setStatus] = useState("");

function handleForm(e){
  e.preventDefault();
   let user = e.target.elements.user.value;
   let password = e.target.elements.password.value;
 //  setFormdata({...formdata, });
  if(user==="user" && password==="password"){
    setIsLogged(true);
    setStatus("Welcome, user!");
  }
  else{
     setStatus("Invalid username or password");
     setIsLogged(false);
  }
   

}

function handleChange(e){
  
  let {name, value} = e.target;
  
  setFormdata((prev)=>{
      return {...prev, [name]:value }
  });
    
}


  return (
    <>
      <h1>Login Page</h1>
      <p>{status}</p>
      {!islogged &&  <form onSubmit={handleForm} > 
         <label>User:</label>
         <input type="text" name='user' onChange={handleChange} value={formdata.user} required/>

         <label>Password:</label>
         <input type="password" name='password' onChange={handleChange}  value={formdata.password} required/>

         <button type="submit" >Submit</button>


     </form>}
     


    </>
  )
}

export default Login