//import { ChangeEvent, useEffect, useState } from "react";
import useHome from "./hooks/useHome";


//************** HOME VIEW ******************/

//Styles
import { Container, Content, UserInfoArea, UserInfoContent} from "./styles";

//function Home({user}:HomeProps) {
function Home() {

  
  return (
    
    <Container>
       <img src="./src/assets/ProfilePhoto.jpg" alt="Avatar" />
      <Content>
      
        <UserInfoArea>
         
          <UserInfoContent>
            <h1>Felipe de Paulo Rodrigues</h1>
            <br></br>
            <h2>Pessoal</h2>
            <br></br>
            <span>
            
              <p>Olá, Sou o Felipe, pai de uma menina de 21 anos e uma doguinha chamada Mel, 
                nasci no bairro da Vila Maria em São Paulo, e uma parte de minha infância e 
                adolescência cresci no bairro Parque Cecap mas atualmente está residindo junto 
                com a minha família no bairro da Vila Maria novamente.</p>
              <br></br>
              <p>Sem sempre gostei de esportes, dos 11 aos 15 anos joguei basquetebol 
                federado pelo time da cidade de Guarulhos, onde tive a oportunidade de estudar
                em dois bons colégios particulares.</p>
              <br></br>
              <p>Após sair do time de basquete comecei a andar de skate, e aos 17 comecei a trabalhar e não parei mais.</p>
              <br></br>
              <p>Como lazer atualmente, gosto de frequentar parques, caminhar e/ou correr, e estar com minha família.</p>
              <br></br>
              <p>Sobre minha vida profissional, acho que nada melhor como uma olhadinha no LinkedIn logo abaixo.</p>
              <br></br>
              
            </span>
            
            <a href="https://www.devmedia.com.br">Linkedin</a>
          </UserInfoContent>
        </UserInfoArea>
      </Content>
    </Container>    
    );

  
}

export { Home };
