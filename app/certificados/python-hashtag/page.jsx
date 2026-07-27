import Image from "next/image";

export default function CertificadoPythonHashtag() {
    return (
        <div className="main">
            <h1>Curso de Python</h1>
            <figure>
                <figcaption>Hashtag Treinamentos — 2026</figcaption>
                <Image
                    className="img"
                    src="/img/certificado-python-hashtag-2.jpeg"
                    alt="Certificado de Python"
                    width={400}
                    height={542}
                />
            </figure>
        </div>
    );
}
