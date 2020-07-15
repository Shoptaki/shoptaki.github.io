import React, { useEffect, useRef, useState, useInterval } from "react"
import { Keyframes, config, animated } from "react-spring/renderprops"
import { useSpring, Spring, animated as ani } from "react-spring"
import delay from "delay"
import { useGesture } from "react-with-gesture"
import clamp from "lodash-es/clamp"

import styled from "styled-components"
import PropTypes from "prop-types"
import smartid from "../images/smartid.svg"
import blockchain from "../images/blockchain.svg"
import placeholder from "../images/placeholder.svg"

//data for nodes
const data = [
  {
    name: "A",
    icon: smartid,
    size: 42,
    x: 10,
    color: "yellow",
    url: "url(#A)",
    title: "Smart ID",
    description: "description here",
  },
  {
    name: "B",
    icon: blockchain,
    size: 40,
    x: 20,
    color: "#FFA000",
    url: "url(#B)",
    title: "Financial Platform",
    description: "description here",
  },
  {
    name: "C",
    icon: placeholder,
    size: 10,
    x: 30,
    color: "#FFB300",
    url: "url(#C)",
    title: "Health system",
    description: "coming soon",
  },
  {
    name: "D",
    icon: placeholder,
    size: 20,
    x: 40,
    color: "#FFECB3",
    url: "url(#D)",
    title: "Education",
    description: "coming soon",
  },
  {
    name: "E",
    icon: placeholder,
    size: 18,
    x: 50,
    color: "#00ACC1",
    url: "url(#E)",
    title: "Title here",
    description: "coming soon",
  },
  {
    name: "F",
    icon: placeholder,
    size: 22,
    x: 60,
    color: "#CDDC39",
    url: "url(#F)",
    title: "Title here",
    description: "coming soon",
  },
  {
    name: "G",
    icon: placeholder,
    size: 8,
    x: 70,
    color: "#607D8B",
    url: "url(#G)",
    title: "Title here",
    description: "coming soon",
  },
  {
    name: "H",
    icon: placeholder,
    size: 24,
    x: 80,
    color: "#FFA000",
    url: "url(#H)",
    title: "Title here",
    description: "coming soon",
  },
  {
    name: "I",
    icon: placeholder,
    size: 27,
    x: 90,
    color: "#FFA000",
    url: "url(#I)",
    title: "Title here",
    description: "coming soon",
  },
]

//pattern element in each svg(node)
const Pattern = ({ picPath, patternID }) => (
  <pattern
    id={patternID}
    x="0%"
    y="0%"
    height="100%"
    width="100%"
    viewBox="65 15 150 150"
  >
    <image x="0%" y="0%" width="512" height="512" xlinkHref={picPath} />
  </pattern>
)

Pattern.propTypes = {
  picPath: PropTypes.string.isRequired,
  patternID: PropTypes.string,
}
Pattern.defaultProps = {
  patternID: placeholder,
}

const Container = styled.div`
  width: "900px";
  height: "900px";
  display: "flex";
  justifycontent: "center";
  alignitems: "center";
  overflow: "hidden";
  background: "aquamarine";
  padding: 10;
`

const ContentA = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },
  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 70, delay: 0 },
        delay: 10,
        left: 800,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 70, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentB = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },
  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(3000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 70, delay: 0 },
        delay: 10,
        left: 820,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 70, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentC = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(6000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 80, delay: 0 },
        delay: 10,
        left: 850,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 80, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentD = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(9000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 90, delay: 0 },
        delay: 10,
        left: 860,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 90, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentE = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(12000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 100, delay: 0 },
        delay: 10,
        left: 850,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 100, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentF = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(15000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 50, delay: 0 },
        delay: 10,
        left: 800,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 50, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentG = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(18000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 50, delay: 0 },
        delay: 10,
        left: 800,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 50, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentH = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(21000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 50, delay: 0 },
        delay: 10,
        left: 800,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 50, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})
const ContentI = Keyframes.Spring({
  highlight: {
    from: { scale: 1 },
    to: { scale: 0, opacity: 0 },
  },

  open: async next => {
    // None of this will cause React to render, the component renders only once :-)
    while (true) {
      await delay(24000)
      await next({
        from: { opacity: 0 },
        opacity: 1,
      })
      await next({
        from: { left: 50, delay: 0 },
        delay: 10,
        left: 800,
        config: config.molasses,
      })
      next({
        from: { top: 100, delay: 0 },
        top: 550,
        delay: 10,
        config: config.molasses,
      })
      await delay(2000) // don't wait for the animation above to finish, go to the next one in 2s
      await next({ left: 50, config: config.molasses, delay: 10 })
      await next({
        top: 100,
        delay: 10,
        config: config.molasses,
      })
      await next({
        width: 120,
        height: 120,
        delay: 10,
        config: config.molasses,
      })
    }
  },
})

Node.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  pic: PropTypes.string,
  color: PropTypes.string,
}
const Bubbles = () => {
  const [centerNode, setCenterNode] = useState(0)
  const [isStart, setIsStart] = useState(false)
  // function toggle(() => setIsStart(k => ("start"))

  const [stateA, toggleA] = useState(false)
  function focusA() {
    setCenterNode(data[0])
    toggleA(true)

    toggleB(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)
    toggleF(false)
    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [stateB, toggleB] = useState(false)
  function focusB() {
    setCenterNode(data[1])
    toggleB(true)
    toggleA(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)
    toggleF(false)
    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [stateC, toggleC] = useState(false)
  function focusC() {
    setCenterNode(data[2])
    toggleC(true)
    toggleA(false)
    toggleB(false)

    toggleD(false)
    toggleE(false)
    toggleF(false)
    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [stateD, toggleD] = useState(false)
  function focusD() {
    setCenterNode(data[3])
    toggleD(true)
    toggleA(false)
    toggleB(false)
    toggleC(false)

    toggleE(false)
    toggleF(false)
    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [stateE, toggleE] = useState(false)
  function focusE() {
    setCenterNode(data[4])
    toggleE(true)
    toggleA(false)
    toggleB(false)
    toggleC(false)
    toggleD(false)

    toggleF(false)
    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [stateF, toggleF] = useState(false)
  function focusF() {
    setCenterNode(data[5])
    toggleF(true)
    toggleA(false)
    toggleB(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)

    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [stateG, toggleG] = useState(false)
  function focusG() {
    setCenterNode(data[6])
    toggleG(true)
    toggleA(false)
    toggleB(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)
    toggleF(false)

    toggleH(false)
    toggleI(false)
  }
  const [stateH, toggleH] = useState(false)
  function focusH() {
    setCenterNode(data[7])
    toggleH(true)
    toggleA(false)
    toggleB(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)
    toggleF(false)
    toggleG(false)

    toggleI(false)
  }
  const [stateI, toggleI] = useState(false)
  function focusI() {
    setCenterNode(data[8])
    toggleI(true)
    toggleA(false)
    toggleB(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)
    toggleF(false)
    toggleG(false)
    toggleH(false)
  }
  function backToNormal() {
    setCenterNode(0)
    toggleA(false)
    toggleB(false)
    toggleC(false)
    toggleD(false)
    toggleE(false)
    toggleF(false)
    toggleG(false)
    toggleH(false)
    toggleI(false)
  }
  const [hoverA, isHoverA] = useState(false)
  // const [bindA, { widthA }] = useMeasure()
  // const propsA = useSpring({ width: open ? width : 0 }, { height: open ? width : 0 })
  const [{ xyA }, setA] = useSpring(() => ({ xyA: [0, 0] }))

  const bindA = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setA({
      xyA: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyB }, setB] = useSpring(() => ({ xyB: [0, 0] }))

  const bindB = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setB({
      xyB: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyC }, setC] = useSpring(() => ({ xyC: [0, 0] }))
  const bindC = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setC({
      xyC: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyD }, setD] = useSpring(() => ({ xyD: [0, 0] }))
  const bindD = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setD({
      xyD: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyE }, setE] = useSpring(() => ({ xyE: [0, 0] }))
  const bindE = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setE({
      xyE: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyF }, setF] = useSpring(() => ({ xyF: [0, 0] }))
  const bindF = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setF({
      xyF: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyG }, setG] = useSpring(() => ({ xyG: [0, 0] }))
  const bindG = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setG({
      xyG: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyH }, setH] = useSpring(() => ({ xyH: [0, 0] }))
  const bindH = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setH({
      xyH: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  const [{ xyI }, setI] = useSpring(() => ({ xyI: [0, 0] }))
  const bindI = useGesture(({ down, delta, velocity }) => {
    velocity = clamp(velocity, 1, 8)
    setI({
      xyI: down ? delta : [0, 0],
      config: { mass: velocity, tension: 500 * velocity, friction: 50 },
    })
  })
  return (
    <Container>
      <ContentA state={stateA ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindA()}
            style={{
              transform: xyA.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusA}
              style={{
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[0].name} picPath={data[0].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[0].name}
                  cx="45"
                  cy="50"
                  r={data[0].size}
                  fill={data[0].url}
                  stroke={data[0].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentA>

      <ContentB state={stateB ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindB()}
            style={{
              transform: xyB.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusB}
              style={{
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[1].name} picPath={data[1].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[1].name}
                  cx="45"
                  cy="50"
                  r={data[1].size}
                  fill={data[1].url}
                  stroke={data[1].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentB>
      <ContentC state={stateC ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindC()}
            style={{
              transform: xyC.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusC}
              style={{
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[2].name} picPath={data[2].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[2].name}
                  cx="45"
                  cy="50"
                  r={data[2].size}
                  fill={data[2].url}
                  stroke={data[2].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentC>
      <ContentD state={stateD ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindD()}
            style={{
              transform: xyD.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusD}
              style={{
                // transform: x.interpolate(
                //   { range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
                //     output: [0, 5, 6,7,8,9, 10, 12, 15]})
                //   .interpolate(x => `translate3d(${x}%,0,0)`),
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[3].name} picPath={data[3].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[3].name}
                  cx="45"
                  cy="50"
                  r={data[3].size}
                  fill={data[3].url}
                  stroke={data[3].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentD>
      <ContentE state={stateE ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindE()}
            style={{
              transform: xyE.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusE}
              style={{
                // transform: x.interpolate(
                //   { range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
                //     output: [0, 5, 6,7,8,9, 10, 12, 15]})
                //   .interpolate(x => `translate3d(${x}%,0,0)`),
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[4].name} picPath={data[4].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[4].name}
                  cx="45"
                  cy="50"
                  r={data[4].size}
                  fill={data[4].url}
                  stroke={data[4].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentE>
      <ContentF state={stateF ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindF()}
            style={{
              transform: xyF.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusF}
              style={{
                // transform: x.interpolate(
                //   { range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
                //     output: [0, 5, 6,7,8,9, 10, 12, 15]})
                //   .interpolate(x => `translate3d(${x}%,0,0)`),
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[5].name} picPath={data[5].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[5].name}
                  cx="45"
                  cy="50"
                  r={data[5].size}
                  fill={data[5].url}
                  stroke={data[5].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentF>
      <ContentG state={stateG ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindG()}
            style={{
              transform: xyG.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusG}
              style={{
                // transform: x.interpolate(
                //   { range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
                //     output: [0, 5, 6,7,8,9, 10, 12, 15]})
                //   .interpolate(x => `translate3d(${x}%,0,0)`),
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[6].name} picPath={data[6].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[6].name}
                  cx="45"
                  cy="50"
                  r={data[6].size}
                  fill={data[6].url}
                  stroke={data[6].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentG>
      <ContentH state={stateH ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindH()}
            style={{
              transform: xyH.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusH}
              style={{
                // transform: x.interpolate(
                //   { range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
                //     output: [0, 5, 6,7,8,9, 10, 12, 15]})
                //   .interpolate(x => `translate3d(${x}%,0,0)`),
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[7].name} picPath={data[7].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[7].name}
                  cx="45"
                  cy="50"
                  r={data[7].size}
                  fill={data[7].url}
                  stroke={data[7].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentH>

      <ContentI state={stateI ? "highlight" : "open"} native>
        {props => (
          <ani.div
            width="160px"
            height="150px"
            {...bindI()}
            style={{
              transform: xyI.interpolate(
                (x, y) => `translate3d(${x}px,${y}px,0)`
              ),
            }}
          >
            <animated.svg
              width="160px"
              height="150px"
              onClick={focusI}
              style={{
                // transform: x.interpolate(
                //   { range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 1],
                //     output: [0, 5, 6,7,8,9, 10, 12, 15]})
                //   .interpolate(x => `translate3d(${x}%,0,0)`),
                position: "absolute",
                ...props,
              }}
            >
              <defs>
                <Pattern patternID={data[8].name} picPath={data[8].icon} />
              </defs>
              <animated.g>
                <animated.circle
                  id={data[8].name}
                  cx="45"
                  cy="50"
                  r={data[8].size}
                  fill={data[8].url}
                  stroke={data[8].color}
                  stroke-width="4"
                />
              </animated.g>
            </animated.svg>
          </ani.div>
        )}
      </ContentI>
      <animated.svg
        marginTop="200px"
        width="500px"
        height="500px"
        onClick={backToNormal}
        style={{
          position: "absolute",
          opacity: 1,
          marginTop: "120px",
          marginLeft: "200px",
        }}
      >
        <defs>
          <Pattern patternID="focus" picPath="" />
        </defs>
        <animated.g>
          <animated.circle
            cx="220"
            cy="220"
            r="200"
            fill="url(#focus)"
            stroke={centerNode.color}
            stroke-width="12"
          ></animated.circle>
        </animated.g>
      </animated.svg>
      {/* <Spring to={{ opacity: centerNode === 0 ? 0 : 1 }}>
        {styles => (
          <animated.div
          style={{
            ...styles
          }}
          > */}
      <animated.div
        style={{
          position: "absolute",
          marginTop: "180px",
          marginLeft: "330px",
        }}
      >
        <img src={centerNode.icon} width="150px" />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            top: "50",
            left: "420",
          }}
        ></div>
        <h2>{centerNode.title}</h2>
        <p>{centerNode.description}</p>
        {/* <a href="/">View Details </a> */}
      </animated.div>
      {/* )}
      </Spring> */}
    </Container>
  )
}

export default Bubbles
