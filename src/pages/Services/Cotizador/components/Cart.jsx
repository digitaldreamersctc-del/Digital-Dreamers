import { FaTrash } from 'react-icons/fa'

export function Cart({ cart, removeItem, total, checkout, user, login }) {
  return (
    <aside className="bg-white rounded-2xl p-4 shadow col-span-2">
      <h2 className="text-3xl text-[#281e76] mb-4 font-[Concert_One]">
        Carrito
      </h2>

      {cart.length === 0 && (
        <p className="text-gray-500 text-sm">Sin elementos</p>
      )}

      {cart.map((item) => (
        <div key={item.id} className="flex justify-between mb-2">
          <span>{item.title}</span>
          <button
            onClick={() => removeItem(item.id)}
            className="text-[#B2A5FF]"
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <p className="mt-4 font-bold">Total: ${total}</p>

      {!user ? (
        <button
          onClick={login}
          className="mt-4 w-full bg-[#493D9E] text-white py-2 rounded-xl"
        >
          Iniciar sesión
        </button>
      ) : (
        <button
          onClick={checkout}
          className="mt-4 w-full bg-[#B2A5FF] text-white py-2 rounded-xl"
        >
          Guardar cotización
        </button>
      )}
    </aside>
  )
}
