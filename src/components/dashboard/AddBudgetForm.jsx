import { useFetcher } from "react-router-dom";
import Card from "./UI/Card";
import { useEffect, useRef } from "react";
import Button from "./UI/Button";

export default function AddBudgetForm() {
  const fetcher = useFetcher()
  const isSubmitting = fetcher.state === 'submitting'
  const formRef = useRef()
  
  useEffect(()=> {
    if (isSubmitting) {
      formRef.current.reset()
    }
  }, [isSubmitting])
  
  return (
    <Card className="w-full">
        <h3 className="text-xl">Create a Budget</h3>
      <fetcher.Form method="POST" ref={formRef} className="min-w-full">
        <div className="my-1">
          <label className="block font-bold mb-1" htmlFor="budgetName">
            Budget Name
          </label>
          <input
            className="border-2 rounded-lg p-1 mb-1 w-full"
            type="text"
            name="budgetName"
            id="budgetName"
            placeholder="e.g. Bills"
            required
          />
        </div>
        <div className="my-1">
          <label className="block font-bold mb-1" htmlFor="budgetAmount">
            Amount
          </label>
          <input
            className="border-2 rounded-lg p-1 mb-1 w-full"
            type="number"
            name="budgetAmount"
            id="budgetAmount"
            step={0.01}
            placeholder="e.g. £200"
            required
          />
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <Button disabled={isSubmitting}>Create Budget</Button>
      </fetcher.Form>
    </Card>
  );
}
