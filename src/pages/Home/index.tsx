//import { ChangeEvent, useEffect, useState } from "react";
import useHome from "./hooks/useHome";


//************** HOME VIEW ******************/

//Styles
import { Container, Content, UserInfoArea, UserInfoContent} from "./styles";

//function Home({user}:HomeProps) {
function Home() {

  return (
    <Container>
      <Content>
        <UserInfoArea>
          <img src="./src/assets/ProfilePhoto.jpg" alt="Avatar" />
          <UserInfoContent>
            <strong>Felipe de Paulo Rodrigues</strong>
            <span>felipedepaulo</span>
            <span>Nº Repos:</span>
            <span>teste</span>
            <a href="https://www.devmedia.com.br">Linkedin</a>
          </UserInfoContent>
        </UserInfoArea>
      </Content>
    </Container>    
    );

  
}

export { Home };
