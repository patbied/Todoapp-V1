import { useState } from "react";
import styles from "../CSS/DisplayTodoItem.module.css";
import Button from "../UI/Button";
import formStyles from "../CSS/AddTodoForm.module.css";
const DisplayTodoItem = (props) => {
  const [date, setDate] = useState(new Date(props.date))
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDay();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newName, setNewName] = useState(props.title);
  const [newDesc, setNewDesc] = useState(props.desc);
  const [newDate, setNewDate] = useState(props.date);
  const updateNameHandler = (e) => {
    setNewName(e.target.value);
  };
  const updateDescriptionHandler = (e) => {
    setNewDesc(e.target.value);
  };
  const updateDateHandler = (e) => {
    setNewDate(e.target.value);
  };
  const handleDeleteItemClick = () => {
    props.deleteTodo(props.id);
  };
  const handleUpdateItemClick = (e) => {
    e.preventDefault();
    props.updateTodo(props.id, newName, newDesc, newDate)
  };
  const changeUpdateStatus = () => {
    return setIsUpdating(!isUpdating);
  };
  if (isUpdating) {
    return (
      <div className={`${styles.container}`}>
        <div className={styles.innerContainer}>
          <form
            className={`${formStyles.form}`}
            onSubmit={handleUpdateItemClick}
          >
            <label htmlFor="name">Change title</label>
            <input
              className={`${formStyles.input}`}
              onChange={updateNameHandler}
              value={newName}
              id="name"
              type="text"
            ></input>
            {props.desc && (
              <>
                {" "}
                <label htmlFor="desc">Change desc</label>
                <input
                  className={formStyles.input}
                  onChange={updateDescriptionHandler}
                  value={newDesc}
                  id="desc"
                  type="text"
                ></input>
              </>
            )}
            {props.date && (
              <>
                {" "}
                <label htmlFor="date">
                 Change Date (old {year}-{month}-{day})
                </label>
                <input
                  className={formStyles.input}
                  onChange={updateDateHandler}
                  value={newDate}
                  id="date"
                  type="date"
                ></input>
              </>
            )}
            <Button text="Update" type="submit"></Button>
            <Button text="Cancel" type="cancel" onClick={changeUpdateStatus}></Button>
            {/* <button type="submit"></button> */}
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.container} ${props.date && styles.HasDate} `}>
        <div className={styles.innerContainer}>
          <h1 className={`${styles.innerItem}`}>{props.title.toUpperCase()}</h1>
          <p
            onClick={handleDeleteItemClick}
            className={`${styles.touch} ${styles.innerItem} ${styles.delete}`}
          >
            (delete)
          </p>
          <p
            onClick={changeUpdateStatus}
            className={`${styles.touch} ${styles.innerItem} ${styles.update}`}
          >
            (update)
          </p>
        </div>

        {props.date && (
          <h2>
            Due: {year}-{month}-{day}
          </h2>
        )}
        <div className={styles.break}></div>
        <p>{props.desc}</p>
      </div>
    );
  }
};

export default DisplayTodoItem;
