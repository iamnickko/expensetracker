import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Oops, there's an error</h1>
      <p>{error.message}</p>
      <Link to='/'>
      <button className="my-10 font-bold border-2 border-gray-300 p-1 rounded-xl">
        Let's get you back home
      </button>
      </Link>
    </div>
  );
}
