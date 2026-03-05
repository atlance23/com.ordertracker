import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react"

export default function LoginForm() {
    return (
        <>
            <div id="loginFormContainer">
                <div id="loginBranding">
                    <div id="loginLogo"></div>
                    <h2>Making It Convienient</h2>
                </div>
                <div id="loginForm">
                        <>
                            <LoginButton />
                        </>
                        <>
                            <LogoutButton />
                        </>
                </div>
            </div>
        </>
    )
}