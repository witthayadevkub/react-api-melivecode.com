import React from 'react'
import { Link } from 'react-router-dom'
const CardUser = ({UserData,loading}) => {
  return (
    <div>
         {loading ? <p>loading...</p>
      : <div className='flex-gard'>
        
            {UserData?.map(user => (
              <div className='box-card'>
                <div key = {user.id}className="card-user">
                 
                  <img src={user.avatar} alt={user.fname}/>
                  <div className='text'>
                    <h4>name: {user.fname} {user.lname}</h4>
                    
                  </div>
                 
              </div>
               {<p>email : {user.username}</p> }
              </div>
             
              
            ))}
             
        </div>}
        <Link to='/add'><h5>go to add</h5></Link>
        
    </div>
  )
}

export default CardUser