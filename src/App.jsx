import './App.css'
import Counter from "./components/Counter"
import ToggleButton from "./components/ToggleButton"
import NameForm from "./components/NameForm"
import CounterWithEffect from "./components/CounterWithEffect"
import Card from "./components/Card/Card"
import Button from "./components/Buttons/Button"
import TailwindCssText from "./components/Text/Text"
import StaticComponent from "./components/StaticComponent/StaticComponent"
import UserList from './components/UserList/UserList'
import UserListWithLoading from './components/UserListWithLoading/UserListWithLoading'
function App() {

  return (
    <>
    <UserListWithLoading />
      <NameForm />
      <TailwindCssText />
      <Button blue>Primary Button</Button>
      <Button>Secondary Button</Button>
      <Counter />
      <ToggleButton />
      <CounterWithEffect />
      <Card />
      <StaticComponent />
      <UserList />
    </>
  )
}

export default App
