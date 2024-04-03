import Button from "../Button";

export default function Card({title, posterImg, name, phone, email}) {
    return (
        <img src={posterImg} alt="profile" />,
        <h3>{title}</h3>,
        <p>{name}</p>,
        <hr />,
        <p>{phone}</p>,
        <hr />,
        <p>{email}</p>,
        <Button/>
    )
}