import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Balanco } from "@/components/balanco";



export default function Suporte() {
  return(
      <>
      <Header solucoesClassName={''} sobreClassName={''} suporteClassName={''} universidadeClassName={''} />
      <Balanco />
      <Footer />
  
      </>
   )
  }