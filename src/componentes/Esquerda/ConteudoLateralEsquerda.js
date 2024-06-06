import logo from '../../imagens/images.png';

import Menu from '../../TextMenu';
import './ConteudoLateralEsquerda.css'
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { CgAddR } from "react-icons/cg";
import { TbBrandMessenger } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import erick from "../../imagens/erick-perfil.PNG"


export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <div className="scroll-block">
                <div className='comeco'>
                    <img src={logo} alt='Logo' />
                </div>
                <ul id='meio'>


                    <Menu nome="Página inicial" classe="text-menu" icone={<GoHomeFill />} />

                    <Menu nome="pesquisa" classe="text-menu" icone={<IoSearch />} />

                    <Menu nome="Explore" classe="text-menu" icone={<FaRegCompass />} />

                    <Menu nome="Reels" className="text-menu" icone={<BiMoviePlay />} />

                    <Menu nome="Mensagens" classe="text-menu" icone={<TbBrandMessenger />} />

                    <Menu nome="Notificações" classe="text-menu" icone={<GoHeart />} />

                    <Menu nome="Criar" classe="text-menu" icone={<CgAddR />} />


                </ul>
                <ul id='fim'>

                    <div className="like2">
                        <img className="perfil" src={erick} alt="Imagem do Story" />
                        
                        <Menu nome="Perfil" classe="text-menu" />
                    </div>

                </ul>

            </div>
        </div>
    )
}

// export default ConteudoLateralEsquerda;