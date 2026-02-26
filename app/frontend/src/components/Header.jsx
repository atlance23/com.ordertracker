import { Link } from 'react-router-dom'

export default function Header({companyLogoUri}) {
    return (
        <>
            <div id="header">
                <div id="headerLeft">
                    <Link to="/"><img src={companyLogoUri} alt="Mobil On the Run Logo" height={45} /></Link>
                </div>
                <div id="headerRight">
                    <Link to="/login">
                        <button>Staff Login</button>
                    </Link>
                </div>
            </div>
        </>
    )
}