export function ServiceCard({ service, onAdd }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:shadow-lg">
      <h3 className="font-bold text-[#281e76]">{service.title}</h3>
      <p className="text-gray-500 text-sm">{service.description}</p>
      <p className="mt-2 font-semibold">S/.{service.price}</p>
      <button
        onClick={() => onAdd(service)}
        className="mt-3 bg-[#cb60f1] hover:scale-105 transition text-white px-3 py-1 rounded-xl"
      >
        Agregar
      </button>
    </div>
  )
}
