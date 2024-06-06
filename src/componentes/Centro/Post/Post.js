import './Post.css'
import { MdVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

export default function Post(props) {
    return (
        <div className="card post">
            <div className="card-header">
                <div className="card-post-Story">
                    <div className="card-post-imagem-perfil">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjLZdDnFM8SPtNz-mHu_zhxuXvBK73Uea3A&s" alt="Imagem do Story" />
                    </div>
                    <div className="card-post-nome-usuario">
                        <h4>{props.title}</h4>
                    </div>
                    <div className="verificado">
                        <MdVerified />
                    </div>

                </div>
            </div>
            <div className="card-body">
                <img src={props.imgSrc} />

                <div className="componentes">
                    <div className='componente'>
                        <FaRegHeart />
                        <MdOutlineModeComment />
                        <IoPaperPlaneOutline />
                    </div>
                    <div className='comp-fim'>
                        <FaRegBookmark />
                    </div>

                </div>

                <div className='like'>
                    <div className="card-post-imagem-like">
                        <img src="https://s.cafebazaar.ir/images/icons/spg.wallpaper.ronaldo.cristiano.football_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="Imagem do Story" />
                    </div>
                    <p>
                        curtido por <span>cristiano</span> e outras <span>2Mi de pessoas</span>
                    </p>
                </div>
                <p><span>{props.title}</span> {props.body}</p>

                <div className='comentarios'>
                    <p className='cor-da-letra'>
                        visualizar os 4.535 comentarios
                    </p>
                    <div className='ago'>
                        <p className='cor-da-letra'>Há 3 dias <span>• Ver tradução</span></p>
                    </div>
                </div>
            </div>
        </div>




    )
}