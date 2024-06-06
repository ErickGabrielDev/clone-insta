export default function Story (props) {
    return (
        <div className="Story">
            <div className="imagem-perfil">
                <img src={props.caminhoDaImagem} alt="Imagem do Story" />
            </div>
            <div className="nome-usuario">
                <h5>{props.nomeUsuario}</h5>
            </div>
        </div>
    )
}