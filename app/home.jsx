"use client"

import Link from 'next/link'
import { Mail, Phone, MapPin, MapPinCheck, Linkedin } from 'lucide-react'
export default function Home() {
    return (
        <div className='main'>
            <h1>Igor da Silva Dias</h1>
            <div className='contact'>
                <Mail className='icon' />
                <Link href={'mailto:rogigor1712@gmail.com'}>rogigor1712@gmail.com</Link>
            </div>
            <div className='contact'>
                <Phone className='icon' />
                <span>(48) 9186-6532</span>
            </div>
            <div className='contact'>
                <MapPin className='icon' />
                <span>Florianópolis/Santa Catarina</span>
            </div>
            <div className='contact'>
                <Linkedin className='icon' />
                <Link href={'https://www.linkedin.com/in/igor-dias-4a0791356/'} target='_blank'>LinkedIn</Link>
            </div>
            <hr />
            <p>Busco uma oportunidade em desenvolvimento de software</p>
        </div>
    )
}