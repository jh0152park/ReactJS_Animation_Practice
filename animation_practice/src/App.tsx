import styled from "styled-components";
import { motion, spring } from "framer-motion";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    grid-template-columns: repeat(2, 1fr);
`;

const boxAnimation = {};

function App() {
    return (
        <Wrapper>
            <Box
                whileHover={{ scale: 2 }}
                whileTap={{ borderRadius: "100px" }}
            ></Box>
        </Wrapper>
    );
}

export default App;
