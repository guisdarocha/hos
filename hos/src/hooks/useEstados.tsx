import { useEffect, useState } from "react"

export interface IEstado {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
  }
  
  export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
  }


export default function useEstados () {
    const [estados, setEstados] = useState<IEstado[]>([]);

    useEffect (() => {
        fetch('https://brasilapi.com.br/api/ibge/uf/v1')
        .then((response) => response.json())
        .then((data) => setEstados(data))
    }, []);

    return {
        estados
    }
}

