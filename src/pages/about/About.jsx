
import styled from "styled-components";
import Header from "../../components/header/Header";

const Container = styled.div`
    text-align: center;
  `

function About() {

  return (
    <Container>

      <header>
        <Header/>
        <div><h1>Sobre este projeto</h1></div>
      </header>

      <div>


      </div>
      <div>
        <p>Oi, treinador(a)!</p>
        <p></p>
        <p>Obrigado pro visitar minha Pokedex!, seja muito bem vindo(a)!. Meu nome é Bart Silva, e este projeto é sobre essas criaturas conhecidas como Pokemon.</p>
        <p></p>
        <p>Para muitos, Pokemons são para alguns algo estrano, para outros uma apaixão.</p>
        <p></p>
        <p>São mais de mil pokemons, e você encontrará informações sobre cada deles.</p>
        <p></p>
        <p>Espero que gostem, dequei tempo, pesquisa e foi bem gostoso, apliquei aqui muitos recursos técnicos para tornar esse projeto,</p>
        <p>agradável, fácil de utilizar, e divertido</p>
      </div>
    </Container >

  )
}

export default About