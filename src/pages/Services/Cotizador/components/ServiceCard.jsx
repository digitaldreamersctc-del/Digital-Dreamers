export function ServiceCard({ service, onAdd }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow hover:scale-105 transition">
      <h3 className="font-bold text-[#281e76]">{service.title}</h3>
      <p className="text-gray-500 text-sm">{service.description}</p>
      <p className="mt-2 font-semibold">${service.price}</p>
      <button onClick={() => onAdd(service)} className="mt-3 bg-[#B2A5FF] text-white px-4 py-2 rounded-xl">Agregar</button>
    </div>
  );
}