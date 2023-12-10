import ExpenseItem from "./ExpenseItem";
import Card from "./UI/Card";

export default function ExpenseTable({ expenses, showBudgetCol = true }) {
  return (
    <Card>
      <table className="w-full">
        <thead className="border-b-2">
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Date</th>
            {showBudgetCol && <th>Budget</th>}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-b">
              <ExpenseItem expense={expense} showBudgetCol={showBudgetCol} />
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
