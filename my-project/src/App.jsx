
import './App.css';
// import './component.css';
import {Component, useEffect,useRef, useState} from 'react'



function App() {
   const [name, setnickname] = useState("");
   const [password, setpassword] = useState("");
   const [regnick, setregnick] = useState("")
   const [regpass, setregpass] = useState("")
   
   const pRef = useRef(null);
   const p1Ref = useRef(null);
   const p2Ref = useRef(null);
   const nick = useRef(null);
   const pass = useRef(null);
   const hacked = useRef(null)
   const login = useRef(null)
   const app = useRef(null)
   const regName = useRef(null)
   const regPass = useRef(null)
   const Register = useRef(null)

   useEffect(()=>{
    
    if(name=="Nebuchadnezzar" && password == "" ){
      p1Ref.current.innerHTML="Yalnızca Username Tapıldı !"
      p2Ref.current.innerHTML=""
      pRef.current.innerHTML=""
  
     }else if(name == "" && password == ""){
      pRef.current.innerHTML="Məlumatları daxil edin !"
      p1Ref.current.innerHTML=""
     p2Ref.current.innerHTML=""
     
    }else if(name == "Nebuchadnezzar" && password !== "12345"){
      pRef.current.innerHTML=""
      p1Ref.current.innerHTML="Yalnızca Username Tapıldı !"
     p2Ref.current.innerHTML="sifre yalnisdir"

    }else if(name == "" && password == "12345"){
      pRef.current.innerHTML=""
      p1Ref.current.innerHTML=""
     p2Ref.current.innerHTML="Yalnızca Şifrə Tapıldı !"

    }else if(name == "" && password == ""){
      pRef.current.innerHTML="Məlumatları daxil edin !"
      p1Ref.current.innerHTML=""
     p2Ref.current.innerHTML=""


    }else if(name !=="Nebuchadnezzar" && password == "12345" ){
       p1Ref.current.innerHTML="Username doğru daxil edilməyib !" 
       p2Ref.current.innerHTML="Yalnızca Şifrə Tapıldı !"
       pRef.current.innerHTML=""

     }else if(name =="Nebuchadnezzar" && password == "12345"){
       pRef.current.innerHTML="Hesab Hack Olundu  :) !"
       p1Ref.current.innerHTML=""
       p2Ref.current.innerHTML=""

     } else if (name !=="Nebuchadnezzar"  && password == ""){
      pRef.current.innerHTML=""
      p1Ref.current.innerHTML="Username doğru daxil edilməyib !"
     p2Ref.current.innerHTML=""

    } else if (name ==""  && password !== "12345"){
      pRef.current.innerHTML=""
      p1Ref.current.innerHTML=""
     p2Ref.current.innerHTML="şifrə doğru daxil edilməyib !"

    }else if (name !=="Nebuchadnezzar" && password !== "12345"){
        pRef.current.innerHTML="username və şifrə doğru daxil edilməyib !!"
        p1Ref.current.innerHTML=""
       p2Ref.current.innerHTML=""

      }else if(name.value == "" && password == "12345"){
        pRef.current.innerHTML=""
        p1Ref.current.innerHTML="Username daxil edilmeyib !"
       p2Ref.current.innerHTML="Şifrə Tapıldı !"

      }else if(name.value == "Nebuchadnezzar" && password == ""){
        pRef.current.innerHTML=""
        p1Ref.current.innerHTML="Username Tapıldı  !"
       p2Ref.current.innerHTML="Şifrə daxil edilməyib!"

      }
  })
  
  function submit(event) {
    event.preventDefault()
    if(pRef.current.innerHTML == "Hesab Hack Olundu  :) !"){
      alert("Siz Hesaba Daxil Oldunuz ! 'Enter'ə basaraq davam edin..")
      app.current.style.margin="0"
      app.current.style.height="0"
      hacked.current.style.display="flex"
      login.current.style.display="none"

    }else if(nick.current.value == "" && pass.current.value == ""){
      alert("Melumatları daxil edin !")
    }
  }
  function register(event){
    event.preventDefault()
    if(regnick == "" && regpass == "" ){
      alert("Qeydiyyati tamamlayin !")
    }else if(regnick !== "" && regpass == "" ){
      alert("Qeydiyyati tamamlayin !")
    }else if(regnick == "" && regpass !== "" ){
      alert("Qeydiyyati tamamlayin !")
    }else if(regnick !== "" && regpass !== ""){
      alert("Tebrikler qeydiyyatdan kecdiniz !")
      Register.current.style.display="none"
      login.current.style.display="block"
    }
    
  }
  return (
    <>
    <div className="App bg-center bg-no-repeat bg-cover  h-screen" ref={app}>
    <div className='login flex flex-col items-center' ref={Register}>
      <h1 className=' text-white text-4xl mb-5'>Register Now</h1>
      <input placeholder='nickname' className='nick mb-4' ref={regName} onChange={e => setregnick(e.target.value)}></input>
     
      <input placeholder='password' className='pass mb-4' ref={regPass} onChange={e =>setregpass(e.target.value)}></input>
     
      <button className='submit' onClick={register}>Register</button>
      
      </div>
      <div className='login hidden' ref={login}>
      <h1 className=' text-white text-4xl mb-4'>Login</h1>
      <input placeholder='nickname' className='nick' ref={nick} onChange={e => setnickname(e.target.value)}></input>
      <p className='text-white text-xl' ref={p1Ref}></p>
      <input placeholder='password' className='pass' ref={pass} onChange={e =>setpassword(e.target.value)}></input>
      <p className='text-white text-xl' ref={p2Ref}></p>
      <button className='submit' onClick={submit}>Submit</button>
      <p className='text-white text-xl' ref={pRef}></p>
      </div>
    </div>
    <div className="background bg-center bg-no-repeat bg-cover w-full h-screen hidden justify-center items-center" ref={hacked}>
        <div className=" w-full flex justify-center items-center ">
            <p className="flex text-white text-bg text-3xl">Nebuchadnezzar Hacked By You</p>
        </div>
    </div>
    </>

  )
  
  
}


export default App;
