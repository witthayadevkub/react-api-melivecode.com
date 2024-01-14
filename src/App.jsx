import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [UserData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [id, setId] = useState()

  const fetcthData = async () => {
      setLoading(true)
      

     try{
      const data = await axios.get(`https://www.melivecode.com/api/users`)
      setUserData(data.data)
     }catch(err){
      console.log(err)
     }finally{
      setLoading(false)
     }
  }

  useEffect(()=>{
    fetcthData()
  },[])

  console.log(UserData)

  return (
    <div className="">
      {loading ? <p>loading...</p>
      : <div className='grid'>
        
            {UserData?.map(user => (
              <div key = {user.id}className="card-user">
                 
                  <img src={user.avatar} alt={user.fname}/>
                  <h4>name: {user.fname} {user.lname}</h4>
                  <p>email : {user.username}</p>
              </div>
            ))}
        </div>}
    </div>
  )
}

export default App
