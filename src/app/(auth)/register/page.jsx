"use client";

import { register } from "@/actions/auth";
import { useActionState } from "react";

export default function Register() {
  const [state, action, isPendding] = useActionState(register, undefined);
  return (
    <div className="container w-1/2">
      <h1 className="title">This is register</h1>

      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" defaultValue={ state?.email } />
          {state?.errors?.email && (
            <p className="error"> {state.errors.email} </p>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          {state?.errors?.password && (
            <div className="error">
              <p> Password must: </p>
              <ul className="list-disc list-inside ml-4">
                {state.errors.password.map((err) => (
                  <li key={err}> {err} </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" />

          {state?.errors?.confirmPassword && (
            <p className="error"> {state.errors.confirmPassword} </p>
          )}
        </div>

        <div>
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
}
