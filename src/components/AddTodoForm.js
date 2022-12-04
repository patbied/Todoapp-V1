import { useState } from 'react'
import styles from '../CSS/AddTodoForm.module.css'
import Button from '../UI/Button'
const AddTodoForm = props => {
   const [name, changeName] = useState('')
   const [desc, changeDesc] = useState('')
   const [date, changeDate] = useState('')
   const [error, setError] = useState('')

   const formSubmitHandler = (event) => {
        event.preventDefault()
        let fullDate = new Date(date)
        let todaysDate = new Date()
        if (name.trim().length <= 0){
            setError("Name length must be greater than 1")
            return;
        }
        if (fullDate < todaysDate){
            setError(`Date has to be greater than today ${todaysDate.toDateString()}`)
            return;
        }
        console.log("here bottom")
        setError('')
        props.addTodo({name,desc,date})
    
    
    
    }
    const updateNameHandler = event => {
        changeName(event.target.value)
        
    }
   const updateDescriptionHandler = event => {
    changeDesc(event.target.value)
   }
   const updateDateHandler = event => {
    changeDate(event.target.value)
   }
 
return (
    <> 
    <h3 className={styles.invalid}>{error}</h3>
    <form className={`${styles.form}`} onSubmit={formSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input className={`${styles.input}`} onChange={updateNameHandler} value={name} id="name" type="text"></input>
        <label htmlFor="desc">Description (Optional)</label>
        <input className={styles.input} onChange={updateDescriptionHandler} value={desc} id="desc" type="text"></input>
        <label htmlFor="date">Date by (Optional)</label>
        <input className={styles.input} onChange={updateDateHandler} value={date} id="date" type="date"></input>
        <Button text="Add" type="submit"></Button>
        {/* <button type="submit"></button> */}
    </form>
    </>
)
}

export default AddTodoForm