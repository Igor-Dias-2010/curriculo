'use client'

import Link from "next/link"
import { Paperclip } from "lucide-react"

export default function Formacao() {
    return (
        <div className="main">
            <h2>Formação</h2>
            <h3>Ensino Fundamental — EBM Osvaldo Machado — Concluído (2025) </h3>

            <h2 className="subtitulo">Cursos Complementares</h2>
            <p>Programação — Escola Eliti (cursando)</p>
            <p>Introdução ao Python — Carreta Digital RBCIP (finalizado em 2025) <Link href={"/certificados/python"}><Paperclip className="paperClip" size={15} /></Link></p>
            
            <p>Introdução ao Desenvolvimento de Jogos — Carreta Digital RBCIP (finalizado em 2025)</p>

        </div>
    )
}