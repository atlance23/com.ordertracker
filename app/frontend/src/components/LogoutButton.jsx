import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton({isAuthenticated}) {
    const logout = useAuth0();

    return (
        isAuthenticated && (
            <>
                <button onClick={() => logout()}>
                    Sign Out
                </button>
            </>
        )
    )
}