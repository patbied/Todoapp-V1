import styles from '../CSS/Card.module.css'
const Card = props => {
    return (
        <div className={`${styles.center}`}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Card