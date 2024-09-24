import { AccountCircle, ChatBubbleOutline, FavoriteBorder, Send } from "@mui/icons-material";
import { Box, Icon, IconButton, Typography } from "@mui/material";

export default function Post({
    img,
    likes,
    comments = [],
    shares,
    user,
    date,
    title,
    desc
}) {
    return (
        <Box
            sx={{ boxShadow: 3 }}
            borderRadius={"8px"}
            maxWidth={"sm"}
            margin={"0 auto 50px auto"}
        >
            <Box>
                {/* img */}
                <Box
                    component="img"
                    src={img}
                    sx={{
                        width: '100%',
                        maxWidth: "100%",
                        height: '400px',
                        objectFit: 'cover',
                        borderRadius: '8px 8px 0 0'
                    }}
                />

                {/* conteudo */}
                <Box padding={1}>
                    {/* ações */}
                    <Box display={"flex"} alignItems={"center"} gap={1.5}>
                        <Box display={"flex"} alignItems={"center"}>
                            <IconButton>
                                <FavoriteBorder sx={{ color: "black" }} />
                            </IconButton>
                            <Typography variant="p">
                                {likes}
                            </Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <IconButton>
                                <ChatBubbleOutline sx={{ color: "black" }} />
                            </IconButton>
                            <Typography variant="p">
                                {comments.length}
                            </Typography>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <IconButton>
                                <Send sx={{ color: "black" }} />
                            </IconButton>
                            <Typography variant="p">
                                {shares}
                            </Typography>
                        </Box>
                    </Box>
                    {/* dados da publicação */}
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        marginTop={1}
                    >
                        <Box display={"flex"} alignItems={"center"} gap={1} marginBottom={1}>
                            <Icon>
                                <AccountCircle />
                            </Icon>
                            <Typography variant="h6">
                                {user}
                            </Typography>
                        </Box>
                        <Typography variant="h6">
                            {date}
                        </Typography>
                    </Box>
                    {/* descrição */}
                    <Box>
                        <Typography variant="h5" gutterBottom>{title}</Typography>
                        <Typography variant="p" lineHeight={1.4}>
                            {desc}
                        </Typography>
                    </Box>
                    {/* comentarios */}
                    <Box marginTop={2} display={"flex"} flexDirection={"column"} gap={1}>
                        {comments.map((comment, index) => (
                            <Box
                                display={"flex"}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                                sx={{ borderColor: 'grey.500', borderBottom: 1, paddingBottom: 1 }}
                                key={index}
                            >
                                <Box>
                                    <Typography variant="h6">{comment.user}</Typography>
                                    <Typography variant="p">{comment.comment}</Typography>
                                </Box>
                                <Box display={"flex"} alignItems={"center"}>
                                    <IconButton>
                                        <FavoriteBorder sx={{ color: "black" }} />
                                    </IconButton>
                                    <Typography variant="p">{comment.likes}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}