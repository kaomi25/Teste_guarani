import type { NextPage } from 'next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import Image from 'next/image';
import bgimg from '../public/imgs/img4.jpg';
import { FormEvent } from 'react';


const Home: NextPage = () => {


  /*

  {
"nome": "Produto 1",
"preco": 1.99,
"codigo": "UX290",
"embalagem":
"UN", "multiplo":
3,
"ipi": 5 // porcentagem 0 à 100
}

   */

  function submit(e: FormEvent<HTMLFormElement>){    
    const nome = document.getElementById('nome') as HTMLInputElement; 
    const preco = document.getElementById('preco') as HTMLInputElement;
    const codigo = document.getElementById('codigo') as HTMLInputElement;
    const embalagem = document.getElementById('embalagem') as HTMLInputElement;
    const un = document.getElementById('un') as HTMLInputElement;
    const mult = document.getElementById('mult') as HTMLInputElement;
    const ipi = document.getElementById('ipi') as HTMLInputElement;

    console.log(nome.value);

    fetch('https://guarani-back.herokuapp.com/produtos', {
      method: 'POST',
      body: JSON.stringify({
        "nome": nome.value,
        "preco": preco.value,
        "codigo": codigo.value,
        "embalagem": embalagem.value,
        "multiplo": mult.value,
        "un": un.value,
        "ipi": ipi.value
      }),
    }).then((response) => response.json()).then(data => {
      console.log(data);
    })
  }
  
  return (
    <div className='flex h-screen w-full'>
     <div className='bg-white mt-5 md:mx-auto md:w-6/12 md:my-auto'>
      <form onSubmit={(e)=>{e.preventDefault(); submit(e)}} className='bg-white' method='POST'>
        <input id="nome" className='bg-slate-200 border-b-2 rounded-lg ml-9 mt-2' placeholder='Nome'/>
        <input type={"number"} step={'0.01'} id="preco" className="bg-slate-200 ml-9 mt-2 border-b-2 rounded-lg"placeholder='Preço'/>
        <input id="codigo" className='bg-slate-200 ml-9 mt-2 border-b-2 rounded-lg'  placeholder='Cod.Produto'/>
        <input id="embalagem" className='bg-slate-200 ml-9 mt-2 border-b-2 rounded-lg ' placeholder='Embalagem'/>
        <input type={"number"} step={'0.01'} id="un" className='ml-9 w-14 bg-slate-200 text-center border-b-2 rounded-lg' placeholder='N.UN'/>
        <input type={"number"} step={'0.01'} id="mult" className='ml-9 w-14 mt-2 bg-slate-200 text-center border-b-2 rounded-lg' placeholder='MULT.'/>
        <input type={"number"} step={'0.01'} id="ipi" className='ml-9 w-14 bg-slate-200 text-center border-b-2 rounded-lg' placeholder='IPI'></input>
        <button type={'submit'} className='border rounded-full bg-gray-400 w-full h-8 mt-3'>Cadastrar Produto</button>
      </form>
     </div>
      <style global jsx>{
        `
        body {
          user-select: none;
        }
        `
      }</style>
    </div>

  )
}

export default Home
