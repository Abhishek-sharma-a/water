import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import "./Dashboard.css"
const Dashboard = () => {
    const navegate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))
  

    useEffect(() => {
        if (user) {
            navegate("/dashboard")
        }
    }, [])
    useEffect(
        () => {
            setUser(JSON.parse(localStorage.getItem("user")))
      
        }, [localStorage.getItem("user")])

        

    return (<div className="online">
    <div className='dash'><h1>Profile</h1>

<Card style={{ width: '25rem' }}>

  <Card.Body>
    <Card.Title>  {user?.displayName}</Card.Title>
    <Card.Text>
    <p>Email: {user?.email}</p>
    
    </Card.Text>

  </Card.Body>
</Card>
       
      




    </div></div>
    )
}

export default Dashboard