import { useRef } from "react";



const Artur = () =>{
    const numberRef = useRef(null)
    let a = ()=>{
    if(numberRef.current.value > 100){
        numberRef.current.value=''
    }
}
    let b = ()=>{
        if(numberRef.current.value > 0 && numberRef.current.value < 18 ){
            alert("siz uşaqsınız !")

        }else if(numberRef.current.value >=18 && numberRef.current.value <= 29){
            alert("siz gəncsiniz !")

        }else if(numberRef.current.value >=30 && numberRef.current.value <= 50){

            alert("siz orta yaşlısınız !")
        }else if(numberRef.current.value >=51){

            alert("siz Qocasınız !")
        }
    }
    
    return <div>
    <button onClick={b}  id="btn1" className='bg-cyan-500 shadow-lg shadow-cyan-500/50 py-2  px-7 rounded-xl m-5 border-3 transition-all saturate-50 hover:bg-black text-white'>Button</button>
    <input onChange={a} ref={numberRef} type="number" placeholder="Old" className=" border-2 outline-none" id="numberInput" />

    </div>
}

export default Artur