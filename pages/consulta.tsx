import type { NextPage } from 'next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import Image from 'next/image';
import bgimg from '../public/imgs/img4.jpg';
import { FormEvent } from 'react';
import React from 'react';

type Produto = {
  nome: string;
  preco: number;
  codigo: string;
  embalagem: string;
  multiplo: number;
  un: string;
  ipi: number;
}


const Home: NextPage = () => {
  const [itens, setItens] = React.useState<Produto[]>([]);
  const [texto, setTexto] = React.useState<string>('');

  React.useEffect(() => {
    fetch('https://guarani-back.herokuapp.com/produtos').then((response) => response.json()).then(data => {
      setItens(data.content);
    })
  }, []);

  return (
    <div className='flex h-screen w-full'>
      <div className='bg-white mt-5 md:mx-auto md:w-6/12 md:my-auto'>
       
        <table>
          <thead >
            <tr>
              <th className=' text-left bg-gray-500 border-b-2'>Nome</th>
              <th className=' bg-gray-400 border-b-2 border-l-2'>Preço</th>
              <th className=' bg-gray-300 border-b-2 border-l-2'>Código</th>
              <th className=' bg-gray-200 border-b-2 border-l-2'>Embalagem</th>
              <th className=' bg-gray-100 border-b-2 border-l-2 '>Multiplo</th>
              <th className=' bg-gray-50 border-l-2'>IPI</th>
            </tr>
          </thead>
          <tbody>
          {itens.map((item) => (
            <tr>
              <td className='text-left text-white bg-gray-500 border-b-2'>{item.nome}</td>
              <td className='text-left text-white bg-gray-400 border-b-2 border-l-2 border-gray-500'>{item.preco}</td>
              <td className='text-left text-white bg-gray-300 border-b-2 boder-l-2 border-gray-400'>{item.codigo}</td>
              <td className='text-left text-black bg-gray-200 border-b-2 border-l-1 border-gray-400'>{item.embalagem}</td>
              <td className='text-left text-black bg-gray-100 border-b-2 border-gray-400'>{item.multiplo}</td>
              <td className='text-left text-black bg-gray-50 border-b-2 border-gray-400'>{item.ipi}</td>
            </tr>
          ))}
          </tbody>
        </table>
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
