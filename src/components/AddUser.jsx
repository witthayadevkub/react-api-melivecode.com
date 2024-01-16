import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

import axios from 'axios'


const AddUser = ({fetcthData}) => {
  const naviger = useNavigate()
  const [create, setCreate] = useState({
    fname: '',
    lname: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    avatar: '',
  } )

  const  handleChange = (e) => {
    setCreate({...create, [e.target.name] : e.target.value})
  }

  const createUser = async () => {
     try{
      if(!!create && create.password === create.confirmPassword) {
           const add = await axios.post('https://www.melivecode.com/api/users/create',{
              'fname': create.fname,
              'lname': create.lname,
              'username': create.username,
              'email': create.email,
              'password': create.password,
              'avatar': create.avatar
        })
       fetcthData()
       naviger('/')
      }else{
          alert('not success')
        } 
        alert("sucessfully created")
       
     }catch(err){
        console.log(err)
     }
  }


  return (
    <div className=''>
        <Link to='/'><h5>go to Home</h5></Link>


        <div className="input">
          
          <p>fname</p>
          <input name= "fname" type="text" onChange={handleChange} />

          <p>lname</p>
          <input name= "lname" type="text" onChange={handleChange} />

          <p>avatar</p>
          <input name= "avatar" type="text" onChange={handleChange} />

          <p>username</p>
          <input name= "username" type="text" onChange={handleChange} />
          
          <p>email</p>
          <input name= "email" type="email" onChange={handleChange} />
          
          <p>password</p>
          <input name= "password" type="password" onChange={handleChange} />
          
          {!!create.password && create.password.length >= 8 ? <div>
            <p>confirmpassword</p>
            <input name= "confirmPassword" type="password" onChange={handleChange} />
          </div>: <div>
            <p>รหัสผ่านต้องมีอย่างน้อย 8 ตัว</p>
          </div>}
          {create.confirmPassword.length != 0 && create.confirmPassword === create.password 
          ? <button onClick={createUser}>create</button> : <></>}
        

          

        </div>
    </div>
    
  )
}

export default AddUser