"use client"

import Link from 'next/link'
import { Mail, Phone, MapPin, MapPinCheck } from 'lucide-react'
export default function Home() {
    return (
        <div>
            <h1>Igor da Silva Dias</h1>
            <h2><Mail className='icon' /></h2>
            <h2><Phone className='icon' /></h2>
            <h2><MapPin className='icon' /></h2>

            <hr />
        </div>
    )
}