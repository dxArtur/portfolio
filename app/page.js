'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedin, FaGithub, FaCodeBranch } from "react-icons/fa"
import { IoDocumentText, IoGitBranchOutline } from "react-icons/io5"
import { FiClipboard, FiExternalLink } from "react-icons/fi";

export default function Home() {
  const [displayText, setDisplayText] = useState("me manda um email")
  const [buttonClicked, setButtonClicked] = useState(false)

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('artur.daniel@academico.ifpb.edu.br');
    setDisplayText("email copiado p/ sua área de transferência!");
    setButtonClicked(true)
    setTimeout(() => {
      setDisplayText("me manda um email!");
      setButtonClicked(false)
    }, 2000);
  };

  return (
      <div className="">
      <header className="  h-screen">
        <div className='flex flex-col justify-center items-center h-screen bg-teal-500'>
          <h3 className='text-xl font'>Oi, me chamo DANIEL ARTUR, e faço coisas pra internet :)</h3> 
          <div className='flex justify-center items-center'>
            <h1 className='text-8xl font-bold'>Full-stack</h1>
            <div className='flex text-3xl  drop-shadow text-pink-500  space-x-2'>
              <a className='hover:text-cyan-300' href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a className='hover:text-cyan-300' href='Currículo.pdf' download><IoDocumentText/></a>
              <a className='hover:text-cyan-300' href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className='flex justify-end'>
            <h1 className='flex flex-wrap bg-cyan-500 text-8xl font-bold ml-20'>DEVELOPER</h1>
          </div>
          <div className='flex w-full justify-end'>
            <div className='w-1/2 '>
              <p className='font-koblenz-light text-base px-16 py-2 text-right'>tenho 21 anos e me interesso por clean code e tenho um ano de experiência trabalhando como desenvolvedor full-stack freelancer </p>
            </div>
          </div>
        </div>
      </header>

      <section className="h-screen">
        <div className='flex flex-col h-screen bg-emerald-500 text-center gap-4'>
          <div className='flex justify-center py-8'>
            <h1 className='font-bold text-5xl bg-cyan-500'>Portfólio</h1>
          </div>

            <div className='flex flex-wra items-center justify-center text-center'>
              <div className='flex flex-col space-y-4 justify-center items-center mx-auto'>
                <a className='button-link h-full' href='https://github.com/dxArtur/is.sues' target="_blank" rel="noopener noreferrer"> <IoGitBranchOutline /> em desenvolvimento</a>
                <img className='image-project w-7/12 max-w-md' loading='lazy' src='is.sues.png'></img>
                <h2 className='max-w-xs'>
                  Is.sues - site de sistema de gerenciamento admnistrativo
                </h2>
              </div>
              <div className='flex flex-col space-y-4 justify-center items-center mx-auto'>
                <a className='button-link h-full' href='https://github.com/dxArtur/mais-lab' target="_blank" rel="noopener noreferrer"> <IoGitBranchOutline /> em desenvolvimento</a>
                <img className='image-project w-9/12 max-w-md' loading='lazy' src='mais-lab.png'></img>
                <h2 className='max-w-xs'>
                  MaisLab - site para empresa de desenvolvimento
                </h2>
              </div>
              <div className='flex flex-col space-y-4 justify-center items-center mx-auto'>
                <a className='href button-link h-full' href='https://github.com/dxArtur/conta-facil' target="_blank" rel="noopener noreferrer"><IoGitBranchOutline /> em desenvolvimento</a>
                <img className='image-project w-7/12 max-w-md' loading='lazy' src='conta-facil.png'></img>
                <h2 className='max-w-xs'>
                  ContaFácil - sistema de gerenciamento de pedidos de mesas em estabelecimentos
                </h2>
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col h-screen bg-cyan-700 text-center'>
          <div className='flex justify-center py-8'>
            <h1 className='font-bold text-5xl bg-emerald-500'>Sobre mim</h1>
          </div>

          <div className='pb-4 flex flex-col justify-between h-full '>
              <div className='flex-col justify-center space-y-4'>
                <span className=' font-bold text-2xl bg-cyan-400'>
                  Minha Stack
                </span>
                <div className='font-bold text-xl  justify-center '>
                  <h1>
                    Full-stack (Front-end, Back-end) e Garantia de qualidade
                  </h1>
                </div>
              
                <div className=' font-normal flex flex-col gap-2'>
                  <h1>
                    Tecnologias que uso
                  </h1>
                  <div className='flex flex-wrap justify-center gap-5 pb-4'> 
                    <img align="center" alt="DA-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></img>
                    <img align="center" alt="DA-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"></img>
                    <img align="center" alt="DA-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
                    <img align="center" alt="DA-NextJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"></img>
                    <img align="center" alt="DA-nodejs" height="30" width="40" src="https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg"></img>
                    <img align="center" alt="DA-jest" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg"></img>
                    <img align="center" alt="DA-Mongo" height="30" width="40" src="https://github.com/devicons/devicon/raw/master/icons/mongodb/mongodb-plain.svg"></img>
                    <img align="center" alt="DA-PostgreSQL" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"></img>
                    <img align="center" alt="DA-Prisma" height="30" width="40" src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4"></img>
                  </div>
                </div>
              <div className='flex flex-col justify-center items-center ' >
                <h4 className='  bg-cyan-700 p flex text-base'>  Interessado em começar um projeto 👇, </h4>
                <div className=' flex justify-center items-center '>
                  <h1 className='p-2 rounded-xl items-center justify-center flex brder-pink-500 brder-2 border-solid font-semibold text-3xl bg-pink-500'>
                  
                    <div className={`clipboard-email font-thin text-3xl ml-2 text-white-500 ${buttonClicked ? 'text-cyan-80 text-base' : ''}`} onClick={copyEmailToClipboard} >
                      <button>{displayText}</button>
                    </div>
                  </h1>
                  
                </div>
                
              </div>

              </div>


          </div>

        </div>
      </section>


      <footer className='bg-cyan-800 p-2 '>
        <p className='flex justify-center'>Daniel Artur Full-stack developer</p>
        <div className='flex items-center justify-center  gap-6'>
          <div className='flex '>
            <p>Copyright © 2023 Daniel Artur Full-stack Developer</p>
          </div>
          <div className='flex gap-4'>
              <a href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a href='Currículo.pdf' download><IoDocumentText/></a>
              <a href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
          </div>
        </div>
      </footer>
    </div>
  )
}


