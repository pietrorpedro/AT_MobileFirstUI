import { useState } from "react";
import ListItem from "../ListItem/ListItem";
import styles from "./List.module.css";

export default function List() {
    const [items, setItems] = useState([
        { name: "Arroz", price: 4.99, quantity: 2 },
        { name: "Feijão", price: 6.49, quantity: 1 },
    ]);
    const [newItem, setNewItem] = useState({
        name: "",
        price: "",
        quantity: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem((prevItem) => ({
            ...prevItem,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newItem.name || !newItem.price || !newItem.quantity) {
            console.log("Preencha todos os campos");
            return;
        }
        const itemToAdd = {
            name: newItem.name,
            price: parseFloat(newItem.price),
            quantity: parseInt(newItem.quantity),
        };
        setItems((prevItems) => [...prevItems, itemToAdd]);
        setNewItem({ name: "", price: "", quantity: "" });
    };

    const total = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className={styles.list}>
            <div className={styles.form}>
                <h1 className={styles.title}>Lista de Compras</h1>
                <form onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder="Nome do Produto"
                        name="name"
                        value={newItem.name}
                        onChange={handleChange}
                    />

                    <label>Valor Unitário</label>
                    <input
                        type="number"
                        placeholder="Valor Unitário"
                        name="price"
                        value={newItem.price}
                        onChange={handleChange}
                    />

                    <label>Quantidade</label>
                    <input
                        type="number"
                        placeholder="Quantidade"
                        name="quantity"
                        value={newItem.quantity}
                        onChange={handleChange}
                    />
                    <button type="submit">Salvar</button>
                </form>
            </div>

            <ul>
                <div className={styles.total}>
                    <h2>Valor total da compra: R$ {total.toFixed(2)}</h2>
                </div>
                {items.map((item, index) => (
                    <ListItem
                        key={index}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                    />
                ))}
            </ul>
        </div>
    );
}
