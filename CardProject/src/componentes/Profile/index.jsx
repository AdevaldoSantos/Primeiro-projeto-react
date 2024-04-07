import styles from "./styles.modules.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img className={styles.avater} src="" alt="Adevaldo"/>
            <h2 className={styles.name}>{props.name}</h2>
            <div>{props.bio}</div>
            <div>{props.phone}</div>
            <div>{props.email}</div>
            <div className={styles.links}>
                <a href={props.githubUrl} target="_blank">Github</a>
                <a href={props.linkdinUrl} target="_blank">linkdIn</a>
                <a href={props.instagramUrl} target="_blank">Instagram</a>
            </div>
        </div>
    )
}