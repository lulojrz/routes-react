import { useState ,useEffect} from 'react'
import './App.css'
import { Routes ,Route,Link} from 'react-router-dom'
import Componente from './componente'

function App() {
  const [user,Setusers] = useState([])
  const getUser = async()=>{
    const response =  await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    Setusers(data)
   
  }
  const productos = user.map((item)=>{
    return(
      <div className="card"  key={item.id}>
        <div className="container-img">
        <img src={item.image} alt="" />

        </div>
     <div className="card-body">
     <h5 className="card-title">{item.title}</h5>
      <p className="card-text">$ {item.price} </p>
      <Link to={`./componente/${item.id}`}><button className='btn btn-primary'>Mas Detalles</button></Link>
   
    </div>
    </div>
    )
  })

  useEffect(()=>{
  getUser();
  },[])
  return (
 
    <>
    <Routes>
    <Route path="/componente/:id" element = {<Componente/>} ></Route>
    </Routes>
    <div className='container'>
    {productos}

    </div>

    
    </>
  )
}

export default App
