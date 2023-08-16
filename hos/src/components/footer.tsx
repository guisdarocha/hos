import Image from "next/image"
import logo from '../../public/logo.svg'
import facebook from '../../public/facebook.svg'
import instagram from '../../public/instagram.svg'
import linkedin from '../../public/linkedin.svg'
import youtube from '../../public/youtube.svg'
import Link from 'next/link'
import flecha from '../../public/arrow.svg'

interface FooterProps {

}

export function Footer(props: FooterProps){
    
    return(
      <footer className="bg-fundofooter w-auto h-[58rem] tablet:h-[22rem] tablet:bg-fundoescuro">
        <div className="mx-auto tablet:flex tablet:max-w-[1200px] tablet:pt-[3rem] tablet:justify-center">

            <div className="">
                <Link href='/'> 
                    <Image src={logo} alt="" className='w-[4.1rem] h-auto flex mx-auto py-[2rem] tablet:flex tablet:mx-0'/>
                </Link>
                <p className="text-center text-[0.75rem] font-grafite leading-relaxed tablet:text-left">©HOS Software para Farmácias. 
                <br/>
                Todos os direitos reservados.
                <br/>
                CNPJ 00.115.150/0001-40</p>
                <Link href='/balanco'>
                    <h5 className="text-center text-[0.75rem] font-extrabold pt-[1.3rem] pb-[2.6rem] tablet:text-left">Balanço</h5>
                </Link>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:pl-[5rem]">
                <h5  className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] tablet:text-left">Soluções</h5>
                <Link href="/solucoes/administracao">
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Administração de Vendas</p>
                </Link>

                <Link href="/solucoes/gerenciamento">
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Gerenciamento de Loja</p>
                </Link>

                <Link href='/solucoes/processos'>
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Processos de Manipulação</p>
                </Link>

                <Link href="/solucoes/complementares">
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Soluções Complementares</p>
                </Link>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:pl-[2.2rem]">
                <h5 className="text-center text-[0.75rem] font-extrabold pt-[2.6rem] pb-[0.3rem] tablet:text-left tablet:pt-0">Sobre</h5>
                <Link href="/sobre/quemsomos">
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Quem somos</p>
                </Link>

                <Link href="/sobre/faq">
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Perguntas frequentes</p>
                </Link>

                <Link href="/sobre/contato">
                    <p className="text-center text-[0.75rem] font-grafite leading-loose tablet:text-left">Contato</p>
                </Link>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:pl-[2.2rem]">
                <Link href="/suporte">
                    <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] pt-[2.6rem] tablet:text-left tablet:pt-0">Suporte</h5>
                </Link>

                <Link href='https://www.hos.com.br/nossoblog/' target='_blank'>
                    <h5 className="text-center text-[0.75rem] font-extrabold pb-[0.3rem] tablet:text-left">Blog</h5>
                </Link>

                <Link href='/universidade'>
                    <h5 className="text-center text-[0.75rem] font-extrabold  pb-[2.6rem] tablet:text-left">Universidade</h5>
                </Link>
            </div>

            <div className="tablet:pt-[4.4rem] tablet:ml-[8rem] tablet:w-[15.8rem]">
                <p className="mx-auto text-center text-[0.75rem] w-[14.8rem] font-grafite leading-normal tablet:text-left tablet:w-auto">Receba as principais novidades e tendências do mercado e varejo farmacêutico.</p>
                <p className="mx-auto text-center text-[0.75rem] font-grafite font-semibold pt-[1.5rem] pb-[0.5rem] tablet:text-left">Assine agora mesmo a nossa newsletter!</p>
                <label htmlFor="" className="w-[15.8rem] h-[2.3rem] flex items-center mx-auto bg-white rounded-lg justify-center pl-[0.5rem] ">Digite seu e-mail
                    <button className=" bg-gradient-to-b from-laranja to-magenta rounded-lg ml-[5.2rem] "> <Image src={flecha} alt='' className=" -rotate-90 w-[1.5rem] h-auto py-[0.8rem] mx-2"/></button>
                </label>
                <div className="flex justify-center pt-[1.5rem] gap-x-3 tablet:justify-end tablet:pb-[3rem] tablet:items-center">
                    <Link href="https://www.facebook.com/softwarefarmaciahos" target='_blank'>
                        <Image src={facebook} alt=""/>
                    </Link>
                    
                    <Link href="https://www.instagram.com/hossistemas/" target='_blank'>
                        <Image src={instagram} alt=""/>
                    </Link>
                    
                    <Link href="https://www.linkedin.com/company/hossistemas/" target='_blank'>
                        <Image src={linkedin} alt=""/>
                    </Link>
                    
                    <Link href="https://www.youtube.com/@HosSistemas" target='_blank'>
                        <Image src={youtube} alt=""/>
                    </Link>
                </div>
            </div>    
             
        </div>
      </footer>
        )    

}
    
