import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './pages/Footer'
import { Home } from './pages/home'
import { Services } from './pages/Services'
import { Contact } from './pages/Contact'
import { Faq } from './pages/Faq'

type View = 'home' | 'services' | 'faq' | 'contact'

function App() {
  const [currentView, setCurrentView] = useState<View>('home')

  const navigate = (view: View) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header currentView={currentView} onNavigate={navigate} />

      <main className="flex-1">
        {currentView === 'home' && <Home onNavigate={navigate} />}
        {currentView === 'services' && <Services onBack={() => navigate('home')} />}
        {currentView === 'faq' && <Faq onBack={() => navigate('home')} />}
        {currentView === 'contact' && <Contact onBack={() => navigate('home')} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
