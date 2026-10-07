import { useState } from 'react'

function App(){
    const [todos, setTodos] = useState([
      "Fyll i din lista här"
    ]);

    const [draft, setDraft] = useState([
    {id: 1, text: "Fyll i din text här", done: false}
  ]);

  function clearList(){
    setTodos([]);
  }

  function handleChange(e){
    setDraft(e.target.value);
  }

  function handleClear(){
    setDraft("");
  }

  function addText(){
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, {id: Date.now(), text: text, done: false }]);
    setDraft("");
  }

  function toggleTodo(id) {
    setTodos(todos.map((t) =>
    t.id === id ? { ...t, done: !t.done } : t
  ));
  }

  function removeTodo(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <main>
      <h1>Lägg till i din lista</h1>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <input
            type="checkbox"
            checked={t.done}
            onChange={() => toggleTodo(t.id)} 
            />
            <span style={{ textDecoration: t.done ? "line-through" : "none" }}> {t.text}</span>
            <button type="button" onClick={() => removeTodo(t.id)}>Ta bort</button>
            </li>
        ))}
      </ul>      
      <section>
        <input 
        type="text"
        value={draft}
          onChange={handleChange}
          placeholder="Skriv här..."
          />
        <p>Kladd för tillfället...</p>
        <button type="button" onClick={handleClear}>Ta bort text i rutan</button>
        <button type="button" onClick={addText}>Lägg till i listan</button>
        <button type="button" onClick={clearList}>Ta bort hela listan</button>
      </section>
    </main>
  );
}

export default App;