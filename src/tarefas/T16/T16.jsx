import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import Product from "./components/Product/Product"
import Seller from "./components/Seller/Seller"
import styles from "./T16.module.css"

export default function T16() {

    const sellerData = {
        user: "Pietro Rodrigues",
        email: "pietrorpedro@gmail.com",
        note: 5
    }

    const comments = [
        {
            user: "João Silva",
            comment: "A guitarra é incrível! O som é maravilhoso e muito potente.",
            date: "22/09/2024",
            note: 5,
        },
        {
            user: "Maria Souza",
            comment: "Muito boa a guitarra, mas o preço poderia ser um pouco mais acessível.",
            date: "20/09/2024",
            note: 4,
        },
        {
            user: "Carlos Mendes",
            comment: "Entregou no prazo e em excelente estado. Recomendo!",
            date: "19/09/2024",
            note: 5,
        },
        {
            user: "Ana Clara",
            comment: "Achei a pegada da guitarra um pouco pesada para mim.",
            date: "18/09/2024",
            note: 3,
        },
    ];

    const questions = [
        {
            user: "Lucas Oliveira",
            date: "21/09/2024",
            question: "Qual é o peso da guitarra?",
            answer: "A guitarra pesa aproximadamente 3.5 kg.",
        },
        {
            user: "Fernanda Lima",
            date: "20/09/2024",
            question: "Essa guitarra é adequada para iniciantes?",
            answer: "Sim, é uma excelente guitarra para iniciantes devido à sua facilidade de uso.",
        },
        {
            user: "Ricardo Santos",
            date: "19/09/2024",
            question: "Qual é a garantia do produto?",
            answer: "A guitarra possui uma garantia de 1 ano contra defeitos de fabricação.",
        },
    ];

    const products = [
        {
            img: "https://http2.mlstatic.com/D_NQ_NP_879112-MLA74651875224_022024-O.webp",
            name: "Guitarra elétrica Jackson JS Series JS32 DKA",
            price: 4.699
        },
        {
            img: "https://http2.mlstatic.com/D_NQ_NP_980465-MLU75130917389_032024-O.webp",
            name: "Guitarra elétrica Jackson JS Series JS32 Warrior",
            price: 4.104
        },
        {
            img: "https://http2.mlstatic.com/D_NQ_NP_882234-MLB74054792756_012024-O.webp",
            name: "Guitarra Fender Squier Affinity Stratocaster",
            price: 3.541
        }
    ]

    return (
        <div className={styles.commerce}>
            <Header />
            <div className={styles.content}>
                <div className={styles.product}>
                    <Product
                        img={"https://http2.mlstatic.com/D_NQ_NP_743162-MLA74781592725_022024-O.webp"}
                        name={"Guitarra elétrica Jackson JS Series King V JS32"}
                        desc={"Desfrute com a guitarra Jackson JS Series da conexão com a música. Com este instrumento você vai descobrir novos acordes, cantar suas canções e curtirá da vida musical. Explore, amplifique sua criatividade e desenvolva a sua paixão."}
                        price={4.178}
                        note={5}
                        userData={sellerData}
                        comments={comments}
                        questions={questions}
                    />
                </div>
                <div className={styles.aside}>
                    <Seller
                        name={sellerData.user}
                        email={sellerData.email}
                        note={sellerData.note}
                    />
                    <div className={styles.cards}>
                        <h2>Produtos Mais Vendidos</h2>
                        {products.map((product, index) => (
                            <div key={index} className={styles.card}>
                                <Card
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}