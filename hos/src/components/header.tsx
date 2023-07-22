'use client'


import logo from '../../public/logo.svg'
import hamburguer from '../../public/hamburguer.svg'
import Image from 'next/image'
import { useState } from 'react'

interface HeaderProps {

}

export function Header(props: HeaderProps){
    const [botao1Visivel, setbotao1Visivel] = useState(true)
    const [botao2Visivel, setbotao2Visivel] = useState(false)
    const [iniciar, setIniciar] = useState(false)

    const visibilidadeBotao = () => {
        setbotao1Visivel((prev) => !prev)
        setbotao2Visivel((prev) => !prev)
    }


    return(
        <>
        <header className='py-[5rem] px-[3rem] flex justify-between tablet:max-w-[1200px] tablet:flex tablet:items-center tablet:mx-auto tablet:px-[3rem] tablet:max-h-[82px]'>
            <Image src={logo} alt={'logo-hos'} className='w-[7rem] h-auto tablet:w-auto tablet:h-[4.3rem] tablet:ml-[3rem]' />
            <div>
            {botao1Visivel && (
                <button onClick={visibilidadeBotao} 
                className="absolute right-11 w-[4rem] h-auto flex border-2 border-vermelho rounded-md   bg-white px-0 cursor-pointer tablet:hidden ">
                    <Image src={hamburguer} alt='menu hamburguer'/>
                </button>
            )}
            {botao2Visivel && (
                <button onClick={visibilidadeBotao} 
                className='absolute px-[0.8rem] font-semibold text-vermelho text-[rem] right-11 w-[3rem] h-auto flex border-2 border-vermelho rounded-md   bg-white cursor-pointer tablet:hidden '>
                    X
                </button>
            )}

            </div>
            <div className='hidden tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto '>

                <div className='tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto tablet:text-[0.8rem] tablet:font-semibold tablet:text-grafite '>               
                        <a href="" className='mr-[1.8rem] tablet:ml-[1rem] hover:text-vermelho'>Soluções</a>
                        <a href="" className='mr-[1.8rem] hover:text-vermelho'>Sobre</a>
                        <a href="" className='mr-[1.8rem] hover:text-vermelho'>Suporte</a>
                        <a href="" className='mr-[1.8rem] hover:text-vermelho'>Universidade</a>
                        <a href="" className='mr-[3rem] hover:text-vermelho'>Blog</a>
                </div>

                <div className='tablet:flex items-center'>
                    <div className='tablet:flex tablet:justify-center tablet:items-center'>
                        <button className='tablet:bg-gradient-to-b tablet:from-laranja tablet:to-magenta tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000 tablet:text-[0.8rem] tablet:font-semibold tablet:text-white tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[1rem] '>Solicite uma demonstração</button>
                    </div>
                    <div className='tablet:flex tablet:ml-[2rem] tablet:justify-center tablet:items-center tablet:bg-white tablet:border-2 tablet:border-vermelho tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[0.8rem]'>
                        <button className='tablet:text-[0.8rem] tablet:font-semibold  tablet:text-vermelho'>Área do cliente</button>
                    </div>
                </div>
            </div>
        </header> 
            
        <div className={`bg-vermelho ${botao1Visivel ? 'hidden' : 'visible transition-all duration-300'}`}>

            <div className='tablet:flex tablet:justify-center tablet:items-center tablet:mx-auto tablet:text-[0.8rem] tablet:font-semibold tablet:text-grafite '>               
                    <a href="" className='mr-[1.8rem] tablet:ml-[1rem]'>Soluções</a>
                    <a href="" className='mr-[1.8rem] '>Sobre</a>
                    <a href="" className='mr-[1.8rem] '>Suporte</a>
                    <a href="" className='mr-[1.8rem] '>Universidade</a>
                    <a href="" className='mr-[3rem]' >Blog</a>
            </div>

            <div className='tablet:flex items-center'>
                <div className='tablet:flex tablet:justify-center tablet:items-center'>
                    <button className='tablet:bg-gradient-to-b tablet:from-laranja tablet:to-magenta tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-1000 tablet:text-[0.8rem] tablet:font-semibold tablet:text-white tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[1rem] '>Solicite uma demonstração</button>
                </div>
                <div className='tablet:flex tablet:ml-[2rem] tablet:justify-center tablet:items-center tablet:bg-white tablet:border-2 tablet:border-vermelho tablet:rounded-md tablet:w-[13rem] tablet:px-[1.5rem] tablet:py-[0.8rem]'>
                    <button className='tablet:text-[0.8rem] tablet:font-semibold  tablet:text-vermelho'>Área do cliente</button>
                </div>
            </div>
        </div>

        </>
 
    )
            }