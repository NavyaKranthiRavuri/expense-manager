import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const[userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: '',
    // });

    const titleChangeHandler = event => {
        // Here we use prevState because react schedules state updates not perform them instantly
        // So if we perform lot a state updates at same time, we might be getting outdated or incorrect state snapshot if we use below commented approach
        // setUserInput((prevState) => {
        //     return { ...prevState,  title: event.target.value}
        // })

        // setUserInput({
        //     ...userInput, 
        //     title: event.target.value
        // });

        setTitle(event.target.value);
    };

    const amountChangeHandler = event => {
        // setUserInput((prevState) => {
        //     return { ...prevState,  amount: event.target.value}
        // })
        setAmount(event.target.value);
    };

    const dateChangeHandler = event => {
        // setUserInput((prevState) => {
        //     return { ...prevState,  date: event.target.value}
        // })
        setDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };

        setTitle('');
        setAmount('');
        setDate('');

        props.onSaveExpenseData(expenseData);
    }

    const stopEditingHandler = () => {
        props.onCancel()
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={stopEditingHandler}>Cancel</button>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;