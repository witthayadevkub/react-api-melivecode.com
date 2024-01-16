import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const CardUser = ({UserData, loading, fetcthData}) => {
  // const [deleteUser, setDeleteUser] = useState(false)
  const [ID, setID] = useState()
 
  const remove = async () =>{
    try{
      await axios.delete(`https://www.melivecode.com/api/users/delete`,{data:{id:ID}})
      console.log('removing',ID)
       
    fetcthData()

    }catch(err){
      console.log('error',err)
    }
    
    
  }

 

  const update = (id) =>{
        setID(id)
  }


  return (
    <div>
         {loading ? <p>loading...</p>
      : <div className='flex-gard'>
        
            {UserData?.map(user => (
              <div className='box-card'>
                <div key={user.id} className="card-user">
                 
                  <img src={user.avatar} alt={user.fname}/>
                  <div className='text'>
                    <h4>name: {user.fname} {user.lname}</h4>
                    
                  </div>
                 
              </div>
               {<p>email : {user.username}</p> }
               

               {user.id != ID ? (
                <div>
                   
                   <Link to={`/edit/${user.id}`}><button>update</button></Link>
                  <button onClick={()=>update(user.id)}>delete</button>
                  
                </div>
               ):(
                <div>
                  <p>Are you sure to delete the user?</p>
                  <button onClick={remove}>yes</button>
                  <button onClick={()=>setID()}>No</button>
                 
                </div>
               )}
               
               
              </div>
             
              
            ))}
             
        </div>}
        <Link to='/add'><h5>go to add</h5></Link>
        
    </div>
  )
}

export default CardUser