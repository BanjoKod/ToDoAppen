import { useState } from 'react'

function App(){
    const [todos, setTodos] = useState([
      "Fyll i din lista här"
    ]);

    const [draft, setDraft] = useState([
    {id: 1, text: "Fyll i din text här", done: false}
  ]);
  
  function addText(){
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, {id: Date.now(), text: text, done: false }]);
    setDraft("");
  }
  
  function clearList(){
    setTodos([]);
  }

  function handleChange(e){
    setDraft(e.target.value);
  }

  function handleClear(){
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
    <div className='todolistan'>
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
            <button class="remove" onClick={() => removeTodo(t.id)}>Ta bort</button>
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
          <button class="add" onClick={addText}>Lägg till i listan</button>
          <h1>Just do it!</h1>        
        <div><button class="delete" onClick={handleClear}>Ta bort text i rutan</button></div>
        <div><button class="clear" onClick={clearList}>Ta bort hela listan</button></div>
      </section>
    </div>
  );
}

export default App;