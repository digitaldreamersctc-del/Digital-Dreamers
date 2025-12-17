import { useState } from 'react'
import services from '../../../components/data/servicesCartData.json'
import packages from '../../../components/data/packagesCartData.json'
import { ServiceCard } from './components/ServiceCard'
import { PackageCard } from './components/PackageCard'
import { Cart } from './components/Cart'
import { Filters } from './components/Filter'
import { useAuth } from '../../../auth/AuthProvider'
import { useCartWithFirestore } from '../../../hooks/useCartWFB'

export default function Cotizador() {
  const { user, login } = useAuth()
  const { cart, addItem, removeItem, total, checkout } =
    useCartWithFirestore(user)

  const [type, setType] = useState('all')
  const [category, setCategory] = useState('all')

  const filteredPackages = packages.filter(
    (p) => category === 'all' || p.category === category,
  )

  return (
    <div className="min-h-screen bg-[#DAD2FF]">
      <section className="text-center py-20 bg-white shadow-md mt-10 mb-20 px-6">
        <h1 className="text-6xl font-bold text-[#281e76] mb-6 font-[Merienda]">
          Cotizador de Servicios
        </h1>
        <p className="max-w-3xl mx-auto text-xl font-medium text-[#493D9E]">
          Selecciona los servicios y paquetes que deseas para obtener una
          cotización personalizada.
        </p>
      </section>

      <div className="p-10 m-10">
        {' '}
        {/* Contenido principal */}
        <Filters
          type={type}
          setType={setType}
          category={category}
          setCategory={setCategory}
        />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-6">
          <Cart
            cart={cart}
            removeItem={removeItem}
            total={total}
            checkout={checkout}
            user={user}
            login={login}
          />

          <div className="md:col-span-4 space-y-10">
            {(type === 'all' || type === 'services') && (
              <section>
                <h2 className="text-3xl text-[#281e76] mb-4 font-[Concert_One]">
                  Servicios
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((s) => (
                    <ServiceCard key={s.id} service={s} onAdd={addItem} />
                  ))}
                </div>
              </section>
            )}

            {(type === 'all' || type === 'packages') && (
              <section>
                <h2 className="text-3xl text-[#281e76] mb-4 font-[Concert_One]">
                  Paquetes
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {filteredPackages.map((p) => (
                    <PackageCard key={p.id} pack={p} onAdd={addItem} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
