import fetchData from "./fetchData";

export default function calculateSpent(budgetId) {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budget !== budgetId) {
      return acc;
    }
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
}
