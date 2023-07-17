# Code

```TS
import styled from "styled-components";
import {
    motion,
    useMotionValue,
    useTransform,
    useViewportScroll,
} from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.div)`
    height: 200vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238));
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    grid-template-columns: repeat(2, 1fr);
`;

function App() {
    const x = useMotionValue(0);
    const rotate = useTransform(x, [-600, 0, 700], [-660, 1, 350]);
    const gradient = useTransform(
        x,
        [-600, 0, 600],
        [
            "linear-gradient(135deg, rgb(238, 234, 0), rgb(167, 238, 0))",
            "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
            "linear-gradient(135deg, rgb(0, 95, 238), rgb(0, 238, 182))",
        ]
    );

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

    return (
        <Wrapper style={{ background: gradient }}>
            <Box
                style={{
                    x,
                    rotateZ: rotate,
                    scale: scale,
                }}
                drag="x"
                dragSnapToOrigin
            ></Box>
        </Wrapper>
    );
}

export default App;

```
