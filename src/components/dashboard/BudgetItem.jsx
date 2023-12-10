import { Link, Form } from "react-router-dom";
import calculateSpent from "../../helpers/calculateSpent";
import Card from "./UI/Card";
import { formatCurrency } from "../../helpers/formatCurrency";
import Button from "./UI/Button";

export default function BudgetItem({ budget, showButton, showDelete }) {
  const amountSpent = calculateSpent(budget.id);

  return (
    <Card className="min-w-full" key={budget.id}>
      <div className="flex justify-between text-lg">
        <p className="font-bold">{budget.name}</p>
        <p>
          <span className="font-bold">{formatCurrency(budget.amount)}</span>{" "}
          allocated
        </p>
      </div>
      <div className="text-center">
        <progress
          className=""
          max={budget.amount}
          value={amountSpent}
        ></progress>
        <div className="flex text-xs justify-between">
          <small>{formatCurrency(amountSpent)} spent</small>
          <small>{formatCurrency(budget.amount - amountSpent)} remaining</small>
        </div>
      </div>
      {showButton && (
        <div className="text-center">
          <Link to={`budget/${budget.id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      )}
      {showDelete && (
        <Form className="text-center" method="POST" action="delete">
          <button
            className="border border-gray-100 p-2 rounded-xl text-red-400 text-sm  hover:border-red-400"
            type="submit"
          >
            Delete Budget
          </button>
        </Form>
      )}
    </Card>
  );
}
