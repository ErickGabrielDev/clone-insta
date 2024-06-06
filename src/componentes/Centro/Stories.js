import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "meutimao",
        url: "https://filebucket.onefootball.com/2020/10/1603079184264-blob"
    },
    {
        nome: "corinthians",
        url: "https://th.bing.com/th/id/OIP.XrS6Djb813Qe0EsNgkQXCAAAAA?rs=1&pid=ImgDetMain"
    },
    {
        nome: "10neto",
        url: "https://th.bing.com/th/id/OIP.cv-3XLtP_lvCpkNinJ2wegAAAA?rs=1&pid=ImgDetMain"
    },
    {
        nome: "nike",
        url: "https://4.bp.blogspot.com/-BGYw9I05BVk/TiRdC7c0NzI/AAAAAAAAAiQ/1ebLElEEGCc/s1600/Nike_logo.jpg"
    },
    {
        nome: "neymar",
        url: "https://sports.inquirer.net/files/2020/12/2020-12-28T130948Z_1_LYNXMPEGBR0HR_RTROPTP_4_SOCCER-BRAZIL-NEYMAR-scaled.jpg"
    },
    {
        nome: "cristiano",
        url: "https://s.cafebazaar.ir/images/icons/spg.wallpaper.ronaldo.cristiano.football_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize"
    },
   
]


export default function Stories() {
    return (
        <div className="Stories">
            {
                // Iteração -> Para cada usuário na lista de usuários, renderize um Story
                listaUsuarios.map((usuario) => {
                    return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
                })
            }

        </div>
    )
}