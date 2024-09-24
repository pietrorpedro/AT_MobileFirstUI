import Post from "./components/Post/Post";
import styles from "./T14.module.css";

export default function T14() {

    const comments = [
        {
            text: "Oi, Zezin! Eu já passei por isso. Pode ser a bateria, verifica se os faróis estão funcionando.",
            author: "CarroExpert",
            date: "20/08/2024",
            likes: 5
        },
        {
            text: "Se você estiver ouvindo um clique quando tenta ligar, é bem provável que a bateria esteja fraca.",
            author: "DicasAutomotivas",
            date: "20/08/2024",
            likes: 3
        },
        {
            text: "Verifique se há combustível no tanque. Às vezes, pode parecer que o carro está quebrado quando na verdade está sem gasolina.",
            author: "CuidadoComOCombustível",
            date: "21/08/2024",
            likes: 2
        },
        {
            text: "Recomendo levar em um mecânico de confiança. Eles podem identificar o problema rapidamente.",
            author: "MecânicoDoBem",
            date: "21/08/2024",
            likes: 4
        },
        {
            text: "Às vezes, pode ser um problema no alternador. Faça uma checagem antes de tomar qualquer decisão.",
            author: "SabioDasRodas",
            date: "22/08/2024",
            likes: 1
        },
        {
            text: "Não se preocupe! Esses problemas são mais comuns do que você imagina. Vamos torcer para que não seja nada grave!",
            author: "OtimizadorDeCarros",
            date: "22/08/2024",
            likes: 7
        }
    ];
    

    return (
        <div className={styles.main}>
            <Post
                forumName={"r/carros"}
                title={"Meu carro parou de funcionar"}
                subtitle={"Alguém me ajuda!"}
                image={"https://img.freepik.com/fotos-premium/carro-quebrado-apos-um-acidente-de-transito-no-estacionamento-de-uma-oficina-oficina-de-danos-ao-corpo-do-carro_132482-3917.jpg"}
                description={"Ontem meu carro parou de funcionar, alguém pode me ajudar? Estou com muito medo de perder ele :("}
                author={"ZezinSabeNada"}
                date={"20/08/2024"}
                likes={10}
                comments={comments}
            />
        </div>
    )
}