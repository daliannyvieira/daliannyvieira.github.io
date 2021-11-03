import React, {useState} from "react"
import styled from 'styled-components'

import Seo from "../components/seo"
import Layout from "../components/Layout"
import Bio from "../components/Bio";

import { getSticker } from "../utils/stickers"

const Shape = styled.div.attrs(props => ({
  style: {
      background: props.color ? props.color : '#ffd670',
      width: props.size ? props.size : '3rem',
      height: props.size ? props.size : '3rem',
      left: props.x,
      top: props.y,
    },
  }))`
  position: absolute;
  z-index: 1;
  border-radius: 100%;
  opacity: 0.5;
}
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const IndexPage = () => {
  const [cursor, setCursor] = useState({x: 0, y: 0})
  const [shapes, setShapes] = useState([])

  let height;
  let width;

  if (typeof document !== `undefined`) {
    height = document.documentElement.clientHeight
    width = document.documentElement.clientWidth
  }

  const wrapY = (y) => y > 75 && (y + 75) < height;
  const wrapX = (x) => x > 75 && (x + 75) < width;

  const getCursor = (e) => {
    if (wrapY(e.pageY, height) && wrapX(e.pageX, width)) {
      const cursor = {
        x: e.pageX,
        y: e.pageY,
      }
      setCursor(cursor)
    } else {
      setCursor({x: 0, y: 0})
    }
  }

  const handleClick = (e) => {
    if (wrapY(e.pageY) && wrapX(e.pageX)) {
      const shape = getSticker(e);
      setShapes([...shapes, shape])
    }
  }

  return (
    <Section onClick={handleClick} onMouseMove={getCursor}>
      {cursor.x !== 0 && (
        <Shape
          x={`calc(${cursor.x}px - 1.5rem)`}
          y={`calc(${cursor.y}px - 1.5rem)`}
        />
      )}
      {shapes && shapes.map((shape, index) => {
        return (
          <Shape
            key={index}
            color={shape.color}
            size={`${shape.size}rem`}
            x={`calc(${shape.x}px - ${shape.size / 2}rem)`}
            y={`calc(${shape.y}px - ${shape.size / 2}rem)`}
          />
        )
      })}
      <Layout>
        <Seo
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `vuejs`,
            `vue`,
            `nodejs`,
            `node`,
            `reactjs`,
            `react`,
            `python`,
            `vainaweb`,
            `dalianny vieira`,
            `teaching`,
            `leadership`,
          ]}
        />
        <Bio />
      </Layout>
    </Section>
  )
}

export default IndexPage;