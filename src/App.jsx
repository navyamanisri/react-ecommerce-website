import Navbar from './components/Navbar'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h1>React E-Commerce App</h1>
        <p>Application and navigation layout are running successfully.</p>
      </main>
    </div>
  )
}

export default App
