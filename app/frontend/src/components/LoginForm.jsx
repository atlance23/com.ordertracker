import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function LoginForm({isAuthenticated}) {
    return (
        <>
            <div id="loginFormContainer">
                <div id="loginBranding">
                    <div id="loginLogo"></div>
                    <h2>Making It Convienient</h2>
                </div>
                <div id="loginForm">
                    {!isAuthenticated && (
                        <>
                            <LoginButton />
                        </>
                    )}
                    {isAuthenticated && (
                        <>
                            <LogoutButton />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}