import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components'
import SOCIAL from '../constants/social';
import me from '../images/avatar01.jpg'

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row-reverse;
  }
`;

const Avatar = styled.div`
  position: relative;
  width: 275px;
  height: 275px;
  border-radius: 50%;
  overflow: hidden;

  @media (min-width: 992px) {
    width: 350px;
    height: 350px;
  }

  img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: opacity 500ms ease 0s;
    opacity: 1;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  z-index: 1;

  h1 {
    margin: 2rem 0;
  }
  
  @media (min-width: 992px) {
    width: 60%;
    padding-right: 2rem;
  }
`;

const rainbow = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(-1turn);
  }
`

const SocialList = styled.ul`
  display: flex;
  margin: 1rem 0 2rem;
  padding: 0;
  list-style: none;
`;

const SocialItem = styled.li`
  display: flex;
  margin-right: 1rem;
  list-style: none;
  background-image: -webkit-linear-gradient(92deg, #ff7a60, #ffb8d1);
  -webkit-background-clip: text;
  background-clip: text;

  a {
    padding: 0.45rem;
  }

  &:nth-child(1) svg {
    color: #F583BA;
  }

  &:nth-child(2) svg {
    color: #6DDAF2;
  }

  &:nth-child(3) svg {
    color: #92E085;
  }

  &:nth-child(4) svg {
    color: #F5BD69;
  }

  &:nth-child(5) svg {
    color: #F2856D;
  }

  &:hover {
    transform: scale(1.25);
    animation: ${rainbow} 3s linear infinite;
  }
`

export default function MainBio() {
  return (
    <Wrap>
      <Avatar>
        <img src={me} alt="That's a me using glasses and smiling" />
      </Avatar>
      <Sidebar>
        <h1>
          Olá, eu sou a Dali!
        </h1>
        <p>
          Atualmente sou desenvolvedora de tecnologia senior, na 1STi.
        </p>
        <p>
          Me interesso em compreender sobre as diversas áreas envolvidas no desenvolvimento de produtos digitais afim de simplificar um mundo que parece cada vez mais complexo.
        </p>
        <p>
          Com amor e entusiasmo, tenho feito isso a maior parte da minha carreira através de redes de tecnologia profunda e de suporte a diversidade. 
        </p>
        <footer>
          <SocialList>
            {SOCIAL.map(s => (
              <SocialItem key={s.kind}>
                <a href={s.url}>
                  <FontAwesomeIcon
                    size={s.size}
                    icon={s.icon}
                    title={`Link to my ${s.kind}`}
                  />
                </a>
              </SocialItem>
            ))}
          </SocialList>
        </footer>
      </Sidebar>
    </Wrap>
  )
}

