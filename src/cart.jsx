const Cart = ({ cart }) => {
  const printCart = cart.map((element) => {
    return (
      <tr key={element.id}>
        <th scope="col" colSpan={1}>
          {element.id}
        </th>
        <td scope="col" colSpan={2}>
          {element.title}
        </td>
        <td scope="col" colSpan={2}>
          {element.price}
        </td>
        <td scope="col" colSpan={2}>
          {element.cant}
        </td>
        <td scope="col" colSpan={2}>{element.cant * element.price}</td>
      </tr>
    );
  });

  return (
    <div className="cart-container" >
      <table className="table">
        <thead>
          <tr>
            <th colSpan={1}>#</th>
            <th colSpan={2}>Producto</th>
            <th colSpan={2}>Precio</th>
            <th colSpan={2}>Cantidad</th>
            <th colSpan={2}>Total</th>

          </tr>
         
        </thead> <tbody>
            {cart ? printCart : <tr> <th colSpan={4}>NO HAY PRODUCTOS EN EL CARRITO</th></tr>}
          </tbody>
      </table>
    </div>
  );
};

export default Cart;
