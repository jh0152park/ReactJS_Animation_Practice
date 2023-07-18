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

const Wrapper = styled(motion.div)`
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
    position: absolute;
    top: 100px;
    left: 550px;
`;

const boxVariants = {
    init: {
        opacitiy: 0,
        scale: 0,
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotateZ: 360,
    },
    exit: {
        opacity: 0,
        scale: 0,
        y: 30,
    },
};

function App() {
    const [show, setShow] = useState(false);
    return (
        <Wrapper>
            <AnimatePresence>
                {show ? (
                    <Box
                        variants={boxVariants}
                        initial="init"
                        animate="visible"
                        exit="exit"
                    ></Box>
                ) : null}
            </AnimatePresence>
            <button
                onClick={() => {
                    setShow((prev) => !prev);
                }}
            >
                Click
            </button>
        </Wrapper>
    );
}

export default App;

```
