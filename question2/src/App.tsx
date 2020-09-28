import React from "react";
import { Table } from "./components/table";
import data from "./data.json";

function App() {
  return (
    <main>
      <header>
        <h1>StarRez: Question 2</h1>
      </header>

      <article>
        <p>Render the contents of the data.JSON file</p>
        <Table list={data} />
      </article>
    </main>
  );
}

export default App;
