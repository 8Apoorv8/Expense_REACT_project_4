import React, { useState } from 'react';
import './NEW_EXPENSE_FORM.css';


const NEW_EXPENSE_FORM = (props) => {

    //useState function used here with array destructuring...
    /* 1.useSTATE provides us a vairable and function (we can name them anything) to store values

       2.the function proivided by useState can be used to store value insude the variable we created(with useState) 
    */
    const [enteredTitle, setEntererTitle] = useState("");
    const [enteredAmount, setEntererAmount] = useState("");
    const [enteredDate, setEntererDate] = useState("");


    // input tag onchange functions..
    //event is a parameter with which we can access the value that is enetered in inoput tag.


    const titleChangeHandler = (event) => {
        setEntererTitle(event.target.value)
    };
    const amountChangeHandler = (event) => {
        setEntererAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setEntererDate(event.target.value)
    };



    //form submission function 

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData =
        {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSAveExpenseData(expenseData);
        console.log(expenseData);
        setEntererTitle("");//using these function whereveer enteredTitle
        setEntererAmount("");//enteredAmount
        setEntererDate("");//enteredDate
    }; //variables are used they all get empty



    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} type="text" onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={enteredAmount} type="number" onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={enteredDate} type="date" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>

    );
};


export default NEW_EXPENSE_FORM;