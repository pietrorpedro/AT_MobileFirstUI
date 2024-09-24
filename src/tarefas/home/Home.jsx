import { Link } from "react-router-dom"
import styles from "./Home.module.css"

export default function Home() {
    return (
        <div className={styles.home}>
            <ul>
                <li><Link to={"/1"}>T1</Link></li>
                <li><Link to={"/2"}>T2</Link></li>
                <li><Link to={"/3"}>T3</Link></li>
                <li><Link to={"/4"}>T4</Link></li>
                <li><Link to={"/5"}>T5</Link></li>
                <li><Link to={"/6"}>T6</Link></li>
                <li><Link to={"/7"}>T7</Link></li>
                <li><Link to={"/8"}>T8</Link></li>
                <li><Link to={"/9"}>T9</Link></li>
                <li><Link to={"/10"}>T10</Link></li>
                <li><Link to={"/11"}>T11</Link></li>
                <li><Link to={"/12"}>T12</Link></li>
                <li><Link to={"/13"}>T13</Link></li>
                <li><Link to={"/14"}>T14</Link></li>
                <li><Link to={"/15"}>T15</Link></li>
                <li><Link to={"/16"}>T16</Link></li>
            </ul>
        </div>
    )
}