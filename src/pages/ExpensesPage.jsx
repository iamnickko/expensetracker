import { useLoaderData } from "react-router-dom";
import ExpenseTable from "../components/dashboard/ExpenseTable";
import fetchData from "../helpers/fetchData";

// loader
export const expensesLoader = () => {
  const expenses = fetchData("expenses");
  return expenses;
};
export default function ExpensesPage() {
  const expenses = useLoaderData();
  return (
    <div>
      <ExpenseTable expenses={expenses} />
    </div>
  );
}
