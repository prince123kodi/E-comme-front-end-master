
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Register  = () =>{
    let [state, setState] = useState({
        username : "", email : "", password : ""
    })
    let navigate = useNavigate();

    // useEffect(()=>{
    //     let sessionData = sessionStorage.getItem('username');
    //     // console.log(sessionData);
      
    //     if(sessionData==null){
          
    //     }
    //   })

    const submitData = (e) =>{
        e.preventDefault();
         fetch("http://localhost:3001/users",{
            method : "post",
            headers : {"Content-type" : "application/json"},
            body : JSON.stringify(state)
         })
         .then(async (ress)=>{
            let record = await ress.json();
            if(record){
                toast.success("Registration is successfully");
                navigate('/login')
            } 
            else{
                toast.error("Something wrong");
            }
         })
         .catch((err)=>{
            toast.error("Something wrong");
         })
          setState({
            username : "", email : "", password : ""
        })
      }

      const  getInputData = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
  
        setState({
          ...state, [name]:value
        })
    }  
    
    return(
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="text-center mb-3">
                            <h3>Sign Up</h3>
                        </div>
                        <form method="post" onSubmit={(e)=>submitData(e)}>

                            <div className="form-floating mb-3">
                                <label htmlFor="floatingText" >Username</label>
                                <input type="text" className="form-control" id="floatingText" value={state.username} name="username" placeholder="jhondoe" onChange={(e) => getInputData(e)} />
                            </div>
                            <div className="form-floating mb-3">
                                <label htmlFor="floatingInput">Email address</label>
                                <input type="email" className="form-control" id="floatingInput" value={state.email} name="email" placeholder="name@example.com" onChange={(e) => getInputData(e)} />
                            </div>
                            <div className="form-floating mb-4">
                                <label htmlFor="floatingPassword" >Password</label>
                                <input type="password" className="form-control" id="floatingPassword" value={state.password} name="password" placeholder="Password" onChange={(e) => getInputData(e)} />
                            </div>

                            <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>


    )
}

export default Register;