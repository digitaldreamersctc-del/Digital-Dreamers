import { useAuth } from '../../../../auth/AuthProvider'

export default function UserProfile() {
  const { user } = useAuth()

  if (!user) return <p>Cargando perfil...</p>

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Mi Perfil</h2>

      <div className="flex items-center gap-4">
        {user.photoURL && (
          <img
            src={user.photoURL}
            className="w-16 h-16 rounded-full border"
            alt="Foto de perfil"
          />
        )}

        <div>
          <p className="font-medium">{user.displayName}</p>
          <p className="text-[#281e76] text-sm">{user.email}</p>
        </div>
      </div>
    </div>
  )
}
