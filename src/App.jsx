import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

//components
import CardUser from './components/CardUser'
import AddUser from './components/AddUser';

function App() {

  const [UserData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)


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
    <div className="con">
      <header>
        <nav className='nav'>
          <div className="logo">User</div>
          <ul>
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
          </ul>
        </nav>
      </header>
               
              
        <section id="section1">
          <h2>Section 1</h2>
          <CardUser Id= "cardUser" UserData = {UserData} loading={loading}/>
          {/* Content for Section 1 */}
        </section>

        <section id="section2">
          <h2>Section 2</h2> 
          <AddUser Id="addUser"/>
          {/* Content for Section 2 */}
        </section>

        <section id="section3">
          <h2>Section 3</h2>
          {/* Content for Section 3 */}
        </section>
    </div>
  )
}

export default App
