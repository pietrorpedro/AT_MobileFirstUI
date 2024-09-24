import { Box, Container } from "@mui/material";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import styles from "./T15.module.css";

export default function T15() {

    const comments1 = [
        {
            user: "Maria Silva",
            comment: "Uau, que foto incrível! Quero ir também! 🌴",
            likes: 5
        },
        {
            user: "João Pereira",
            comment: "A praia é tudo de bom! Aproveita bastante! 😎",
            likes: 3
        },
        {
            user: "Ana Souza",
            comment: "Amei a energia dessa foto! Você está radiante! ☀️✨",
            likes: 8
        }
    ];

    const comments2 = [
        {
            user: "Lucas Almeida",
            comment: "Que vista linda! Estou precisando de uma praia assim! 🌅",
            likes: 10
        },
        {
            user: "Fernanda Lima",
            comment: "Amei essa foto! O pôr do sol é realmente mágico! 💖",
            likes: 8
        }
    ];

    const friends = [
        {
            user: "Lucas Almeida",
            img: "https://s3.wasabisys.com/instax/74/instax/2022/03/instax-mini-11-modo-selfie-1648060186-2048x1367.jpeg",
            friendsInCommom: 2
        },
        {
            user: "João Pereira",
            img: "https://as2.ftcdn.net/v2/jpg/03/41/82/11/1000_F_341821142_nequVUxpwzj5riEeiCA9jDmsY4OqqDLT.jpg",
            friendsInCommom: 1
        },
        {
            user: "Maria Silva",
            img: "https://i.pinimg.com/originals/06/63/30/066330eb6aad5bca265e774e15917ed4.jpg",
            friendsInCommom: 4
        }
    ]

    const friendsInCommom = [
        {
            user: "João Guilherme",
            img: "https://img.freepik.com/fotos-premium/selfie-fitness-e-sorriso-com-retrato-de-homem-negro-para-correr-bem-estar-e-felicidade-influenciador-de-midia-social-e-fotografia-com-corredor-masculino-ao-ar-livre-para-exercicio-e-treinamento-de-imagem_590464-169968.jpg",
            friendsInCommom: "João Pereira"
        },
        {
            user: "Antonieta Donatti",
            img: "https://plus.unsplash.com/premium_photo-1669740216382-71b87585ab1e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVsaGVyJTIwc2VsZmllfGVufDB8fDB8fHww",
            friendsInCommom: "Maria Silva"
        },
        {
            user: "Mariana da Rocha",
            img: "https://media.istockphoto.com/id/935524698/photo/morning-selfie.jpg?s=612x612&w=0&k=20&c=AegVsE9113fC2kwjk2SyxwoBxYswKJXOJCNIsFT6TWU=",
            friendsInCommom: "Lucas Almeida"
        }
    ]

    return (
        <div className={styles.socialNetwork}>
            <Header />
            <Container maxWidth={"md"}>
                <Box display={{ sm: "block", md: "flex" }} flexDirection={{ xs: "column", md: "row-reverse" }} alignItems={"start"} gap={2}>
                    <Box>
                        <Friends title="Seus Amigos" friends={friends}/>
                        <Friends title="Sugestões" friends={friendsInCommom}/>
                    </Box>
                    <Box>
                        <Post
                            img={"https://img.freepik.com/fotos-premium/mochileiro-de-turista-feliz-e-animado-leva-selfie-na-praia-ao-por-do-sol-cancun-mexico_338367-2235.jpg"}
                            likes={21}
                            shares={5}
                            user={"Pietro Donatti"}
                            date={"10/08/2023"}
                            title={"Cheguei na praia!"}
                            desc={"Cheguei à praia e a empolgação é indescritível! O sol brilha intensamente, a brisa do mar é refrescante, e o som das ondas quebrando na areia é simplesmente relaxante. Sinto a areia quente sob meus pés enquanto corro em direção à água cristalina, ansioso para mergulhar e me refrescar."}
                            comments={comments1}
                        />
                        <Post
                            img={"https://i.pinimg.com/564x/37/9b/77/379b7726fcf37dff9a3fbf9bb65424be.jpg"}
                            likes={37}
                            shares={10}
                            user={"Clara Mendes"}
                            date={"05/08/2023"}
                            title={"Momento Mágico na Praia!"}
                            desc={"O pôr do sol na praia foi simplesmente deslumbrante! As cores do céu se misturavam em tons de laranja e rosa, e o som das ondas tornava tudo ainda mais mágico. Aproveitei cada segundo com amigos, rindo e tirando fotos. Não há nada melhor do que esses momentos!"}
                            comments={comments2}
                        />
                    </Box>
                </Box>
            </Container>
        </div>
    )
}