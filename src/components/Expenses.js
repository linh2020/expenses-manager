import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props) {
    return (
        <div>
            <ExpenseItem id={props.expenses[0].id} title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
            <ExpenseItem id={props.expenses[1].id} title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
            <ExpenseItem id={props.expenses[2].id} title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
        </div>
    );
}

export default Expenses;
