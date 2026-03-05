import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

export default function Login({companyLogoUri, isAuthenticated}) {
    return (
        <>
            <Header companyLogoUri={companyLogoUri}/>
            <LoginForm isAuthenticated={isAuthenticated}/>
        </>
    )
}