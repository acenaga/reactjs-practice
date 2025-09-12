import Counter from "./components/Counter"
import ToggleButton from "./components/ToggleButton"
import NameForm from "./components/NameForm"
import CounterWithEffect from "./components/CounterWithEffect"
import Card from "./components/Card/Card"
import Button from "./components/Buttons/Button"
function App() {

  return (
    <>
      <NameForm />
      <Button blue>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Counter />
      <ToggleButton />
      <CounterWithEffect />
      <Card />
    </>
  )
}

export default App
