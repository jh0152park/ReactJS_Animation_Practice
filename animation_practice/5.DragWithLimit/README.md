# Code

```TS
import styled from "styled-components";
import { motion, spring } from "framer-motion";
import { useRef } from "react";

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

const BiggerBox = styled.div`
    width: 500px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const boxAnimation = {
    hover: { scale: 1.5, rotateZ: 90 },
    click: { borderRadius: "50%", scale: 1 },
};

function App() {
    const biggerBoxRef = useRef<HTMLDivElement>(null);
    return (
        <Wrapper>
            <BiggerBox ref={biggerBoxRef}>
                <Box
                    drag
                    dragSnapToOrigin
                    dragElastic={0.5}
                    dragConstraints={biggerBoxRef}
                    variants={boxAnimation}
                    whileHover="hover"
                    whileTap="click"
                ></Box>
            </BiggerBox>
        </Wrapper>
    );
}

export default App;

```
