import { useLoaderData } from "react-router-dom";
import fetchData from "../helpers/fetchData";
import Welcome from "./Welcome";
import Dashboard from "../components/dashboard/Dashboard";
import createBudget from "../helpers/createBudget";
import createExpense from "../helpers/createExpense";
import deleteExpense from "../helpers/deleteExpense";

// action
export async function mainAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);
  // creates budgets
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.budgetName,
        amount: values.budgetAmount,
      });
      return null;
    } catch (error) {
      throw new Error("There was an error creating this budget.");
    }
  }
  // creates expenses
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.expenseName,
        amount: values.expenseAmount,
        budget: values.category,
      });
      return null;
    } catch (error) {
      throw new Error("There was an error creating this expense.");
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteExpense(values.id);
      return null;
    } catch (error) {
      throw new Error("Failed to delete this expense.");
    }
  }
}

// loader
export function mainLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

export default function Main() {
  const { userName } = useLoaderData();
  return <>{userName ? <Dashboard /> : <Welcome />}</>;
}
