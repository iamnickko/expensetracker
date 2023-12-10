import { Link, useLoaderData } from "react-router-dom";

import AddBudgetForm from "./AddBudgetForm";
import AddExpenseForm from "./AddExpenseForm";
import BudgetList from "./BudgetList";
import ExpenseTable from "./ExpenseTable";
import Button from "./UI/Button";

export default function Dashboard() {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <>
      <h1 className="font-bold text-3xl text-center my-5">
        Welcome, <span className="text-green-300">{userName}</span>!
      </h1>
      {!budgets && <h3 className="text-center text-2xl">Create your first budget to begin tracking expenses</h3>}
      <div className="md:flex md:justify-between md:gap-7">
        <AddBudgetForm />

        {budgets && budgets.length > 0 && <AddExpenseForm budgets={budgets} />}
      </div>
      {budgets && budgets.length > 0 && (
        <div className="text-center">
          <h4 className="text-3xl my-5">Your Existing Budgets</h4>
          <BudgetList budgets={budgets} />
        </div>
      )}
      {budgets && budgets.length > 0 && expenses && expenses.length > 0 && (
        <div className="text-center">
          <h3 className="text-3xl my-5">Recent Expenses</h3>
          <ExpenseTable
            expenses={expenses
              .sort((a, b) => b.createdAt - a.createdAt)
              .slice(0, 6)}
          />
          {expenses.length > 6 && (
            <Link to="expenses">
              <Button>View All Expenses</Button>
            </Link>
          )}
        </div>
      )}
    </>
  );
}
