import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <div id="hero">
                <div id="heroContent">
                    <div id="heroOverlay"></div>
                    <div id="heroText">
                        <h1>Welcome to Mobil On the Run</h1>
                        <p>Track your orders on the go with our mobile-friendly order tracking system.</p>
                        <Link to="/login">
                            <button>Staff Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}