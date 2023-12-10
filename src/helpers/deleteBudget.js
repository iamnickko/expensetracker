import { redirect } from "react-router-dom";
import deleteExpense from "./deleteExpense";
import fetchData from "./fetchData";
import { getMatchingIdItems } from "./getMatchingIdItems";

export default function deleteBudget({ params }) {
  try {
    const existingBudgets = fetchData("budgets");
    const updatedBudgets = existingBudgets.filter(
      (budget) => budget.id !== params.id
    );
    localStorage.setItem("budgets", JSON.stringify(updatedBudgets));

    const matchingExpenses = getMatchingIdItems({
      category: "expenses",
      key: "budget",
      value: params.id,
    });
    matchingExpenses.forEach((expense) => {
      deleteExpense(expense.id);
    });

    return redirect("/");
  } catch (error) {
    throw new Error("Failed to delete budget.");
  }
}
