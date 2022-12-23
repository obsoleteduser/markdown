import { Link } from 'react-router-dom'
import './App.css'
import { Editor } from './components/Editor'

import {Route, Routes} from 'react-router-dom'
import { Display } from './components/Display'
import { useState } from 'react'

function App() {
 const [text, setText] = useState()

  return (
    <div className="App">
      <header>
        <Link className='link' to='/'>Edit file</Link>
        <Link className='link' to='/preview'>Preview</Link>
      </header>
      
      <Routes>
        <Route path={'/'} element={<Editor text={text} setText={setText}></Editor>}></Route>
        <Route path={'/preview'} element={<Display text={text} setText={setText}></Display>}></Route>
      </Routes>

    </div>
  )
}

export default App
