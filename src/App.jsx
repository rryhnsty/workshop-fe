import { useState } from 'react'
import Kartu from './Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  const nama = "Hello world!";
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
      
      <div className="mt-4 flex-col items-center justify-center">
        <Kartu judul="test" flex-col items-center justify-center  >
          <p>ini adalah isi dari kartu</p>
          <div className="flex flex-col items-center justify-center mt-4">
          <button type="button" onClick={() => alert('button di dalam kartu diklik')} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Klik Saya
          </button>
          </div>
        </Kartu>
      </div>
    </div>
  )
}

export default App