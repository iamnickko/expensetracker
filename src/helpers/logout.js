import { redirect } from "react-router-dom";

export function logout() {
  localStorage.removeItem("expenses");
  localStorage.removeItem("budgets");
  localStorage.removeItem("userName");
  return redirect("/");
}
