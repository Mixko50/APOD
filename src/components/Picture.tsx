import { Box } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PictureBar = ({ picture }: { picture: any }) => {
    console.log(process.env);

    return (
        <Box>
            <Box bgImage={`url(${picture?.hdurl})`} sx={section}>
                <motion.div
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                >
                    <Text
                        fontWeight={700}
                        fontSize={{
                            base: "100px",
                            sm: "35px",
                            md: "70px",
                            lg: "90px",
                        }}
                    >
                        Today's Picture
                    </Text>
                </motion.div>
                <motion.div
                    transition={{ delay: 1, duration: 1 }}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                >
                    <Text>Astronomy Picture of the Day</Text>
                </motion.div>
                <motion.div
                    transition={{ delay: 1.5, duration: 1 }}
                    animate={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                >
                    <Text marginTop="10px">{picture?.date}</Text>
                </motion.div>
            </Box>
        </Box>
    );
};

const section = {
    w: "100vw",
    h: "100vh",
    bgRepeat: "no-repeat",
    bgSize: "cover",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
};

export default PictureBar;
