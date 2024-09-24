import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function Header() {
    const [menuElement, setMenuElement] = useState(null);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleOpenMenu(e) {
        setMenuElement(e.currentTarget);
    };

    function handleCloseMenu() {
        setMenuElement(null);
    }

    return (
        <Box marginBottom={5}>
            <AppBar position="static">
                <Toolbar>
                    {!isDesktop && (
                        <IconButton
                            edge={"start"}
                            color={"inherit"}
                            aria-label={"Menu"}
                            onClick={handleOpenMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}

                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Rede Social
                    </Typography>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="Perfil"
                        onClick={handleCloseMenu}
                    >
                        <AccountCircle />
                    </IconButton>

                    <Menu
                        anchorEl={menuElement}
                        keepMounted
                        open={Boolean(menuElement)}
                        onClose={handleCloseMenu}
                    >
                        <MenuItem onClick={handleCloseMenu}>Início</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Feed</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Comunidades</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Amigos</MenuItem>
                        <MenuItem onClick={handleCloseMenu}>Postar</MenuItem>
                    </Menu>
                </Toolbar>

                {isDesktop && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: 1,
                            backgroundColor: "transparent"
                        }}
                    >
                        <MenuItem>Início</MenuItem>
                        <MenuItem>Feed</MenuItem>
                        <MenuItem>Comunidades</MenuItem>
                        <MenuItem>Amigos</MenuItem>
                        <MenuItem>Postar</MenuItem>
                    </Box>
                )}
            </AppBar>
        </Box>
    );
}