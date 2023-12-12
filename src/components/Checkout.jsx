import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [creditCard, setCreditCard] = useState('');
  const [address, setAddress] = useState('');
  const [cart, setCart] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handlePurchase = () => {
    alert('Gracias por su compra!');
    setIsPurchased(true);
    navigate('/');
    localStorage.removeItem('cart');
    window.location.reload();


  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">

          {cart.map((product, index) => (
            <div key={index} className="mb-4">
              <h3>Producto</h3>
              <img
                    src={product.image}
                    alt={product.name}
                    className="img-thumbnail mr-2"
                    style={{ width: '50px', height: '50px' }}
              />
              <p>{product.name}</p>
              <p>Cantidad: {product.quantity}</p>
            </div>
          ))}


          <form>
            <h3>Datos de Tarjeta</h3>
            <div className="mb-3">
              <label htmlFor="creditCard">Número de Tarjeta:</label>
              <input
                type="text"
                className="form-control"
                id="creditCard"
                value={creditCard}
                onChange={(e) => setCreditCard(e.target.value)}
              />
            </div>

            <h3>Dirección de Envío</h3>
            <div className="mb-3">
              <label htmlFor="address">Dirección:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>


            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePurchase}
            >
              Comprar
            </button>
          </form>
        </div>
      </div>

      {isPurchased && (
        <div className="mt-4">
          <h4>¡Gracias por su compra!</h4>
        </div>
      )}
    </div>
  );
};

export default Checkout;
