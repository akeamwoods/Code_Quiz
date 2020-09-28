import React from "react";
import { UserForm } from "./components/userForm";

export default () => {
  const handleFormPost = (e: any) => {
    alert(JSON.stringify(e));
  };

  return (
    <main>
      <header>
        <h1>StarRez: Question 3</h1>
      </header>

      <article>
        <p>Create an accessible form</p>
        <UserForm onSubmit={handleFormPost} />

        {/* See README.md file for more information */}
      </article>
    </main>
  );
};
