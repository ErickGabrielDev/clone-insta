import erick from "../../imagens/erick-perfil.PNG"
import buzeira from "../../imagens/buzeira.jpg"
import juniorresenha from "../../imagens/junior.jpg"
import antonio from "../../imagens/AntonioOliveira.jpg"
import hariel from "../../imagens/hariel.jpg"
import caiox from "../../imagens/caiox.jpg"
import "./ConteudoLateralDireita.css"
export default function Direita() {
    return (
        <>
            <div className="conteudoDireita">
                <div className="conta">
                    <img src={erick} alt="Usuario"></img>
                    <div>
                        <p>Erick Gabriel</p>
                        <small>erickgabriel011</small>
                    </div>

                    <a href="#">Mudar</a>
                </div>
                <p>Sugestões para você</p>
                <div className="conta">
                    <img src={buzeira} alt="Usuario"></img>
                    <div>
                        <p>Buzeira_</p>
                        <small>54 Pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={juniorresenha} alt="Usuario"></img>
                    <div>
                        <p>junioresenha_</p>
                        <small>35 pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={antonio} alt="Usuario"></img>
                    <div>
                        <p>Antonio_oliveira33</p>
                        <small>12 pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={hariel} alt="Usuario"></img>
                    <div>
                        <p>Mchariel </p>
                        <small> 25 Pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <div className="conta">
                    <img src={caiox} alt="Usuario"></img>
                    <div>
                        <p>loud_caiox</p>
                        <small>15 Pessoas seguem</small>
                    </div>
                    <a href="#">Seguir</a>
                </div>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Privacidade</a></li>
                    <li><a href="#">Termos</a></li>
                    <li><a href="#">Localização</a></li>
                    <li><a href="#">Idiomas</a></li>
                    <li><a href="#">verificado</a></li>
                </ul>

                <p>&copy; 2024 INSTAGRAM DO PROA</p>
            </div>
        </>
    )
}