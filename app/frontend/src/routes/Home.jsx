import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home({companyLogoUri}) {
    return (
        <>
            <Header companyLogoUri={companyLogoUri} />
            <Hero />
        </>
    )
}