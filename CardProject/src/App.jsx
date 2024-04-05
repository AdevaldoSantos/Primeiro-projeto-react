import Card from "./componentes/Card"
import profileImg from "./assets/perfil.jpg"

export default function App() {
  return (
    <>
      <Card posterImg={profileImg} name="Adevaldo" descricao="Full stack JS" phone="(21) 971887538" email="adevaldo@gmail.com" />
    </>
  )
}
