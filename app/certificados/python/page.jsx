import Image from "next/image";

export default function CertificadoPython() {
    return (
        <div className="main">
            <h1>Curso de Python</h1>
            <figure>
                <figcaption>RBCIP — 2025</figcaption>
                <Image
                    className="img"
                    src="/img/certificado-python.jpeg"
                    alt="Certificado de Python"
                    width={400}
                    height={542}
                />
            </figure>
        </div>
    );
}
