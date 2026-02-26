import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import assetManifest from './assetManifest.json'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home companyLogoUri={assetManifest.companyLogoUri} />} />
        <Route path="/login" element={<Login companyLogoUri={assetManifest.companyLogoUri} />} />
      </Routes>
    </>
  )
}

export default App
