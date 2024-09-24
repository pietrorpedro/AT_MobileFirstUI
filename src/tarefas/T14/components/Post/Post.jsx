import Menu from "../Menu/Menu";
import TopicsList from "../TopicsList/TopicsList";
import styles from "./Post.module.css";

export default function Post({
    forumName,
    title,
    subtitle,
    image,
    description,
    author,
    date,
    likes,
    comments
}) {
    return (
        <div className={styles.post}>
            <div>
                <p className={styles.forumName}>{forumName}</p>
                <Menu forumName={forumName}/>
                <div className={styles.postInfo}>
                    <div className={styles.user}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" />
                        <p>{author}</p>
                    </div>
                    <p>Publicado em: {date}</p>
                </div>
                <div className={styles.postContent}>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                    <img className={styles.image} src={image} alt={title} />
                    <p>{description}</p>
                </div>
                <div className={styles.postInteractions}>
                    <div className={styles.likes}>
                        <img src="https://cdn-icons-png.flaticon.com/512/149/149217.png" alt="Likes: " />
                        <p>{likes}</p>
                    </div>
                    <div className={styles.commentsNumber}>
                        <img src="https://static-00.iconduck.com/assets.00/comment-icon-1024x964-julk98bl.png" alt="Comentarios: " />
                        <p>10</p>
                    </div>
                </div>
                <div className={styles.comments}>
                    <form>
                        <label>
                            Enviar Comentário
                            <input type="text" placeholder={`Insira seu comentário, ${author}`}/>
                        </label>
                        <button type="submit">Enviar</button>
                    </form>
                    {comments.map((comment, index) => (
                        <div className={styles.comment} key={index}>
                            <h2>{comment.author}</h2>
                            <p>Comentado em: {comment.date}</p>
                            <p>{comment.text}</p>
                            <div className={styles.commentLikes}>
                                <img src="https://cdn-icons-png.flaticon.com/512/149/149217.png" alt="Likes: " />
                                <p>{comment.likes}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <TopicsList />
        </div>
    )
}