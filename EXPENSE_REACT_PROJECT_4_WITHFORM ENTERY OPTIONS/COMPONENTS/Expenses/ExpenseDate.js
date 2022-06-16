import React from 'react';


import './ExpenseDate.css';

//function ExpenseDate(props)

const ExpenseDate=props=>          /*  making the normal function into arrow function now  */
{
    const Month=props.Date.toLocaleString('en-US',{month: "long"});
    const year=props.Date.getFullYear();
    const date=props.Date.toLocaleString("en-US",{date: "2-digit"});


    return (
        <div className="expense-date">
            <div className="expense-date__month">{Month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{date}</div>
        </div>
    )
};

export default ExpenseDate;