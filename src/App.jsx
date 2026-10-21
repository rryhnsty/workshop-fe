import { useState } from 'react'
import kartu from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const nama = "dito jomok";
  const sapa = <h1 className="text-3xl font-bold text-blue-600 mb-4">Halo {nama}</h1>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100">
      {sapa}
      <button
        type="button"
        onClick={() => setCount((count) => count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Count is {count}
      </button>
      
      <div className="mt-4">
        {kartu("Hi all", <p>Ini adalah isi dari kartu yg tadi dibuat</p>)}
      </div>
    </div>
  )
}

export default App