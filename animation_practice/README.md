# ReactJS Animation Practice

ReactJS animation practice with `framer-motion`

# Reference

Framer: https://www.framer.com/motion/

Logo: https://fontawesome.com

# Practice Videos

## [1. Rotate](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/1.RotateAnimation)

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/6bdaef61-bfbd-47d6-9e4a-176293765f89

## [2. Variants](<https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/2.VariantsAnimation(parent%2Bchildren%20elements)>)

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/f95b89f0-23fe-4716-a528-a47f2ce4677d

## [3. Hover and Tap](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/3.HoverAndTap)

-   `whileHover`: animation will be working when mouse is on top of our `motion content`
-   `whileTap`: animation will be working when mouse left button is keep clicking of our `motion content`

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/ef2f72d3-c6c1-45c3-8227-461e329157ad

## [4. Drag with No Limit](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/4.Drag)

-   `drag`: enable to can able to darg of `motion content` with no limit(constraints)

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/f42946a3-95a6-475e-ab77-645dc2191e05

## [5. Drag with Limit(Constraints)](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/5.DragWithLimit)

-   `drag`: enable to can able to darg of `motion content` with no limit(constraints)
-   `dragSnapToOrigin`: bring back the drag able motion content to position of initial when drag off
-   `dragElastic`: could be `0 to 1` and its gonna be elastic when dragging
-   `dragConstraints`: can setup the limit of our draggable content whit this feature. can set the limit distance manually with `top`,`bottom`,`left`,`right` or just let know the limit(constraints) element with `useRef`

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/d3698504-4033-4a3c-b423-b066ccfc1b79

## [6. Motion Value](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/6.useMotionValue_useTransform)

-   `useMotionValue`: It is not a part of `React`. That mean is would not be re-rendering when status was changed of our motion content.
    Also it's keep tracing the `state(상태)` and `velocity(속도)`, and connect to `motion content(like div or span or whatever)` with style property like below.

    ```TS
    import { motion, useMotionValue } from "framer-motion"

    export function MyComponent() {
    const x = useMotionValue(0)
    return < motion.div style={{ x }} />
    ```

    -   `set`: would be update the `motion content` with set method. `Ex) x.set(100)`
    -   `get`: can read the value of `motion contenct` with get method. also its should be `string|number`. `Ex) x.get()`

-   `useTransform`: connect to the `useMotionValue` with this method. It is will be return new mapping value from `input range` to `output range`, after that can change the state of `other motion value` with this new return value. and also the new return value should be `string|number`

    ```TS
    const x = useMotionValue(0)
    const input = [-200, 0, 200]
    const output = [0, 1, 0]
    const opacity = useTransform(x, input, output)

    return < motion.div drag="x" style={{ x, opacity }} />
    ```

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/27f81f1e-6701-4b82-a598-3d7e10558d27

## [7. Scroll](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/7.%20Scroll)

Basically using all of `useMotionValue` and `useTransform`, so please pay attention with `No.6 section`

-   `useViewportScroll`: will give four different values like `scrollX`, `scrollXProgress`, `scrollY`, `scrollYProgreses`
    -   `scrollX`: will be return `number` value of current X position in pixels of window
    -   `scrollY`: will be return `number` value of current Y position in pixels of window
    -   `scrollXProgress`: will be return `float` value between 0 and 1 of current X progress position of window
    -   `scrollYProgress`: will be return `float` value between 0 and 1 of current Y progress position of window

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/4f3c399d-eac3-409a-a1ac-5691a416519f

## [8. Logo Animation](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/8.Logo%20Animation)

-   `svg logo`: took svg file from `fontaswome` site
-   `path`: kind of default tag of svg element
-   `stroke`: color of side of logo image
-   `stroke-width(strokeWidth)`: width of stroke color
-   `pathLength`: length of drawing the entire logo. A value between 0 and 1. 0 is not drawn at all, and 1 is drawn at all
-   `fill`: literally the color to fill of entire logo
-   `transition`: can adabtive the different setting value to each other at same `motion content`. The most important thing is `transition` is not a CSS syntax of styled component, just one of property of `motion conent` as below

    ```TS
      <SVG
          xmlns="http://www.w3.org/2000/svg"
          height="10em"
          viewBox="0 0 448 512"
      >
          <motion.path
              variants={svg}
              initial="start"
              animate="end"
              transition={{
                  default: {
                      duration: 5,
                  },
                  fill: {
                      duration: 2,
                      delay: 3,
                  },
              }}
              ...
              ...
              ...
          />
      </SVG>
    ```

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/8c1bfbe9-d2aa-4a40-b444-73d6cad4bc27

## [9. Exit(AnimatePresence)](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/9.Exit)

-   `AnimatePresence`: have to be showing this and must be had an children element with `condition systax(condition? true : false)`
-   Properties
    -   `inital`: literally inital state of `motion content` to change
    -   `animate`: final state of `motion content` to change, from `initial` condition
    -   `exit`: literally exit state of `motion content` when gonna be gone

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/8365a8ae-8a10-47c2-a72e-9f52566450ff

## [9-1. Slider](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/9-1.Slider)

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/87bb8253-3541-4c48-85d2-b6643cb1f198

## [9-2. Slider Reverse](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/9-2.Slider%20Reverse)

-   `custom`: Inform the variant of the change in status from the outside. Also have to write down at the `AnimatePresence` element too.
    After that, from `custom` we can have different logic at the our each variants like below.

    ```TS
    const boxVariants = {
      enter: (reverse: number) => ({
          x: 500 * reverse,
          opacitiy: 0,
          scale: 0,
      }),
      center: {
          x: 0,
          opacitiy: 1,
          scale: 1,
          rotateZ: 360,
          transition: {
              duration: 0.3,
          },
      },
      exit: (reverse: number) => ({
          opacity: 0,
          scale: 0,
          x: -500 * reverse,
      }),
    };

    AnimatePresence custom={reverse}>
        <Box
            custom={reverse}
            variants={boxVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={visible}
        >
            {visible}
        </Box>
    </AnimatePresence>
    ```

    https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/9c8a650c-94ca-499a-bd96-e5dc92e43e03

## [9-3. Wait Mode](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/9-2.Slider%20Reverse)

-   `mode="wait"`: would be start the next animation when done previous animation. Default value is `exit` animation and `initial` animation are start at the almost same time like as above video. But different when enable the `wait` mode as below video.

    ```TS
    AnimatePresence mode="wait" custom={reverse}>
        <Box
            custom={reverse}
            variants={boxVariants}
            initial="enter"
            animate="center"
            exit="exit"
            key={visible}
        >
            {visible}
        </Box>
    </AnimatePresence>
    ```

    https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/d095aae1-a3b7-4bbe-80d8-e9e2e8758b89

## [10. Layout](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/10.Layout)

-   `layout`: just will give some animation effect to state change element automatically

    ```TS
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
    ```

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/01487df6-b688-45c7-bf8a-e3bc1006adc6

## [11. Shared Layout(layoutId)](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/11.Shared%20Layout)

-   `layoutId`: just adaptived same animation at from different element with just same `layoutId` as below

    ```TS
    <Wrapper onClick={toggleClicked}>
        <Box>{!clicked ? <Circle layoutId="circle"></Circle> : null}</Box>
        <Box>{clicked ? <Circle layoutId="circle"></Circle> : null}</Box>
    </Wrapper>
    ```

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/6ea7c1b9-6cb5-4c96-b4d8-79145e626b85

## [12. Select Animation(layoutId)](https://github.com/jh0152park/ReactJS_Animation_Practice/tree/main/animation_practice/12.Select)

Create different 4 element with own unique key each. After that connect with that between separate element using `layoutId`. Then automatically applies a super awesome animation!

https://github.com/jh0152park/ReactJS_Animation_Practice/assets/118165975/14625ab2-7a92-4b8b-bec7-f22b037e710f
