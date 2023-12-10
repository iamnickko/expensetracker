import BudgetItem from "./BudgetItem";

export default function BudgetList({ budgets, showButton = true }) {
  return (
    <div className="md:grid md:grid-cols-2 md:gap-5">
      {budgets.map((budget) => (
        <BudgetItem key={budget.id} budget={budget} showButton={showButton} />
      ))}
    </div>
  );
}
