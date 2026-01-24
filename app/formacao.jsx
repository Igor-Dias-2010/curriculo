'use client'

import Link from "next/link"
import { Paperclip } from "lucide-react"

export default function Formacao() {
    return (
        <div className="main">
            <h2>Formação</h2>
            <h3>Ensino Médio — SENAI (em andamento &bull; 2026 — 2028)</h3>
            <h3>Ensino Fundamental — EBM Osvaldo Machado (concluído &bull; 2017 — 2025)</h3>

            <h2 className="subtitulo">Cursos Complementares</h2>
            <p>Programação — Escola Eliti (cursando)</p>
            <p>Introdução ao <span className="code">Python</span> — Carreta Digital RBCIP (finalizado em 2025) <Link href={"/certificados/python"} target="_blank" rel="noopener noreferrer"><Paperclip className="paperClip" size={15} /></Link></p>
            <p>Introdução ao <span className="code">Desenvolvimento de Jogos</span> — Carreta Digital RBCIP (finalizado em 2025) <Link href={"/certificados/game-dev"} target="_blank" rel="noopener noreferrer"><Paperclip className="paperclip" size={15} /></Link></p>
            <p>Curso de <span className="code">Python</span> — Hashtag Programação (finalizado em 2026) <Link href={"/certificados/python-hashtag"} target="_blank" rel="noopener noreferrer"><Paperclip className="paperClip" size={15} /></Link></p>

        </div>
    )
}