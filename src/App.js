import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const [sending, setSending] = useState(false);
  const cart = useSelector(state => state.cart)

  useEffect(() => {
    const sendRequest = async () => {
      setSending(true)
      const response = await fetch('firebase-url', {
        method: 'POST',
        headers: 'application/json',
        body: JSON.stringify(cart)
      })
      setSending(false)

      if (!response.ok) {
        throw new Error('Sending cart data failed')
      }

      const responseData = response.json()
    }
  }, [cart])

  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
