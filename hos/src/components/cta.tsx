import Image from "next/image"
import fundo from '../../public/fundoCta.png'
import impulsionar from '../../public/impulsionar.svg'
interface CtaProps {

}

export function Cta(props: CtaProps){
    
    return(
        <div >
            <Image src={fundo} alt="" className="relative w-auto  h-[18.6rem] tablet:h-[30rem] tablet:w-[90rem]"/>
            <div className="w-[20rem] h-[13.9rem] bg-white rounded-lg absolute left-5 bottom-[-219rem] tablet:w-[57.5rem] tablet:h-[24rem] tablet:drop-shadow-lg tablet:bottom-[-211rem] tablet:left-[16rem] ">
                <div>
                    <div className="flex mx-auto bg-white justify-center w-[2.9rem] h-[2.9rem] -mt-6 drop-shadow-botao rounded-lg tablet:w-[6.2rem] tablet:h-[6.2rem] tablet:rounded-3xl">
                        <Image src={impulsionar} alt="" className="tablet:w-[3.9rem]  tablet:h-auto"/>
                    </div>
                    <h3 className="text-[0.68rem] flex mx-auto justify-center mt-[2rem] text-grafite tablet:text-[1.25rem] tablet:mt-[3rem]">Descubra como podemos impulsionar seus resultados</h3>
                    <p className="text-[1.2rem] font-extrabold text-center w-[16.8rem] mt-[0.4rem] mb-[1.3rem] flex mx-auto justify-center leading-tight text-grafite tablet:text-[2rem] tablet:w-[39.1rem] tablet:mt-[1rem] tablet:mb-[3rem]">Solicite uma demonstração agora mesmo</p>
                    <button className="bg-vermelho w-[14rem] h-[2rem] flex mx-auto items-center tablet:w-[22rem] tablet:h-[3.5rem]">
                        <p className="text-[0.9rem] text-white flex mx-auto tablet:text-[1.25rem]">Converse com um especialista</p>
                    </button>
               </div>
            </div>

        </div>
        )    

}
    
