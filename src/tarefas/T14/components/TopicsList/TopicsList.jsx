import styles from "./TopicsList.module.css";

const topicsData = {
    recent: [
        {
            title: "Como trocar o óleo do carro?",
            author: "CarroMaster",
            date: "21/09/2024",
            likes: 15,
            replies: 3
        },
        {
            title: "Melhores práticas de manutenção do carro",
            author: "MecânicoExpert",
            date: "20/09/2024",
            likes: 12,
            replies: 5
        },
        {
            title: "Dúvidas sobre pneus",
            author: "PneuGuru",
            date: "19/09/2024",
            likes: 8,
            replies: 2
        },
        {
            title: "Quando trocar a bateria?",
            author: "ZezinSabeTudo",
            date: "18/09/2024",
            likes: 5,
            replies: 1
        },
        {
            title: "Carros elétricos: vale a pena?",
            author: "FuturoAutomotivo",
            date: "17/09/2024",
            likes: 20,
            replies: 4
        },
    ],
    mostReplied: [
        {
            title: "Meu carro faz um barulho estranho",
            author: "BarulhoEstranho",
            date: "15/09/2024",
            likes: 10,
            replies: 10
        },
        {
            title: "Aceleração lenta após a troca do óleo",
            author: "CarroDevagar",
            date: "14/09/2024",
            likes: 7,
            replies: 8
        },
        {
            title: "Dúvida sobre combustível",
            author: "CombustívelSabido",
            date: "13/09/2024",
            likes: 6,
            replies: 7
        },
        {
            title: "Melhores seguros de carro",
            author: "SegurosDeCarro",
            date: "12/09/2024",
            likes: 15,
            replies: 5
        },
        {
            title: "Qual carro comprar em 2025?",
            author: "FuturoDoCarro",
            date: "11/09/2024",
            likes: 12,
            replies: 6
        },
    ],
    mostLiked: [
        {
            title: "Como escolher o carro certo?",
            author: "CarroCerto",
            date: "10/09/2024",
            likes: 30,
            replies: 4
        },
        {
            title: "A melhor forma de limpar o carro",
            author: "LimpezaPerfeita",
            date: "09/09/2024",
            likes: 28,
            replies: 2
        },
        {
            title: "Comparativo entre carros a gasolina e elétricos",
            author: "ComparativoCarro",
            date: "08/09/2024",
            likes: 25,
            replies: 5
        },
        {
            title: "Manutenção preventiva: o que saber",
            author: "MecânicoPrevenido",
            date: "07/09/2024",
            likes: 22,
            replies: 3
        },
        {
            title: "A melhor época para comprar carro",
            author: "TemporadaCarro",
            date: "06/09/2024",
            likes: 20,
            replies: 1
        },
    ]
};

export default function TopicsList() {
    return (
        <div className={styles.topicsList}>
            <h2>Tópicos Recentes</h2>
            <ul>
                {topicsData.recent.map((topic, index) => (
                    <li key={index}>
                        <h3>{topic.title}</h3>
                        <p>Autor: {topic.author} | Data: {topic.date} | Curtidas: {topic.likes} | Respostas: {topic.replies}</p>
                    </li>
                ))}
            </ul>
            <h2>Tópicos Mais Respondidos</h2>
            <ul>
                {topicsData.mostReplied.map((topic, index) => (
                    <li key={index}>
                        <h3>{topic.title}</h3>
                        <p>Autor: {topic.author} | Data: {topic.date} | Curtidas: {topic.likes} | Respostas: {topic.replies}</p>
                    </li>
                ))}
            </ul>
            <h2>Tópicos Mais Curtidos</h2>
            <ul>
                {topicsData.mostLiked.map((topic, index) => (
                    <li key={index}>
                        <h3>{topic.title}</h3>
                        <p>Autor: {topic.author} | Data: {topic.date} | Curtidas: {topic.likes} | Respostas: {topic.replies}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
