import { useState } from 'react'

export function PackageCard({ pack, onAdd }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3
        onClick={() => setOpen(!open)}
        className="font-bold cursor-pointer text-[#281e76]"
      >
        {pack.title}
      </h3>
      {open && <p className="text-sm text-gray-600 mt-2">{pack.details}</p>}
      <p className="mt-2 font-semibold">S/.{pack.price}</p>
      <button
        onClick={() => onAdd(pack)}
        className="mt-3 bg-[#cb60f1] text-white px-4 py-2 rounded-xl"
      >
        Agregar paquete
      </button>
    </div>
  )
}
