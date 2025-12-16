import { useState } from 'react'

export function PackageCard({ pack, onAdd }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-4 shadow">
      <h3
        onClick={() => setOpen(!open)}
        className="font-bold cursor-pointer text-[#281e76] hover:text-[#cb60f1]"
      >
        {pack.title}
      </h3>
      {open && <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
        {pack.details.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>}

      <p className="mt-2 font-semibold">S/.{pack.price}</p>
      <button
        onClick={() => onAdd(pack)}
        className="mt-3 bg-[#cb60f1] hover:scale-105 transition text-white px-3 py-1 rounded-xl"
      >
        Agregar paquete
      </button>
    </div>
  )
}
