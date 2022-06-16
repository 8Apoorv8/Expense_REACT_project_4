import React from 'react';
import './Expenses_Repeated.css';
import Expense from './Expense';
import Card from '../UI/Card';

//function Expense_Repeated(props) 

const Expense_Repeated = props =>           /*  making the normal function into arrow function now  */ {
    return (
        <Card className="Expenses">
            {
                props.item.map(
                    expensee => (
                        <Expense
                            Date={expensee.date}
                            Title={expensee.title}
                            Amount={expensee.amount}/>
                    )
                )
            }
            
        </Card>

    );
}

export default Expense_Repeated;