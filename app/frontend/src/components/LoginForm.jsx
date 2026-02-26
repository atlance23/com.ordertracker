export default function LoginForm() {
    return (
        <>
            <div id="loginFormContainer">
                <div id="loginBranding">
                    <div id="loginLogo"></div>
                    <h2>Making It Convienient</h2>
                </div>
                <div id="loginForm">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        userInit();
                    }}>
                        <div className="username">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <button type="submit">Login</button>
                    </form>  
                </div>
            </div>
        </>
    )
}