import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'
const Edit = () => {

  const navigate = useNavigate()

  const [getUser, setGetUser] = useState({
    fname: '',
    lname: '',
    username: '',
    avatar: '',
  })

  const { id } = useParams()

  const UserbyId = async () => {
        try{
            const userbyid = await axios.get(`https://www.melivecode.com/api/users/${id}`)
            if(userbyid.status === 200){
                setGetUser(userbyid.data.user)
            }else{
                console.log('err')
            }
        }catch(err){
            console.error(err)
        }
  }

    useEffect(() =>{
        UserbyId()
    },[])   
 

    const  handleChange = (e) => {
    setGetUser({...getUser, [e.target.name] : e.target.value})
    }

    const updateUser = async() => {
        try{
            const res = await axios.put(`https://www.melivecode.com/api/users/update`,{id, ... getUser})
            if(res.status === 200){
                alert("User updated successfully")
                navigate('/')
            }
        }catch(err){
            console.log(err)
        }
        
    }



  return (
 
        <div className=''>
            <Link to='/'><h5>go to Home</h5></Link>

            {!!getUser && (
                <div className="input">
          
                    <p>fname</p>
                    <input name= "fname" type="text" value={getUser?.fname}   onChange={handleChange}/>

                    <p>lname</p>
                    <input name= "lname" type="text" value={getUser?.lname}  onChange={handleChange}/>

                    <p>avatar</p>
                    <input name= "avatar" type="text" value={getUser?.avatar}  onChange={handleChange}/>

                    <p>username</p>
                    <input name= "username" type="text" value={getUser?.username}  onChange={handleChange}/>

                    <button onClick={updateUser}>update</button>
                </div>
            )}
        


        
    </div>
    

  )
}

export default Edit