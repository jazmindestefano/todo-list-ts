import React, { useRef } from "react";
import newTodoCss from './NewTodo.module.css';

const NewTodo: React.FC<{onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length === 0){
            //error
            return;
        }

        props.onAddTodo(enteredText);
    };

    return(
        <form onSubmit={submitHandler} className={newTodoCss.form}>
            <label htmlFor="text">Todo text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add todo</button>
        </form>
    )
};

export default NewTodo;