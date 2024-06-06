import './Feed.css';

import Post from './Post/Post';

export default function Feed() {
    return (
        <div className="Feed">
            <Post

                title="tntsportsbr"
                imgSrc="https://th.bing.com/th/id/OIP.UFvhkiV5fcE94TvFYuULkAAAAA?rs=1&pid=ImgDetMain"
                body="Rumo a novos desafios! ⚽️🚀 Orgulhoso de me juntar à família Vascaína. Vamos mostrar ao mundo o verdadeiro significado de determinação e paixão pelo futebol! 💪⚫️⚪️ #CR7noVasco #GiganteDaColina" />

            <Post
                title="tntsportsbr"
                imgSrc="https://pbs.twimg.com/media/GPBCrSfWcAAVV1d.jpg:large"
                body="É campeão! 🏆✨ O Real Madrid conquista a Champions League 2023/24! Mais uma vez, mostramos ao mundo a nossa grandeza e determinação. Obrigado aos torcedores pelo apoio incondicional! Vamos continuar fazendo história juntos! #HalaMadrid #ChampionsLeague #Campeões" />
            
            
        </div>

    )
}