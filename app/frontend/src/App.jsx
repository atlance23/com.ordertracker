import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import assetManifest from './assetManifest.json'
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <>
      <Auth0Provider
        domain="dev-4s2fkubvsdejxniw.us.auth0.com"
        clientId="iZdQbAeWswYyz8NADI7Yg2ksXAqGCVf5"
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <Routes>
          <Route path="/" element={<Home companyLogoUri={assetManifest.companyLogoUri} isAuthenticated={isAuthenticated}/>} />
          <Route path="/login" element={<Login companyLogoUri={assetManifest.companyLogoUri} />} />
        </Routes>
      </Auth0Provider>  
    </>
  )
}

export default App
