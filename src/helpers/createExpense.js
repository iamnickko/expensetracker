import fetchData from "./fetchData";

export default function createExpense({ name, amount, budget }) {
  const newExpense = {
    id: crypto.randomUUID(),
    createdAt: Date.now(),
    name: name,
    amount: +amount,
    budget: budget,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newExpense])
  );
}
