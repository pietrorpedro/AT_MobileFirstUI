import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function T12() {
    const [items, setItems] = useState([
        { id: 1, name: 'Leite 1L', unitPrice: 4.0, quantity: 1 },
        { id: 2, name: 'Farinha KG', unitPrice: 5.0, quantity: 2 },
        { id: 3, name: 'Sabonete', unitPrice: 3.5, quantity: 3 },
    ]);

    const [newItem, setNewItem] = useState({
        name: "",
        unitPrice: "",
        quantity: "",
    });

    const totalPrice = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

    function updateQuantity(id, delta) {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    }

    function handleInput(e) {
        const { name, value } = e.target;
        setNewItem({ ...newItem, [name]: value });
    }

    function handleAddItem() {
        if (newItem.name && newItem.unitPrice && newItem.quantity) {
            setItems([
                ...items,
                {
                    id: items.length + 1,
                    name: newItem.name,
                    unitPrice: parseFloat(newItem.unitPrice),
                    quantity: parseInt(newItem.quantity),
                },
            ]);
            setNewItem({ name: '', unitPrice: '', quantity: '' });
        }
    }

    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom textAlign={"center"}>
                Carrinho de Compras
            </Typography>

            <Box
                display={"flex"}
                flexDirection={{ xs: "column", md: "row" }}
                gap={10}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Box flex={1} mb={3}>
                    <Typography variant="h6" gutterBottom>
                        Adicionar Novo Item
                    </Typography>

                    <TextField
                        fullWidth
                        label="Nome do Item"
                        variant="outlined"
                        name="name"
                        value={newItem.name}
                        onChange={handleInput}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Preço Unitário"
                        variant="outlined"
                        name="unitPrice"
                        value={newItem.unitPrice}
                        onChange={handleInput}
                        margin="normal"
                        type="number"
                    />
                    <TextField
                        fullWidth
                        label="Quantidade"
                        variant="outlined"
                        name="quantity"
                        value={newItem.quantity}
                        onChange={handleInput}
                        margin="normal"
                        type="number"
                    />
                    <Button
                        variant="contained"
                        color="info"
                        fullWidth
                        onClick={handleAddItem}
                        sx={{ mt: 2 }}
                    >
                        Adicionar Item
                    </Button>
                </Box>

                <Box flex={1} display="flex" flexDirection="column" alignItems="center">
                    <Box width="100%" display="flex" flexDirection="column" alignItems="center">
                        <Box padding={2} marginTop={2} textAlign={"center"}>
                            <Typography variant="h6">Total: R$ {totalPrice.toFixed(2)}</Typography>
                        </Box>

                        {items.map((item) => (
                            <Box
                                key={item.id}
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                padding={2}
                                borderBottom={"1px solid #ddd"}
                                width="100%"
                            >
                                <Box flex={1}>
                                    <Typography variant="body1">{item.name}</Typography>
                                    <Typography variant="body2">R$ {item.unitPrice.toFixed(2)}</Typography>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <IconButton
                                        onClick={() => updateQuantity(item.id, -1)}
                                        aria-label="Diminuir quantidade"
                                    >
                                        -
                                    </IconButton>

                                    <Typography variant="body1" padding={"0 10px"}>
                                        {item.quantity}
                                    </Typography>

                                    <IconButton
                                        onClick={() => updateQuantity(item.id, +1)}
                                        aria-label="Aumentar quantidade"
                                    >
                                        +
                                    </IconButton>
                                </Box>
                            </Box>
                        ))}

                        <Button variant="contained" color="success" fullWidth>
                            Finalizar Compra
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}
