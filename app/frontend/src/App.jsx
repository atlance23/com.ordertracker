import { Routes, Route, Meta } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import assetManifest from './assetManifest.json'
import { Auth0Provider } from '@auth0/auth0-react'

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
