import { Link, useFetcher } from "react-router-dom";
import { formatDate } from "../../helpers/formatDate";
import { getMatchingIdItems } from "../../helpers/getMatchingIdItems";
import { formatCurrency } from "../../helpers/formatCurrency";

export default function ExpenseItem({ expense, showBudgetCol = true }) {
  const fetcher = useFetcher();
  const budget = getMatchingIdItems({
    category: "budgets",
    key: "id",
    value: expense.budget,
  });

  return (
    <>
      <td className="py-2 text-center">{expense.name}</td>
      <td className="py-2 text-center">{formatCurrency(expense.amount)}</td>
      <td className="py-2 text-center">{formatDate(expense.createdAt)}</td>
      {showBudgetCol && (
        <td className="py-2 text-center">
          {budget[0] && (
            <Link to={`/budget/${budget[0].id}`}>{budget[0].name}</Link>
          )}
        </td>
      )}
      <td className="py-2 text-center">
        <fetcher.Form method="POST">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="id" value={expense.id} />
          <button className="text-xs text-red-400">Delete</button>
        </fetcher.Form>
      </td>
    </>
  );
}
