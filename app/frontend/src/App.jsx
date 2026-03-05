import { Routes, Route } from 'react-router-dom'
import Login from './routes/Login'
import Home from './routes/Home'
import assetManifest from './assetManifest.json'
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const isAuthenticated = useAuth0();

  return (
    <>
      <Auth0Provider
        domain={import.meta.env.AUTH0_DOMAIN}
        clientId={import.meta.env.CLIENT_ID}
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
