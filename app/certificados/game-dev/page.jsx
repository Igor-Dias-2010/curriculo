import Image from "next/image";

export default function CertificadoGameDev() {
    return (
        <div className="main">
            <h1>Curso de Desenvolvimento de Jogos</h1>
            <figure>
                <figcaption>RBCIP — 2025</figcaption>
                <Image
                    className="img"
                    src="/img/certificado-game-dev.jpeg"
                    alt="Certificado de Desenvolvimento de Jogos"
                    width={400}
                    height={542}
                />
            </figure>
        </div>
    );
}
