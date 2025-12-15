import { useState } from 'react'
import services from '../../../components/data/services.json'
import packages from '../../../components/data/packages.json'
import { ServiceCard } from './components/ServiceCard'
import { PackageCard } from './components/PackageCard'
import { Cart } from './components/Cart'
import { Filters } from './components/Filter'
import { useAuth } from '../../../hooks/useAuth'
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
    <div className="min-h-screen bg-[#281e76] p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Cotizador Digital</h1>

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
              <h2 className="text-xl font-bold text-white mb-4">Servicios</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((s) => (
                  <ServiceCard key={s.id} service={s} onAdd={addItem} />
                ))}
              </div>
            </section>
          )}

          {(type === 'all' || type === 'packages') && (
            <section>
              <h2 className="text-xl font-bold text-white mb-4">Paquetes</h2>
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
  )
}
