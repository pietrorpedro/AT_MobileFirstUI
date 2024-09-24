import { Box, Typography } from "@mui/material";

export default function Friends({title, friends}) {
    return (
        <Box sx={{boxShadow: 3}} maxWidth={"sm"} padding={1} margin={{xs: "20px auto", md: "0 auto 20px auto"}}>
            <Typography variant="h5" gutterBottom textAlign={"center"}>{title}</Typography>
            {friends.map((friend, index) => (
                <Box display={"flex"} gap={1} key={index} marginBottom={2} sx={{cursor: "pointer"}}>
                    <Box
                        component="img"
                        src={friend.img}
                        sx={{width: "50px", height: "50px"}}
                        borderRadius={100}
                    />
                    <Box>
                        <Typography variant="h6">{friend.user}</Typography>
                        <Typography variant="p">Amigos em comum: {friend.friendsInCommom}</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}