import fetchData from "./fetchData";

export default function createBudget( {name, amount} ) {
  const newBudget = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
  };
  const existingBudget = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudget, newBudget])
  );
}
