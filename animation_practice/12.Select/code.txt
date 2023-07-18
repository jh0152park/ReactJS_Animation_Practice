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
`;

const Box = styled(motion.div)`
    /* width: 200px; */
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;

    /* margin: 20px; */
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 10px;

    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OverlayVariant = {
    start: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
    end: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    exit: {
        backgroundColor: "rgba(0, 0, 0, 0)",
    },
};

function App() {
    const [id, setId] = useState<null | string>(null);

    console.log(id);

    return (
        <Wrapper>
            <Grid>
                {[1, 2, 3, 4].map((n) => (
                    <Box
                        onClick={() => setId(n + "")}
                        key={n + ""}
                        layoutId={n + ""}
                    ></Box>
                ))}
            </Grid>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        onClick={() => setId(null)}
                        variants={OverlayVariant}
                        initial="start"
                        animate="end"
                        exit="exit"
                    >
                        <Box
                            layoutId={id}
                            style={{
                                width: 600,
                                height: 200,
                            }}
                        ></Box>
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default React.memo(App);
