import { useState } from "react";
import { ITEMS } from "./data/items";
import "./App.css";

const PAGE_SIZE = 5;

export default function App() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(ITEMS.length / PAGE_SIZE);
  const visible = ITEMS.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="container">
      <h1>Paginated List</h1>

      <ul>
        {visible.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> — {item.category} · {item.price} · <strong>Rating : </strong> {item.rating}
          </li>
        ))}
      </ul>

      <div className="controls">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
