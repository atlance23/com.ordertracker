import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton({isAuthenticated}) {
    const loginWithRedirect = useAuth0();

    return (
        !isAuthenticated && (
            <>
                <button onClick={() => loginWithRedirect()}>
                    Sign In
                </button>
            </>
        )
    )
}