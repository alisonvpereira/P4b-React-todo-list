import React, {useState} from "react";

function TodoForm(props) {
    //variables
    const {addTodo} = props;
    const [value, setValue] = useState("");

    //methods
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };

    //Template
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add Todo..." 
            onChange={(event) => setValue(event.target.value)}/>
        </form>
    );
}

export default TodoForm;