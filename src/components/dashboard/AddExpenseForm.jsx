import { useFetcher } from "react-router-dom";
import Card from "./UI/Card";
import { useEffect, useRef } from "react";
import Button from "./UI/Button";

export default function AddExpenseForm({ budgets }) {
  const fetcher = useFetcher();
  const formRef = useRef();
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (isSubmitting) {
      formRef.current.reset();
    }
  }, [isSubmitting]);

  return (
    <Card className="w-full">
      <h3 className="text-xl">Create an Expense</h3>
      <fetcher.Form ref={formRef} method="POST" className="min-w-full">
        <div className="flex justify-between gap-5">
          <div className="w-full">
            <label className="block font-bold mb-1" htmlFor="expenseName">
              Expense
            </label>
            <input
              className="border-2 rounded-lg p-1 mb-1 w-full"
              type="text"
              name="expenseName"
              id="expenseName"
              required
            />
          </div>
          <div className="w-full">
            <label className="block font-bold mb-1" htmlFor="expenseAmount">
              Amount
            </label>
            <input
              className="border-2 rounded-lg p-1 mb-1 w-full"
              type="number"
              step={0.01}
              name="expenseAmount"
              id="expenseAmount"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="category-select">Choose a budget</label>
          <select
            className="border-2 rounded-lg p-1 mb-1 w-full"
            name="category"
            id="category-select"
          >
            {budgets.length !== 1 && <option value="">Select...</option>}
            {budgets.map((budget) => (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            ))}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <Button disabled={isSubmitting}>Create Expense</Button>
      </fetcher.Form>
    </Card>
  );
}
