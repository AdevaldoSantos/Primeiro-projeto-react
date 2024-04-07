import Profile from "./componentes/Profile"

export default function App() {
    return (
        <div className="app">
            <Profile
                name = "Adevaldo santos"
                bio = "Full-stack javascript developer."
                email = "adevaldosantosfilho@gmail.com"
                phone = "+5521971887538"
                githubUrl = "https://github.com/AdevaldoSantos"
                linkdinUrl = "https://www.linkedin.com/in/adevaldo-santos-586065187/"
                instagramUrl = "https://www.instagram.com/sacramento_ade/"
            />
        </div>
    )
}