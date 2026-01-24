import Image from "next/image"

export default function CertificadoPythonHashtag() {
    return (
        <div className="main">
            <h1>Curso de Python</h1>
            <p>Hashtag Treinamentos — 2026</p>
            <figure>
                <Image className="img-hashtag" src="/img/certificado-python-hashtag.jpeg" alt="Certificado de Python" width={400} height={400} />
            </figure>
        </div>
    )
}