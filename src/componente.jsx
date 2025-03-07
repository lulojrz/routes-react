import {  useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Componente = () => {
  const [producto, SetProducto] = useState([]);
  const { id } = useParams();
  const [carrito,setCarrito] = useState([])

  const getUser = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    SetProducto(data);
  };
  useEffect(() => {
    getUser(id);
  }, [id]);

  const addCart = () => {
    const object = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      cant: 0,
    }
    
    const existingProductIndex = carrito.findIndex(item => item.id === object.id); 
    
    if (existingProductIndex !== -1) {
      const updatedCarrito = [...carrito];
      updatedCarrito[existingProductIndex].cant += 1;
      setCarrito(updatedCarrito);
    } else {
  
      setCarrito([...carrito, object]);
    }
  
    console.log(carrito);
  }



  return (
    <>
      {producto && (
        <section className="section-products">
          <h5>
            {producto.category} -- {producto.title}
          </h5>
          <div className="container-product">
            <div className="left-container">
              <img src={producto.image} alt="" />
              <span>
                {" "}
                Description :
                <hr />
                {producto.description}
                <hr />
              </span>
            </div>
            <div className="right-container">
              <h3>Price: $ {producto.price}</h3>
              <button className="btn btn-primary" onClick={addCart}>Buy <i className="fa-solid fa-cart-plus"></i></button>
            </div>
          </div>
          <h1>More Products</h1>
        </section>
      )}
    </>
  );
};

export default Componente;
