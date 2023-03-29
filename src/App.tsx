import "./app.css";
import AlbumsGrid from "./components/Albums/AlbumsGrid";
import TodosList from "./components/Todos/TodosList";

function App() {
  return (
    <div className="app">
      <TodosList />
      <AlbumsGrid />
    </div>
  );
}

export default App;
