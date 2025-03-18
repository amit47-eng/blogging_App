import Header from './header/header'
import './App.css'
import Aside from './aside/aside'
import Fotter from './fotter/fotter'
import Body from './main/body'

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <div className="flex-1 overflow-y-auto h-screen">
          <Body />
        </div>
      </div>
      <Fotter />
    </>
  )
}

export default App
