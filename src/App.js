import Counter from "./features/counter/Counter";
import Todo from "./features/Todo/Todo";

function App() {
  return (
    <div>
      <h1>Welcome to the Redux Toolkit Example</h1>
      <p>This is a simple application demonstrating the use of Redux Toolkit for state management.</p>
      <p>Feel free to explore the Counter and Todo features!</p>
      <Counter />
      <Todo />

    </div>
  );
}

export default App;
