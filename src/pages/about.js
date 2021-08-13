import React from "react"
import styled from 'styled-components';

import Seo from "../components/seo"
import Layout from "../components/layout"

import image03 from "../images/03.jpg"
import image09 from "../images/09.jpeg"
import image05 from "../images/05.jpg"
import image07 from "../images/07.jpg"
import image10 from "../images/me02.jpg"

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
        <Title>Sobre</Title>
        <p>
          Olá, você pode me chamar de Dali. Eu sou uma desenvolvedora brasileira, trabalho com tecnologia desde 2016, e desde então tenho tido experiência em desenvolver produtos de grande impacto.
        </p>
        <p>
          Esse blog é o meu playground, onde eu escrevo sem nenhuma pretensão, e o mantenho principalmente para me divertir testando tecnologias no meu tempo livre. Todo o código dele, assim como o de outros projetos que eu fiz por conta própria é aberto e você pode <a href="https://github.com/daliannyvieira">acompanhar esse código no Github</a>.
        </p>
        <h2>Tecnologia como um presente</h2>
        <img src={image10} alt="That's me, and I'm smiling"/>
        <p>Eu nasci na Paraíba, depois me mudei para um lugar chamado Tacaratu, no interior de Pernambuco, onde eu passei muito tempo estudando e sonhando em criar minhas primeiras linhas de código para conquistar uma carreira significante e ter uma realidade diferente da que eu conhecia.</p>
        <p>
          Para mim, a tecnologia foi um presente porque graças a ela eu tive acesso ao grande repositório de conhecimento do mundo, a Internet, e através disso um novo mundo começou para mim, onde eu finalmente tive o direito de ser quem eu sou e ainda sim começar a desenvolver minhas habilidades como desenvolvedora.
        </p>
        <blockquote>
          <p>“Não é o que o mundo reserva para você, é o que você traz para ele. ”</p>
          <small>— Anne Shirley, on Anne with an E.</small>
        </blockquote>
        <img src={image05} alt="People happy at Pyladies Rio" />
        <p>
          Toda a minha trajetória me fez perceber que o conhecimento é a coisa mais empoderadora que podemos compartilhar em sociedade.
          Assim como isso mudou a minha vida, eu acredito que ele pode fazer a diferença na vida de outras pessoas. Por isso, eu amo me conectar com outras pessoas para ensinar e aprender sobre tecnologia.
        </p>
        <img src={image09} alt="People happy at VaiNaWeb in a workshop about JS"/>
        <p>
          Eu realmente gosto de falar sobre o que eu sei, e tenho feito isso boa parte do meu tempo como professora para inspirar e encorajar jovens em territórios de conflito armado e vulnerabilidade social a buscarem conhecimento para que possam provocar mudanças positivas em suas próprias vidas e em suas comunidades.
        </p>
        <img src={image03} alt="People happy at VaiNaWeb with course certificates" />
        <p>
          Eu também tive a oportunidade de trocar conhecimento em mudas comunidades de código criadas para apoiar minorias na tecnologia, como o PyLadies, Django Girls e InspirAda na Computação.
        </p>
        <img src={image07} alt="People happy at DjangoGirls Niteroi"/>
      </About>
    </Layout>
  )
}
