import {useState} from 'react'
import { useSelector } from 'react-redux'


function NewTicket() {

  //tget user from global state
  const {user} = useSelector((state) => state.auth)
  
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [product, setproduct] = useState(user.email)
  const [description, setDescription] = useState(user.email)
    return (
      <div>
        <h1>New Ticket</h1>
      </div>
    )
  }
  
  export default NewTicket