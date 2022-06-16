import React from "react";
import "./NEW_EXPENSE.css"
import NEW_EXPENSE_FORM from "./NEW_EXPENSE_FORM";



const NEW_EXPENSE=(props)=>
{
    const saveExpenseDataHandler=(enteredExpenseData)=>

    {
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };

    return(
        <div className="new-expense">
            <NEW_EXPENSE_FORM onSAveExpenseData={saveExpenseDataHandler}/>
        </div>
        
    );
    
};


export default NEW_EXPENSE;