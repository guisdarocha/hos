'use client'

import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import lucro from '../../public/Lucro.svg'
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

interface MelhorsistemaProps {
    
}

interface CarouselItem {
  image: string;
  title: string;
  text: string;
}

export function Melhorsistema(props: MelhorsistemaProps) {
    const images: CarouselItem[] = [
      {
        image: '/Lucro.svg',
        title: 'Maximize sua margem de lucro',
        text: 'Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.',
      },
      {
        image: '/Vendas.svg',
        title: 'Prioridade de Vendas',
        text: 'Cadastre seus produtos e estabeleça cores para indicar as prioridades de vendas (verde, amarelo e vermelho), de acordo com a margem de lucro, vencimento e promoções.',
      },
      {
        image: '/SNGPC.svg',
        title: 'Integração com SNGPC',
        text: 'Aprimore a gestão de medicamentos controlados. Agilize a movimentação, acompanhe envios e entregas e mantenha o controle de inventário atualizado.',
      },
      {
        image: '/Inteligente.svg',
        title: 'Associação Inteligente',
        text: 'Utiliza o histórico de vendas para identificar tendências e oferece produtos complementares mais adequados para cada atendimento, maximizando suas vendas.',
      },
      {
        image: '/PBMs.svg',
        title: 'Integração com PBMs',
        text: 'Consulte de forma atualizada o PBM, gerencie a quantidade de itens vendidos e obtenha descontos dos fabricantes, proporcionando ainda mais benefícios para sua farmácia.',
      },  
      {
        image: '/Fidelização.svg',
        title: 'Sistema de Fidelização',
        text: 'Possibilita a gestão dos relacionamentos para usuários de medicamentos contínuos, bem como a configuração de plano de fidelidade específico para sua realidade.',
      },
      {
        image: '/Atualização.svg',
        title: 'Atualização Constante',
        text: 'Os softwares e programas da HOS são atualizados constantemente, adequando rotinas fiscais e boas práticas de gestão.',
      },
      {
        image: '/Suporte.svg',
        title: 'Suporte Ágil',
        text: 'Na HOS Sistemas você conta com uma ampla equipe de técnicos para lhe atender de maneira simples e rápida.',
      },
      {
        image: '/anos.svg',
        title: '28 anos de mercado',
        text: 'Trabalhe com a segurança de um parceiro com mais de 28 anos de experiência.',
      },]

      return(
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper bg-fundo tablet:active ">
        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
             <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='w-[16rem] h-[15rem] mb-[5rem]  mx-[0.8rem] justify-center bg-white  drop-shadow-lg rounded-xl tablet:w-[21.1rem] tablet:h-[25.4rem]'>
                <Image src={lucro} alt=''/>
                <h2 className='text-center text-[1rem] text-grafite font-bold tablet:text-[1.25rem] tablet:px-[1.5rem] tablet:pb-[1.3rem]'>Maximize sua margem de lucro</h2>
                <p className='text-center text-[0.8rem] text-grafite tablet:text-[1rem] tablet:w-[18rem] tablet:flex tablet:mx-auto'>Venda com inteligência e rentabilidade. Encontre alternativas mais rentáveis ao consultar um produto e aumente sua margem de lucro.</p>
            </div>
        </SwiperSlide>
      </Swiper>
      )
    }