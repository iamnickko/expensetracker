import { useLoaderData } from "react-router-dom";
import ExpenseTable from "../components/dashboard/ExpenseTable";
import AddExpenseForm from "../components/dashboard/AddExpenseForm";
import fetchData from "../helpers/fetchData";
import { getMatchingIdItems } from "../helpers/getMatchingIdItems";
import BudgetItem from "../components/dashboard/BudgetItem";

// loader - load ID specific expense data
export const budgetLoader = async ({ params }) => {
  const expenses = await fetchData("expenses");
  const budgets = await fetchData("budgets");
  const budgetId = params.id;
  const thisBudget = await getMatchingIdItems({
    category: "budgets",
    key: "id",
    value: budgetId,
  });
  const thisBudgetExpenses = expenses.filter(
    (expense) => expense.budget === budgetId
  );
  if (!thisBudget) {
    throw new Error("There are no things to display");
  }

  return { expenses, budgets, thisBudget, thisBudgetExpenses, budgetId };
};

export default function BudgetPage() {
  const { expenses, budgets, thisBudget, thisBudgetExpenses, budgetId } =
    useLoaderData();

  return (
    <>
      <h1 className="font-bold text-3xl my-5 text-center">
        Your <span className="text-green-300">{thisBudget[0].name}</span> Budget
      </h1>
      <div className="md:grid md:grid-cols-2 gap-5 items-center">
        {budgets && budgets.length > 0 && (
          <BudgetItem
            showButton={false}
            budget={thisBudget[0]}
            showDelete={true}
          />
        )}
        <AddExpenseForm
          budgets={budgets.filter((budget) => budget.id === budgetId)}
        />
      </div>
      {expenses && thisBudgetExpenses && thisBudgetExpenses.length > 0 ? (
        <ExpenseTable expenses={thisBudgetExpenses} showBudgetCol={false} />
      ) : (
        <p className="font-bold text-lg my-5 text-center">
          This budget has no expenses. Use the form to add an expense.
        </p>
      )}
    </>
  );
}
