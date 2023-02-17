import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Skills from './components/Skills'
import About from './components/About'
import Layout from './components/Layout'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App