import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import fetchData from "../helpers/fetchData";

export function layoutLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export default function MainLayout() {
  const { userName } = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto px-3 font-poppins mb-10">
      <Header userName={userName} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
