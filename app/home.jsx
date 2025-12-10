"use client"

import Resumo from './resumo-profissional'
import Habilidades from './habilidades'
import Contato from './contato'
import Experiencias from './experiencias'
import Formacao from './formacao'
import SoftSkill from './soft-skill'

export default function Home() {
    return (
        <div className='main'>
            <h1>Igor da Silva Dias</h1>
            <Contato />
            <Resumo />
            <Habilidades />
            <Experiencias />
            <Formacao />
            <SoftSkill />
        </div>
    )
}