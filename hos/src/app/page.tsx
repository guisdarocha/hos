'use client'
import { Header } from "@/components/header";
import { HeroSection } from "@/components/herosection";
import { Beneficios } from "@/components/beneficios";
import { Sistema } from "@/components/sistema";
import { Solucoes } from "@/components/solucoes";
import { FinanceiroWeb } from "@/components/financeiroWeb";
import { Painel } from "@/components/painel";
import { Cta } from "@/components/cta";
import {Contador} from "@/components/contador";
import banner from '../../public/banner-home-page.png';
import { Simplifique } from "@/components/simplifique";
import { Marcas } from "@/components/marcas";
import { Footer } from "@/components/footer";
import {NextUIProvider} from "@nextui-org/react";
import { Melhorsistema } from "@/components/melhorsistema";
import { Depoimentos } from "@/components/depoimentos";




export default function Home() {
  
  return (

    <>
    <NextUIProvider>
    <div className="overflow-x-hidden tablet:w-full">
    <Header solucoesClassName={''} sobreClassName={''} suporteClassName={''} universidadeClassName={''} />
    <HeroSection 
            bgClassName={"bg-gradient-to-b from-laranja to-magenta"}
            title={"Sistema intuitivo, processos claros e suporte simplificado!"}
            titleClassName={"text-white"}
            text={"Temos a receita certa para o sucesso da sua drogaria ou farmácia de manipulação."}
            textClassName={"text-white"}
            buttonClassName={"bg-darker text-white hover:bg-white hover:text-darker hover:transition hover:duration-500"}
            img={banner} buttonName={'Solicite uma demonstração'} imageClassName={''} linkName={"/sobre/contato"}      />
    <Beneficios />
    <Solucoes />
    <Melhorsistema /> 
    <FinanceiroWeb />
    <Painel />
    <Cta />
    <Contador initialValue={0} />
    <Depoimentos />
    <Marcas />
    <Footer />
    </div>
    </NextUIProvider>
       

    </>
 )
}