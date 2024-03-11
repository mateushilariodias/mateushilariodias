import { FaPaperPlane, FaRegComment, FaThumbsUp } from "react-icons/fa";

interface IPost {
    id: number;
    album: string;
    title: string;
    postDescription: string;
    image: string
}

function Post(props: { post: IPost }) {

    const { album, title, postDescription, image } = props.post;

    return (
        <div>
            <header>
                <span>{album}</span>
                <span>{title}</span>
            </header>
            <main>
                {postDescription && (<div>
                    <span>{postDescription}</span>
                </div>)}
                {image && <img src={image} alt="Imagem do post" />}
            </main>
            <footer>
                <div>
                    <div>
                        <FaThumbsUp /> 4.561
                    </div>
                    <span>875 comentários</span>
                </div>
                <button>
                    <FaThumbsUp /> Curtir
                </button>
                <button>
                    <FaRegComment /> Comentar
                </button>
                <div>
                    <input type="text" name="comment" id="comment" />
                    <FaPaperPlane />
                </div>
            </footer>
        </div>
    )
}
export default Post;