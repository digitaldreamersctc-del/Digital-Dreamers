import { useAuth } from '../../../hooks/useAuth.js'
import { useState } from 'react'
import ProjectsManager from './components/ProjectsManager.jsx'
import UserProfile from './components/UserProfile.jsx'

export default function Dashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('projects')

  const tabs = [
    { id: 'profile', name: 'Mi Perfil', icon: '👤' },
    { id: 'projects', name: 'Mis Proyectos', icon: '📂' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />
      case 'projects':
        return <ProjectsManager />
      default:
        return <ProjectsManager />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Dashboard</h1>
          <p className="text-sm text-[#281e76]">
            Bienvenid@, <b>{user?.displayName || user?.email}</b>
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-8">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Navegación</h2>

          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-2
                    ${
                      activeTab === tab.id
                        ? 'bg-gray-50 text-[#281e76] border-r-4 border-[#cb60f1]'
                        : 'text-[#281e76] hover:bg-gray-50'
                    }`}
                >
                  <span>{tab.icon}</span> {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 bg-white p-6 shadow rounded-lg">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
