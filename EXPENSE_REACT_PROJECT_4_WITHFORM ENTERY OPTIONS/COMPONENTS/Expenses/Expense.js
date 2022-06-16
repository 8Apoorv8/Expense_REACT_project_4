import React,{useState} from 'react';
import './Expense.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//function Expense(props) {
const Expense=props=>                                   /*  making the normal function into arrow function now  */
{

    return (
    <Card className='Expense-item'>
        <ExpenseDate Date={props.Date}/>    
        <div className='Expense-item__description'>
            <h2>{props.Title}</h2>
            <div className='Expense-item__price'>${props.Amount}</div>
        </div>
     
    </Card>);


};

export default Expense;