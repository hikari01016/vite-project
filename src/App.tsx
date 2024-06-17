import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const BASE_URL = "http://localhost:3000";

  async function ping() {
    const res = await fetch(BASE_URL + "/ping");
    console.log(await res.text());
  }

  ping();


  return (
    <>
      <div>
        <header>
          <h1>FUN掲示板</h1>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="beta.html">Topic</a></li>
              <li><a href="https://www.fun.ac.jp/">Official</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </nav>
        </header>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="Threads">
        <></>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// function Comment() {
//   const i = 0;
//   for(i = 0; i < comments.length; i++) {
//     print(commets[i]"\n");
//   }
// }

export default App
