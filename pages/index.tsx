import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { darken } from "polished";
import { FC, useEffect } from "react";
import styled from "styled-components";
import Button from "../src/components/Button";
import DotsStripe from "../src/components/DotsStripe";
import Flex from "../src/components/Flex";
import Header from "../src/components/Header/Header";
import Main from "../src/components/Main";
import MainTitle from "../src/components/MainTitle";
import ScrollDown from "../src/components/ScrollDown";
import Section from "../src/components/Section";
import Text from "../src/components/Text";
import Title from "../src/components/Title";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import { useHorizontalScroll } from "../src/hooks/useHorizontalScroll";
import { setPrimaryColor } from "../src/store/slices/app";

const Home: NextPage = () => {
  useEffect(() => {
    console.log("home page rendered");
  }, []);

  const dispatch = useAppDispatch();
  const scrollRef = useHorizontalScroll();

  return (
    <div>
      <Head>
        <title>Kurse.dev</title>
        <meta name="description" content="Welcome to Kurse's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main ref={scrollRef}>
        <Section width="1100px" style={{ paddingRight: 270 }}>
          <Flex column justifyCenter fullHeight>
            <Flex>
              <MainTitle>Kurse</MainTitle>
              <CheckedIcon width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M34 15.9924L30.2291 11.742L30.7545 6.11562L25.1755 4.86192L22.2545 0L17 2.2322L11.7455 0L8.82455 4.86192L3.24545 6.10034L3.77091 11.7267L0 15.9924L3.77091 20.2427L3.24545 25.8844L8.82455 27.1381L11.7455 32L17 29.7525L22.2545 31.9847L25.1755 27.1228L30.7545 25.8691L30.2291 20.2427L34 15.9924ZM13.9091 23.6369L7.72727 17.5213L9.90636 15.3655L13.9091 19.3101L24.0936 9.23459L26.2727 11.4056L13.9091 23.6369Z"
                  style={{ fill: "var(--primary-color)" }}
                />
              </CheckedIcon>
            </Flex>
            <Text style={{ marginBottom: 47 }}>
              Desenvolvedor atuando a 7 anos no mercado, especializado em aplicativos modernos com javascript e está atualmente posicionado como desenvolvedor full stack.
            </Text>
            <Flex alignCenter>
              <Button style={{ marginRight: 20 }}>Currículo</Button>
              <SocialIcon href="#" target="_blank">
                <GithubIcon />
              </SocialIcon>
              <SocialIcon href="#" target="_blank">
                <InstagramIcon />
              </SocialIcon>
            </Flex>
          </Flex>
          <ScrollDown />
          <DotsStripe right />
        </Section>
        <Section width="1100px" primaryColor>
          <DotsStripe left width="32px" />
          <Flex column justifyCenter fullHeight>
            <Title>História</Title>
            <Text>
              Formado em design gráfico em 2015, a minha ambição por criar não parou por ai, acabei me encontrando como desenvolvedor em meio ao mercado de trabalho e decidi me especializar e hoje não
              consigo me imaginar fora desse mundo.
            </Text>
          </Flex>
        </Section>
      </Main>
    </div>
  );
};

const CheckedIcon = styled.svg`
  margin-left: 5px;
`;

const SocialIcon = styled.a`
  margin: 0 8px;
`;

const GithubIcon: FC = () => {
  return (
    <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.7006 14.2337C34.6919 11.9568 33.9063 9.75145 32.4741 7.98149C32.9605 5.95845 32.8085 3.83416 32.0401 1.90034C31.8886 1.52807 31.578 1.24346 31.1944 1.12442C30.6512 0.938284 28.5956 0.589291 24.4071 3.30384V3.30438C22.6053 2.82877 20.7472 2.60422 18.8843 2.63723C17.0186 2.60368 15.1574 2.82823 13.3534 3.30438C9.05615 0.527541 6.82202 0.977167 6.3724 1.10917C5.9866 1.23308 5.67658 1.52364 5.52669 1.90023C4.75619 3.82754 4.59873 5.94588 5.07704 7.96628C3.59769 9.72696 2.80939 11.9654 2.85857 14.2645C2.85857 22.8439 7.76828 25.4346 12.2674 26.35C12.0364 26.9149 11.8773 27.5063 11.7945 28.1107C11.7864 28.1751 11.7864 28.2406 11.7945 28.305V30.6782C7.69915 31.0196 6.82248 28.6226 6.73702 28.351V28.3515C6.717 28.2882 6.69373 28.226 6.66668 28.1648C5.87562 26.5514 4.48338 25.3117 2.78821 24.7133C2.07724 24.4757 1.30775 24.8594 1.07033 25.5703C0.832802 26.2813 1.21642 27.0508 1.9274 27.2888C2.86671 27.628 3.65027 28.2979 4.13065 29.1733C4.67389 30.934 6.89239 33.7188 11.7788 33.4083V35.6424C11.7788 36.3924 12.3865 37 13.1364 37C13.8858 37 14.494 36.3924 14.494 35.6424V28.4055C14.5968 27.615 14.9409 26.8759 15.4787 26.2877C15.864 25.9274 16.0036 25.376 15.8369 24.8755C15.6703 24.3756 15.2271 24.0179 14.7034 23.9606C9.97165 23.4097 5.59702 21.851 5.59702 14.2103H5.59648C5.53318 12.3457 6.25336 10.5396 7.58225 9.23017C7.94262 8.84276 8.06164 8.28923 7.89283 7.78766C7.43562 6.45986 7.40587 5.02218 7.80734 3.67649C9.47273 4.05254 11.037 4.78571 12.3914 5.82516C12.7442 6.05837 13.1841 6.11843 13.5861 5.98803C15.3099 5.46318 17.1064 5.21969 18.9076 5.26677C20.7056 5.2197 22.4999 5.46319 24.221 5.98803C24.623 6.11951 25.0635 6.05945 25.4157 5.82516C26.7202 4.82524 28.2136 4.09966 29.806 3.69173C30.2015 5.05254 30.1663 6.50209 29.7048 7.84182C29.5506 8.29688 29.6512 8.80008 29.9688 9.16043C31.2528 10.5315 31.9801 12.3322 32.0088 14.2103C32.0088 21.8352 27.4091 23.4179 22.9024 23.9606C22.35 24.0223 21.8917 24.4157 21.7478 24.9524C21.6038 25.4892 21.8035 26.059 22.251 26.389C22.732 26.7537 23.2904 27.7774 23.2904 29.4915V35.635C23.2904 36.3849 23.898 36.9925 24.6474 36.9925C25.3974 36.9925 26.005 36.3849 26.005 35.635V29.4915C26.0191 28.411 25.8216 27.3385 25.4233 26.3343C29.0691 25.5589 34.7007 23.162 34.7007 14.2336L34.7006 14.2337Z"
        style={{ fill: "var(--primary-color)", stroke: "var(--primary-color)" }}
        strokeWidth="0.5"
      />
    </svg>
  );
};

const InstagramIcon: FC = () => {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M29.1668 0H5.83321C4.28609 0 2.80248 0.614496 1.70849 1.70849C0.614496 2.80248 0 4.28609 0 5.83321V29.1668C0 30.7139 0.614496 32.1975 1.70849 33.2915C2.80248 34.3855 4.28609 35 5.83321 35H29.1668C30.7139 35 32.1975 34.3855 33.2915 33.2915C34.3855 32.1975 35 30.7139 35 29.1668V5.83321C35 4.28609 34.3855 2.80248 33.2915 1.70849C32.1975 0.614496 30.7139 0 29.1668 0V0ZM32.0835 29.1667H32.0833C32.0833 29.9401 31.7761 30.682 31.229 31.2289C30.6822 31.776 29.9402 32.0831 29.1668 32.0831H5.83321C5.05978 32.0831 4.31785 31.776 3.77098 31.2289C3.22386 30.682 2.91673 29.9401 2.91673 29.1667V5.83308C2.91673 5.05965 3.22386 4.31772 3.77098 3.77085C4.31785 3.22373 5.05978 2.9166 5.83321 2.9166H29.1668C29.9402 2.9166 30.6822 3.22373 31.229 3.77085C31.7761 4.31772 32.0833 5.05965 32.0833 5.83308L32.0835 29.1667Z"
        style={{ fill: "var(--primary-color)" }}
      />
      <path
        d="M17.5001 8.75C15.1795 8.75 12.954 9.67187 11.3129 11.3127C9.67199 12.9538 8.75012 15.1794 8.75012 17.4999C8.75012 19.8205 9.67199 22.046 11.3129 23.6871C12.954 25.328 15.1795 26.2499 17.5001 26.2499C19.8206 26.2499 22.0462 25.328 23.6873 23.6871C25.3281 22.046 26.25 19.8205 26.25 17.4999C26.25 15.1794 25.3281 12.9538 23.6873 11.3127C22.0462 9.67187 19.8206 8.75 17.5001 8.75ZM17.5001 23.333C15.9529 23.333 14.4693 22.7185 13.3753 21.6245C12.2813 20.5305 11.6669 19.0469 11.6669 17.4998C11.6669 15.9527 12.2813 14.4691 13.3753 13.3751C14.4693 12.2811 15.9529 11.6666 17.5001 11.6666C19.0472 11.6666 20.5308 12.2811 21.6248 13.3751C22.7188 14.4691 23.3333 15.9527 23.3333 17.4998C23.3333 19.0469 22.7188 20.5305 21.6248 21.6245C20.5308 22.7185 19.0472 23.333 17.5001 23.333Z"
        style={{ fill: "var(--primary-color)" }}
      />
      <path
        d="M29.1667 8.02025C29.1667 9.22849 28.1872 10.2077 26.9792 10.2077C25.771 10.2077 24.7917 9.22849 24.7917 8.02025C24.7917 6.81226 25.771 5.83276 26.9792 5.83276C28.1872 5.83276 29.1667 6.81226 29.1667 8.02025Z"
        style={{ fill: "var(--primary-color)" }}
      />
    </svg>
  );
};

export default Home;
