import fetchData from "./fetchData";

export default function deleteExpense(id) {
  const existingExpenses = fetchData("expenses") ?? [];
  if (id) {
    const updatedExpenses = existingExpenses.filter(
      (expense) => expense.id !== id
    );
    return localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  }

  return localStorage.removeItem("expenses");
}
