import Counter from "./components/Counter";
import PaletteColor from "./components/PaletteColor";
import TodoApp from "./components/TodoApp";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  return(
    <div className="App">
      <Counter />
      <PaletteColor />
      <TodoApp />
      <SignUpForm />
    </div>
  )
}

export default App;
