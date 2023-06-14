import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Cart } from "./components/CarWidget";
import { ItemListContainer } from "./components/itemListContainer";

function App() {
  const [showCart, setShowCart] = useState(false)

  const openCart = () => setShowCart(true)
  const closeCart = () => setShowCart(false)

  return (
    <>
      <header>
        <Navbar />
        <Cart event={openCart}/>
      </header>
      <main>
        {showCart && (
          <>
            <div>
            <h2>CARRITO</h2>
            <button className="btn-close" onClick={closeCart}>X</button>
            </div>
            <ItemListContainer event="closeCart"/>
          </>
        )}
      </main>
    </>
  )
}

export default App;
