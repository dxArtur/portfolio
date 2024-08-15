'use client'
import Image from 'next/image'
import Link from 'next/link'
import {tech, types} from '../public/data.js'
import {projects} from '../public/projects.js'
import React, { useEffect, useState } from 'react'
import { FaLinkedin, FaGithub, FaCodeBranch } from "react-icons/fa"
import { IoDocumentText, IoGitBranchOutline } from "react-icons/io5"
import { FiClipboard, FiExternalLink } from "react-icons/fi";

export default function Home() {

  const [displayText, setDisplayText] = useState("me manda um email")
  const [buttonClicked, setButtonClicked] = useState(false)
  const [backendTechnologies, setBackendTechnologies] = useState([])

  

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('artur.daniel@academico.ifpb.edu.br');
    setDisplayText("email copiado p/ sua área de transferência!");
    setButtonClicked(true)
    setTimeout(() => {
      setDisplayText("me manda um email!");
      setButtonClicked(false)
    }, 2000);
  }

  const frontend = tech.filter(item => item.type === 'frontend')
  const backend = tech.filter(item => item.type === 'backend')


  return (
      <div className="">
      <header className=" text-white-500 h-screen">
        <div className='flex flex-col justify-center items-center h-screen bg-teal-500'>
          <p id="greet" className='text-md sm:text-xl font-normal'>Oi, me chamo Daniel Artur e faço coisas pra internet, </p> 
          <div className="">
          <span className=''>sou <span className='bg-fuchsia-500 text-2xl sm:text-4xl font-bold drop-shadow-md'>Engenheiro de software</span></span>
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-6xl sm:text-8xl font-bold drop-shadow-md '>Full-stack</p>
            <div className='flex text-3xl  drop-shadow text-fuchsia-400  space-x-2'>
              <a id="my-github-link-icon" className='hover:text-cyan-300' href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a id="cv-download-icon" className='hover:text-cyan-300' href='Currículo.pdf' download><IoDocumentText/></a>
              <a id="my-linkedin-link-icon" className='hover:text-cyan-300' href='https://www.linkedin.com/in/daniel-artur-28a410219/' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            </div>
          </div>
          <div className='flex justify-end drop-shadow-md'>
            <p className='flex flex-wrap bg-cyan-500 text-6xl sm:text-8xl font-bold ml-20'>DEVELOPER</p>
          </div>
          <div className='flex w-full justify-center'>
          <p id="greet" className='mt-1 text-xl sm:text-xl font'>mas pode me chamar de daniel códigos :)</p> 
          
          </div>
        </div>
      </header>

      <section className=" pb-8 overflow-auto-hidden space-y-4 bg-slate-100">
        
          <div className='flex text-center  justify-center py-8'>
            <h1 className='font-bold text-5xl bg-cyan-500'>Portfólio</h1>
          </div>
          <div className=' grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 p-4 gap-10 items-start justify-center text-center'>
          {projects.map(project =>(

          
            <div key={project.name} className='border border-cyan-800/900 p-5 rounded flex flex-col space-y-4 justify-center items-center mx-auto'>
                {project.status === 'developtment' && (
                  <div className='flex flex-row gap-1 '>
                    <a className='truncate button-link ' href='https://github.com/dxArtur/is.sues' target="_blank" rel="noopener noreferrer"> <IoGitBranchOutline /> em desenvolvimento</a>
                    <a className='truncate text-gray-800 button-link' href={project.about} target="_blank" rel="noopener noreferrer">veja no github <FaGithub/></a>
                  </div>
                )}
                {project.status === 'production' && (
                  <div className='flex flex-row gap-1 '>
                    <a className='truncate button-link ' href='https://github.com/dxArtur/is.sues' target="_blank" rel="noopener noreferrer"> <IoGitBranchOutline /> em produção</a>
                    <a className='truncate button-link ' href={project.link} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink /> visite
                    </a>
                  </div>
                )}
              
              
              <Image className='image-project w-7/12 max-w-md' loading='lazy' alt={project.name} src={project.src} width={50} height={50}/>
              <h2 className='text-gray-800  font-bold max-w-s'>
                {project.name}
              </h2>
              <p className='text-gray-800 font-normal words-break  items-start   max-w-md '>{project.about}</p>
            </div>
          )
          )}

            {/* <div className='flex flex-wra items-center justify-center text-center'>
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
              <div className='border pt-4 rounded-md flex flex-col space-y-4 justify-center items-center mx-auto'>
                <a className='href button-link h-full' href='https://github.com/dxArtur/conta-facil' target="_blank" rel="noopener noreferrer"><IoGitBranchOutline /> em desenvolvimento</a>
                <img className='image-project w-7/12 max-w-md' loading='lazy' src='conta-facil.png'></img>
                <h2 className='max-w-xs'>
                  G10Solution - site para empresa de soluções em conectividade
                </h2>
              </div> */}
            </div>
        
      </section>

      <section className="overflow-y-auto space-y-4 bg-sky-950">
        <div className='text-center justify-center text-gray-400'>
          <h1 className=' py-8  font-bold text-5xl text-teal-500'>Sobre mim</h1>
          <p className=' font-bold text-3xl '>Posso transformar suas ideias em realidade</p>
          <p className=' px-6 font-light text-1x1 drop-shadow-md'>Graduando em Análise e Desenvolvimento de Sistemas pelo IFPB. Engenheiro full-stack de software e QA, especializado no desenvolvimento de APIs REST e no desenvolvimento de aplicações. Apaixonado por clean code, design patterns e engenharia de software, busco constantemente melhorar.</p>

          <div className='flex text-1xl text-pink-500 items-center text-center justify-center gap-4 font-light'>
            <p className='text-gray-400'>Veja mais sobre mim em: </p>
            <a className='' href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
            <a className='' href='https://github.com/dxArtur' target="_blank" rel="noopener noreferrer"><FaGithub/></a>
            <a className='' href='Currículo.pdf' download><IoDocumentText/></a>
          </div>
        </div>
        <div className=' text-center justify-center'>
          <h1 className='    item-center justify-center text-2xl font-bold text-teal-500' >Tecnologias que eu domino</h1>
          <div className=' p-4 grid grid-cols-2  gap-4 items-start justify-center '>
          {types.map(type => (
            <div key={type} className=''>
              <h3 className='rounded-t font-bold p-2 pl-4 text-start text-slate-700 bg-slate-100 -cyan-400/50 '>{type}</h3>
              {/* <ul className='flex flex-wrap items-start // className='rounded w-1/2 justify-center items-center bg-gray-700/90''> */}
              <ul  className='bg-slate-100 p-2 flex flex-wrap rounded-b grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-start'>
              {tech.filter(item => item.type.includes(type)).map(techItem =>(
                <div key={techItem.name} className='flex shadow-sm items-center bg-slate-100/30 rounded border border-slate-400/30 w -2/5 border border-1 p-2 gap-2 m-2 '>
                  
                    <Image  className='' align="center" alt={techItem.name} height={30} width={40} src={techItem.src}/>
                    <h3 className='font-medium text-sky-950 truncate w-24'>{techItem.name}</h3>
                  </div>
              ))}
              </ul>
              </div>
          ))}
          </div>




              {/* {backend.map(techItem => isso ta errado
              
              (

                <div className='flex items-center  bg-gray-800/60 rounded border-white-700 w-2/5 border border-1 p-2 gap-2 m-2 '>
                  <img align="center" alt={techItem.name} height="30" width="40" src={techItem.src}></img>
                  <h3 className='truncate w-24'>{techItem.name}</h3>
                </div>
              ))}
              </ul>
            </div>
            <div className='rounded w -2/5 bg-gray-700/90'>
            <h3 className='rounded-t font-bold pl-4 text-start bg-fuchsia-400/50'>Frontend</h3>
              <ul className='flex flex-wrap justify-items-stretch'>
              {frontend.map(techItem =>
              
              (
                <div className='bg-gray-800/60  rounded border-white-700 w-2/5 border border-1 p-2 gap-2 8 m-2 flex items-center'>
                  <img align="center" alt={techItem.name} height="30" width="40" src={techItem.src}></img>
                  <h3 className='truncate w-24'>{techItem.name}</h3>
                </div>
              ))}
              </ul>
            </div>
            <div className='rounded w -2/5 bg-gray-700/90'>
            <h3 className='rounded-t font-bold pl-4  text-start bg-fuchsia-400/50'>Languages</h3>
              <ul className='flex flex-wrap justify-items-stretch'>
              {frontend.map(techItem =>
              
              (
                <div className='bg-gray-800/60  rounded border-white-700 w-2/5 border border-1 p-2 gap-2 8 m-2 flex items-center'>
                  <img align="center" alt={techItem.name} height="30" width="40" src={techItem.src}></img>
                  <h3 className='truncate w-24'>{techItem.name}</h3>
                </div>
              ))}
              </ul>
            </div>
            <div className='rounded w -2/5 bg-gray-700/90'>
              <h3 className='rounded-t font-bold pl-4 text-start bg-fuchsia-400/50'>Q.A.</h3>
              <ul className='flex flex-wrap justify-items-stretch'>
              {frontend.map(techItem =>
              
              (
                <div className='bg-gray-800/60  rounded border-white-700 w-2/5 border border-1 p-2 gap-2 8 m-2 flex items-center'>
                  <img align="center" alt={techItem.name} height="30" width="40" src={techItem.src}></img>
                  <h3 className='truncate w-24'>{techItem.name}</h3>
                </div>
              ))}
              </ul>
            </div>
        </div> */}


        <div className='rounded  flex flex-row  justify-between mx-4 my-5 text-center justify-center  space-y-8  p-4'>
          <div className='flex flex-col rounded bg-slate-100 gap-2 text-gray-500 items-center justify-center font-normal'>
            <h1 className='text-center font-bold text-teal-500'>Nossos serviços</h1>
            <div className=' flex flex-col gap-2 p-4 accent-pink-500  sm:text-start'>
              <div className=' gap-1 p-1 border flex flex-row hover:bg-slate-200 '>
                <input type="checkbox" className='' checked={true} disabled={false} />
                <label>
                  Desenvolvimento de aplicações web
                </label>
              </div>
              <div className='gap-1 p-1 border flex flex-row hover:bg-slate-200'>
                <input className='' checked={true} disabled={false} type="checkbox"/>
                <label>
                Desenvolvimento de APIs
                </label>
              </div>
              <div className='gap-1 p-1 border flex flex-row hover:bg-slate-200'>
                <input className='' checked={true} disabled={false} type="checkbox"/>
                <label>
                  Desenvolvimento de aplicativos
                </label>
              </div>
              <div className='gap-1 p-1 border flex flex-row hover:bg-slate-200'>
                <input className='' checked={true} disabled={false} type="checkbox"/>
                <label>
                  Hospedagem e deploys de websites
                </label>
              </div>
            </div>
          </div> 
          
          
          <div className='space-y-2 text-gray-400 flex flex-col items-end'>
          <h1 className='sm:text-center font-bold text-3xl text-teal-500 text-end'>Entre em contato comigo</h1>
          <p className='sm:text-start text-end'>Interessado em começar um projeto ou entrar em contato 👇,</p>
          <button className={`m-2 clipboard-email flex flex-start bg-slate-100 p-4 rounded-md text-teal-800 font-semibold${buttonClicked ? 'text-cyan-80 text-base font-semibold' : ''}`} onClick={copyEmailToClipboard} >{displayText}</button>
          </div>
  
        </div>
      </div>
            
        {/* <div className='flex flex-col h-screen bg-fuchsia-200 text-center'>
          <div className='flex justify-center py-8'>
            <h1 className='font-bold text-5xl text-teal-500'>Sobre mim</h1>
          </div>
          <div className=' justify-center py-8'>
            <p className='font-bold text-2xl text-gray-500'>Posso transformar suas ideias em realidade</p>
            <p className='font-light text-1xl text-gray-500'>Posso transformar suas ideias em realidade</p>
          </div>

          <div className='p-10 '>
            <h1>Tecnologias que eu domino</h1>
              <div className='justify-center flex flex-row  text-white-500 gap-4 bg-gray-00'>
                <div className="flex flex-col rounded w-1/3 bg-gray-900/80">
                  <h1 className="pt-2 m-4">Backend</h1>
                  <div className='pt-2 flex flex-row flex-wrap gap-5 pb-4'>
                    <div className='w-1/2 flex p-1 items-center p-3 m-3  border rounded border-1 bg-gray-800/50'>
                      <img align="center" alt="DA-nodejs" height="30" width="40" src="https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg"></img>
                      <h3 className='ml-5'>Node.js</h3>
                    </div>
                    <div className='w-1/2 flex p-1 items-center p-3 m-3  border rounded border-1 bg-gray-800/50'>
                      <img align="center" alt="DA-nodejs" height="30" width="40" src="https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg"></img>
                      <h3 className='ml-5'>Node.js</h3>
                    </div>
                    <div className='w-1/2 flex p-1 items-center p-3 m-3  border rounded border-1 bg-gray-800/50'>
                      <img align="center" alt="DA-nodejs" height="30" width="40" src="https://github.com/devicons/devicon/raw/master/icons/nodejs/nodejs-plain.svg"></img>
                      <h3 className='ml-5'>Node.js</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded w-1/3 bg-gray-900/80	">
                <h1 className="pt-2"> Frontend</h1>
                  <div className='pt-2 flex flex-col justify-center gap-5 pb-4'>
                    <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
                    <img align="center" alt="NextJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"></img>

                  </div>
              </div>
          </div>sad
        </div>asda

          <div className='pb-4 flex flex-col justify-between h-full '>
              <div className='flex-col justify-center space-y-4'>
                <span className=' font-bold text-2xl bg-cyan-400'>
                  Minha Stack
                </span>
                <div className='font-bold text-xl text-gray-400  justify-center '>
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
                    <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
                    <img align="center" alt="NextJs" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"></img>
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

        </div> */}
      </section>


      <footer className='bg-cyan-900 p-2 '>
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


