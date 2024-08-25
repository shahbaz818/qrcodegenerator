
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [input,setInput]=useState("");
  const [hold,setHold]=useState(null)
  const [qrCode, setQrCode] = useState("");
  const [size,setSize]=useState(200)
  const [bgColor, setBgColor] = useState("");


  useEffect(()=>{
    setQrCode
    (`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${hold}&bgcolor=${bgColor}`)
  },[hold, size, bgColor])


  const generate=(e)=>{
    setHold(input)
    //console.log(input)
  }

  return (
    <>
    <div className='bg-slate-200 h-full w-full flex justify-center items-center flex-col pt-10'>
      <h1 className='text-bold text-3xl shadow-xl'>QR Code Generator</h1>
      <div className='mt-10 shadow-xl'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='border-2 rounded-lg border-gray-500 p-2 w-[300px] h-8'/>
        <button onClick={generate} className='bg-blue-500 rounded-lg hover:bg-blue-700 text-white font-bold h-[33px] w-[120px]'>Generate</button>
      </div>

      <div className='mt-5 flex space-x-3 '>
      <h5>Background Color:</h5>
          <input type="color" onChange={(e) => 
          { setBgColor(e.target.value.substring(1)) }} />
          <h5>Dimension:</h5>
          <input type="range" min="200" max="300"
           value={size} onChange={(e) => 
           {setSize(e.target.value)}} />

      </div>

      <div div className='mt-16 pb-16'>
      <img src={qrCode} alt=''/>
      <a href={qrCode} download="qrCode">
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold mt-8 h-10 w-32 ml-10 text-bold text-2xl rounded-lg'>Download</button>
      </a>


      </div>
    </div>
      
    </>
  )
}

export default App
