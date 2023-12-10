import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Error from "./pages/Error";
import { loginAction } from "./components/LoginForm";
import MainLayout, { layoutLoader } from "./layout/MainLayout";
import Main, { mainAction, mainLoader } from "./pages/Main";
import ExpensesPage, { expensesLoader } from "./pages/ExpensesPage";
import BudgetPage, { budgetLoader } from "./pages/BudgetPage";
import { logout } from "./helpers/logout";
import deleteBudget from "./helpers/deleteBudget";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: layoutLoader,
    action: loginAction,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Main />,
        loader: mainLoader,
        action: mainAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: mainAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        loader: budgetLoader,
        action: mainAction,
        element: <BudgetPage />,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
        action: logout,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
