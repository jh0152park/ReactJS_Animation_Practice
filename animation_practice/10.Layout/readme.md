# Code

```TS
import styled from "styled-components";
import {
    AnimatePresence,
    motion,
    useMotionValue,
    useTransform,
    useViewportScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Box = styled(motion.div)`
    width: 300px;
    height: 300px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

    display: flex;
    /* justify-content: flex-start;
    align-items: flex-start; */
    font-size: 20px;
    font-weight: bold;
`;

const Circle = styled(motion.div)`
    background-color: #00a5ff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
    const [clicked, setClikced] = useState(false);
    function toggleClicked() {
        setClikced((prev) => !prev);
    }

    return (
        <Wrapper onClick={toggleClicked}>
            <Box
                style={{
                    justifyContent: clicked ? "center" : "flex-start",
                    alignItems: clicked ? "center" : "flex-start",
                }}
            >
                <Circle layout></Circle>
            </Box>
        </Wrapper>
    );
}

export default React.memo(App);

```
