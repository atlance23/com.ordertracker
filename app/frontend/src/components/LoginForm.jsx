import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

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