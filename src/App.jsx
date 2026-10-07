import { useState } from 'react'

function App(){
    const [todos, setTodos] = useState([
      "Fyll i din lista här"
    ]);

    const [draft, setDraft] = useState("");

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
    setTodos([...todos, text]);
    setDraft("");
  }

  return (
    <main>
      <h1>Lägg till i din lista</h1>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <button type="button" onClick={clearList}>Ta bort</button>
      <section>
        <input 
        type="text"
        value={draft}
          onChange={handleChange}
          placeholder="Skriv här..."
          />
        <p>Kladd för tillfället...</p>
        <button type="button" onClick={handleClear}>Ta bort</button>
        <button type="button" onClick={addText}>Lägg till</button>
      </section>
    </main>
  );
}

export default App;