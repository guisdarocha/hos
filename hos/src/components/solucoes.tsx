import Image from "next/image"
import laptop from '../../public/laptopSolucoes.png'
import flecha from '../../public/pequenaFlechaDireita.svg'

interface SolucoesProps {

}

export function Solucoes(props: SolucoesProps){
    
    return(
        <div className="bg-fundo ">
            <div className="pt-[0.3rem] tablet:flex tablet:max-w-[1220px] tablet:mx-auto tablet:pt-[4rem] tablet:justify-center tablet:items-center">
               <div className="mx-auto">
                    <h2 className="text-[1.5rem] text-grafite font-extrabold leading-tight text-center tablet:text-left tablet:text-[2rem] tablet:ml-[5rem] tablet:w-[34rem]">Modernize o atendimento na sua farmácia ou drogaria</h2>  
                    <p className="text-[0.87rem] text-grafite mx-auto my-[1.38rem] w-[17.2rem] text-center tablet:text-left tablet:text-[1.25rem] tablet:ml-[5rem] tablet:w-[30rem]">Melhore suas vendas oferecendo um atendimento rápido e personalizado.
                    Aumentando a satisfação dos clientes e os fidelizando à sua farmácia.</p>
                    <button className="hidden tablet:ml-[4.8rem] tablet:flex tablet:items-center tablet:justify-center tablet:visible tablet:w-[10rem] tablet:h-[3.5rem] tablet:mr-0 tablet:bg-gradient-to-b from-magenta to-laranja tablet:rounded-lg tablet:hover:bg-gradient-to-b tablet:hover:from-darker tablet:hover:to-darker tablet:hover:duration-500">
                     <p className="text-fundo text-[1.1rem] text-center pr-[0.5rem]">Saiba mais</p>
                     <Image src={flecha} alt="" />
                    </button>
                </div>

                
            
            <Image src={laptop} alt='' className="mx-auto max-w-[20rem] h-auto tablet:max-w-[45rem] tablet:mr-[3rem] "/>

            </div>
        </div>
        )    

}
    
