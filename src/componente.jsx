import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
const Componente = () => {
const [producto,SetProducto] = useState([])
const { id } = useParams();


const getUser = async(id)=>{
  const response =  await fetch(`https://fakestoreapi.com/products/${id}`)
  
  const data = await response.json()
  console.log(data)
 
  SetProducto(data)
 
}
useEffect(()=>{
  getUser(id);
  },[id])


  return (
    <>
        {
          producto &&(
            <section className="section-products">
            <h5>{producto.category} --  {producto.title}</h5>
            <div className="container-product">
              <div className="left-container">
                <img src={producto.image} alt="" />
                <span> Description : 
                  <hr />
                  {producto.description} 
                  <hr /></span>

              </div>
              <div className="right-container">
              
              <h3>Price:  $ {producto.price}</h3>
              <button className="btn btn-primary">Buy</button>
              </div>
             

            </div>
            <h1>More Products</h1>
            </section>
            
          )
        }

    </>
    
      
   
  )
}

export default Componente
