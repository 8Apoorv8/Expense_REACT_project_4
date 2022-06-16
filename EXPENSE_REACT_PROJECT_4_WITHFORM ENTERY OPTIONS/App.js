
import React,{useState} from 'react';
import NEW_EXPENSE from "./components/newExpense/NEW_EXPENSE";
import Expense_Repeated from "./components/Expenses/Expenses_Repeated";

let DUMMY_EXPENSE = [
    { 
        id:"e1",
        date:new Date(2021,4,21),
        title:"school-fee",
        amount:400
    },
    { 
        id:"e2",
        date:new Date(2020,2,11),
        title:"MEdical-fee",
        amount:3000
    }
];





/*  making the normal function into arrow function now  */

//function App(){....}
const App=()=>
{
    const[expenses,setExpenses]=useState(DUMMY_EXPENSE);


    //function to get data from child expense of form to App.js
    const addExpenseHandler=(Expense)=>
    {
        const UpdatedExpense=[Expense,...expenses];//...expenses is from useSatate function
        setExpenses(UpdatedExpense);
    };

    return(
        <div>
            <NEW_EXPENSE onAddExpense={addExpenseHandler}/>
            <Expense_Repeated item={expenses}/>
        </div>
    );
}

export default App;