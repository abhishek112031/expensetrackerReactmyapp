import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem"
function Expenses(props) {
    return (
        <Card className='expenses'>

            {
                props.items.map(
                    expense => (

                        <ExpenseItem
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount}
                        />
                    )
                )
            }

        </Card>
    )
}

export default Expenses;