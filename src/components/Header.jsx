import { NavLink, useFetcher } from "react-router-dom";

export default function Header({ userName }) {
  const fetcher = useFetcher();

  return (
    <header className="flex justify-between items-center max-w-5xl py-5 border-b-2 mb-3 ">
      <nav className="font-bold text-3xl">
        <NavLink to="/">ExpenseTracker</NavLink>
      </nav>
      {userName && (
        <fetcher.Form method="POST" action="logout">
          <button className="border border-gray-100 p-2 rounded-xl text-red-400 text-sm  hover:border-red-400">
            Delete Profile
          </button>
        </fetcher.Form>
      )}
    </header>
  );
}
