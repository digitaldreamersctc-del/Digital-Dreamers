import { useAuth } from '../../../hooks/useAuth.js'
import { useState } from 'react'
import TasksManager from './components/TasksManager.jsx'
import UserProfile from './components/UserProfile.jsx'

export default function Dashboard() {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('tasks')

  const tabs = [
    { id: 'profile', name: 'Mi Perfil', icon: '👤' },
    { id: 'tasks', name: 'Mis Tareas', icon: '📝' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <UserProfile />
      case 'tasks':
        return <TasksManager />
      default:
        return <TasksManager />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Dashboard</h1>
          <p className="text-sm text-gray-600">
            Bienvenido, <b>{user?.displayName || user?.email}</b>
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
                        ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-500'
                        : 'text-gray-600 hover:bg-gray-50'
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
