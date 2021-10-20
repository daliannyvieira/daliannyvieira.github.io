import React from "react"
import styled from 'styled-components';

import Seo from "../components/seo"
import Layout from "../components/Layout"

const Title = styled.h1`
  margin-bottom: 1rem;
`

const About = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    img {
      margin: 1rem auto;
      max-width: 70%;
    }
  }

  a {
    font-weight: 800;
  }
`;

export default function AboutPage() {
  return (
    <Layout>
      <Seo
        title="Sobre"
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
      <About>
        <Title>Caixa de ferramentas</Title>
        <p>
          Uma lista das minhas ferramentas e softwares favoritos que uso semanalmente.
        </p>
        <h2>Software</h2>
        <ul>
          <li><strong>Edição de código</strong>: Visual Studio Code with Drakula Theme</li>
          <li><strong>Anotações</strong>: Google Keep</li>
          <li><strong>Música</strong>: Spotify e Youtube</li>
          <li><strong>Facilitações visuais</strong>: Excalidraw e Miro</li>
          <li><strong>Prototipagem</strong>: Figma</li>
          <li><strong>Videochamadas</strong>: Whereby e Meet</li>
          <li><strong>Ilustração</strong>: Krita</li>
        </ul>
        <h2>Extensões favoritas para editor de código</h2>
        <ul>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>Bracket Pair Colorizer</li>
          <li>Git Blame</li>
        </ul>
        <h2>Linguagens, bibliotecas e frameworks favoritos</h2>
        <h3>Javascript</h3>
        <ul>
          <li>React</li>
          <li>Gatsby</li>
          <li>NextJS</li>
          <li>Express</li>
          <li>Sequelize</li>
        </ul>
        <h3>Python</h3>
        <ul>
          <li>Flask</li>
          <li>Pandas</li>
        </ul>
      </About>
    </Layout>
  )
}
