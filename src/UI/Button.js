import styles from '../CSS/Button.module.css'

const Button = props => {
    return (
        <button onClick={props.onClick} className={styles.button} type={props.type || ''}>{props.text || 'Submit'}</button>
    )
}
export default Button