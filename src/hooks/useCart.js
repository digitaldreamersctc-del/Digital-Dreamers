import { useState } from 'react'

export function useCart() {
  const [cart, setCart] = useState([])

  const addItem = (item) => setCart((prev) => [...prev, item])
  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id))
  const total = cart.reduce((s, i) => s + i.price, 0)

  return { cart, addItem, removeItem, total, setCart }
}
