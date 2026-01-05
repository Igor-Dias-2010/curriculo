'use client'
import { Mail, Phone, MapPin, MapPinCheck, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'

export default function Contato() {
    return (
        <div>
            <div className='contact'>
                <Mail className='icon' />
                <span className='code'>
                    <Link href={'mailto:rogigor1712@gmail.com'}>rogigor1712@gmail.com</Link>
                </span>
            </div>
            <div className='contact'>
                <Phone className='icon' />
                <span className='code'>(48) 9186-6532</span>
            </div>
            <div className='contact'>
                <MapPin className='icon' />
                <span className='code'>Florianópolis/Santa Catarina</span>
            </div>
            <div className='contact'>
                <Linkedin className='icon' />
                <span className='code'>
                    <Link href={'https://www.linkedin.com/in/igor-dias-4a0791356/'} target='_blank'>LinkedIn</Link>
                </span>
            </div>
            <div className='contact'>
                <Github className='icon' />
                <span className='code'>
                    <Link href={'https://github.com/Igor-Dias-2010'} target='_blank'>Github</Link>
                </span>
            </div>
        </div>
    )
}