import { useState } from 'react'
import './App.css'
import Sidebar from './layout/Sidebar/Sidebar'
import Content from './layout/Content/Content'
import { MenuContext } from './context/MenuContext'

function App() {
  const [MenuClass, SetMenuClass] = useState("")

  return (
    <>
      <div className='app'>
      <MenuContext.Provider value={{MenuClass,SetMenuClass}}>
          <Sidebar />
          <Content />
      </MenuContext.Provider>
      </div>
    </>
  )
}

export default App
