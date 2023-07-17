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
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 40px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    background-color: white;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    place-self: center;
`;

const boxAnimation = {
    start: {
        opacity: 0,
        scale: 0.5,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.5,
            // delayChildren은 자식 element에게 동시에 delay를 할당
            // 즉, 모든 자식 element는 0.5초 딜레이를 갖게됨
            delayChildren: 0.5,
            // staggerChildren은 자식 element에게 순차적으로 delay를 할당
            // 즉, 모든 자식 element는 0.3초 딜레이를 차례대로 갖게됨. 0.3 -> 0.6 -> 0.9 -> 1.2
            staggerChildren: 0.3,
        },
    },
};

const circleAnimation = {
    start: {
        opacity: 0,
        y: -10,
    },
    end: {
        opacity: 1,
        y: 0,
    },
};

function App() {
    return (
        <Wrapper>
            <Box variants={boxAnimation} initial="start" animate="end">
                {/* 부모 element인 Box의 inital과end 값인 start와 end를 자식element인 Circle도 기본적으로
                    동일한 이름으로 상속을 하기 때문에, circleAnimation 오브젝트에서 boxAnimation과 동일하게
                    start / end라고 이름을 지어주면, 부모로부터 상속받은 start / end라는 이름으로 알아서 애니메이션을 적용함
                    단, circleAnimation 오브젝트에서 start / end라는 이름을 사용하지 않을경우 안됨. */}
                <Circle variants={circleAnimation}></Circle>
                <Circle variants={circleAnimation}></Circle>
                <Circle variants={circleAnimation}></Circle>
                <Circle variants={circleAnimation}></Circle>
            </Box>
        </Wrapper>
    );
}

export default App;
