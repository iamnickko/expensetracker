import { redirect, useFetcher } from "react-router-dom";
import Button from "./dashboard/UI/Button";

// action
export async function loginAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try {
    localStorage.setItem("userName", JSON.stringify(formData.userName));
  } catch (error) {
    throw new Error("There was an error whilst creating your account");
  }
  return redirect("/");
}

export default function LoginForm() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  return (
    <>
      <fetcher.Form method="POST" action="/">
        <input
          className="border-2 p-2 rounded-lg my-3"
          type="text"
          name="userName"
          required
          placeholder="What is your name?"
          aria-label="Your Name"
          autoComplete="given-name"
        />
        <Button disabled={isSubmitting} className='block'>Create User</Button>
      </fetcher.Form>
    </>
  );
}
