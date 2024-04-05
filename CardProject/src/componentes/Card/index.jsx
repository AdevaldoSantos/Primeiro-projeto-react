import Button from "../Button";

export default function Card({name, posterImg, descricao, phone, email}) {
    return (
        <img src={posterImg} alt="profile" />,
        <h3>{name}</h3>,
        <p>{descricao}</p>,
        <hr />,
        <p>{phone}</p>,
        <hr />,
        <p>{email}</p>,
        <Button/>
    )
}