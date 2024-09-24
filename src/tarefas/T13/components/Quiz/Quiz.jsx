import { useState } from "react";
import Question from "../Question/Question";
import styles from "./Quiz.module.css";

export default function Quiz() {
    const [questions] = useState([
        {
            text: "Qual é o princípio fundamental do design Mobile-First?",
            options: [
                { text: "Criar primeiro para desktop", isCorrect: false },
                { text: "Criar primeiro para dispositivos móveis", isCorrect: true },
                { text: "Ignorar a usabilidade", isCorrect: false },
                { text: "Usar apenas um layout fixo", isCorrect: false },
            ],
            justification: "A abordagem Mobile-First prioriza a experiência em dispositivos móveis, garantindo que o design funcione bem em telas menores antes de se adaptar a telas maiores."
        },
        {
            text: "O que significa a abordagem responsiva no design de websites?",
            options: [
                { text: "O site se adapta a diferentes tamanhos de tela", isCorrect: true },
                { text: "O site é sempre fixo", isCorrect: false },
                { text: "O site usa imagens grandes", isCorrect: false },
                { text: "O site não é otimizado para dispositivos móveis", isCorrect: false },
            ],
            justification: "O design responsivo permite que o layout se ajuste automaticamente a diferentes tamanhos de tela, proporcionando uma melhor experiência ao usuário."
        },
        {
            text: "Qual das seguintes práticas melhora a usabilidade de um site?",
            options: [
                { text: "Usar texto pequeno", isCorrect: false },
                { text: "Criar links invisíveis", isCorrect: false },
                { text: "Fornecer feedback ao usuário", isCorrect: true },
                { text: "Ignorar padrões de navegação", isCorrect: false },
            ],
            justification: "Fornecer feedback ajuda os usuários a entenderem que suas ações foram registradas, aumentando a satisfação e a eficiência."
        },
        {
            text: "O que é um breakpoint em design responsivo?",
            options: [
                { text: "Um ponto onde a largura do design muda", isCorrect: true },
                { text: "Um erro no código", isCorrect: false },
                { text: "Uma imagem de alta resolução", isCorrect: false },
                { text: "Um tipo de layout", isCorrect: false },
            ],
            justification: "Breakpoints são pontos definidos onde o layout da página muda para se adaptar a diferentes larguras de tela."
        },
        {
            text: "Qual dos seguintes é um benefício da abordagem Mobile-First?",
            options: [
                { text: "Carregamento mais lento", isCorrect: false },
                { text: "Melhor desempenho em dispositivos móveis", isCorrect: true },
                { text: "Design mais complicado", isCorrect: false },
                { text: "Ignorar a otimização", isCorrect: false },
            ],
            justification: "A abordagem Mobile-First garante que o site seja otimizado para dispositivos móveis desde o início, resultando em um carregamento mais rápido e melhor desempenho."
        },
        {
            text: "O que é 'usabilidade'?",
            options: [
                { text: "A capacidade de um produto ser bonito", isCorrect: false },
                { text: "A facilidade com que os usuários podem usar um produto", isCorrect: true },
                { text: "A velocidade de carregamento de um site", isCorrect: false },
                { text: "O custo de um serviço", isCorrect: false },
            ],
            justification: "Usabilidade refere-se à facilidade com que um usuário pode interagir com um produto ou serviço, afetando a satisfação do usuário."
        },
        {
            text: "Qual é a função de um layout fluido?",
            options: [
                { text: "Permitir que elementos se movam conforme a tela redimensiona", isCorrect: true },
                { text: "Fixar elementos em posições específicas", isCorrect: false },
                { text: "Usar apenas tamanhos de fonte grandes", isCorrect: false },
                { text: "Ignorar a adaptabilidade", isCorrect: false },
            ],
            justification: "Layouts fluidos utilizam unidades relativas para garantir que os elementos se ajustem de acordo com a largura da tela, promovendo a adaptabilidade."
        },
        {
            text: "O que deve ser priorizado em um design Mobile-First?",
            options: [
                { text: "Animações complexas", isCorrect: false },
                { text: "Conteúdo importante e acessível", isCorrect: true },
                { text: "Imagens de alta resolução", isCorrect: false },
                { text: "Tabelas complicadas", isCorrect: false },
            ],
            justification: "Em um design Mobile-First, o foco deve ser no conteúdo essencial, garantindo que seja acessível e fácil de usar em telas pequenas."
        },
        {
            text: "Qual é um dos princípios da usabilidade?",
            options: [
                { text: "Aprendizado rápido", isCorrect: true },
                { text: "Cores chamativas", isCorrect: false },
                { text: "Imagens grandes", isCorrect: false },
                { text: "Navegação confusa", isCorrect: false },
            ],
            justification: "Um bom design deve permitir que os usuários aprendam rapidamente como usar a interface, aumentando a eficiência e satisfação."
        },
        {
            text: "Qual é a importância do feedback do usuário em um site?",
            options: [
                { text: "Tornar o site mais bonito", isCorrect: false },
                { text: "Aumentar a frustração do usuário", isCorrect: false },
                { text: "Ajudar o usuário a entender as ações realizadas", isCorrect: true },
                { text: "Reduzir a quantidade de conteúdo", isCorrect: false },
            ],
            justification: "Feedback adequado ajuda os usuários a compreenderem as consequências de suas ações, aumentando a clareza e reduzindo a confusão."
        },
    ]);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [justificationVisible, setJustificationVisible] = useState(false);
    const [justification, setJustification] = useState("");

    function handleAnswer(isCorrect) {
        if (isCorrect) {
            setPoints(prev => prev + 1);
        }

        setJustification(questions[currentQuestionIndex].justification);
        setJustificationVisible(true);

        if (currentQuestionIndex < questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(prev => prev + 1);
                setJustificationVisible(false);
            }, 5000);
        } else {
            setQuizCompleted(true);
            setTimeout(() => {
                setJustificationVisible(false);
            }, 5000)
        }
    }

    function restartQuiz() {
        setCurrentQuestionIndex(0);
        setPoints(0);
        setQuizCompleted(false);
        setJustificationVisible(false);
        setJustification("");
    }

    return (
        <div className={styles.quiz}>
            <h1 className={styles.title}>Quiz</h1>
            {quizCompleted ? (
                <div className={styles.end}>
                    <h2>Pontuação final: {points}</h2>
                    <button onClick={restartQuiz} className={styles.restartButton}>
                        Recomeçar
                    </button>
                </div>
            ) : (
                <Question
                    question={questions[currentQuestionIndex]}
                    onAnswer={handleAnswer}
                />
            )}
            {justificationVisible && (
                <div className={styles.justification}>
                    <h3>Justificativa:</h3>
                    <p>{justification}</p>
                </div>
            )}
        </div>
    );
}
