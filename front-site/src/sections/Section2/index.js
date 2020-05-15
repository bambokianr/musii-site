import React from 'react';
import { ImageBackground, Container, FirstPhrase, SecondPhrase, ThirdPhrase, CategoriesContainer, CategoriesBox, CategoriesIcon, Icon, CategoriesContent } from './styles';

import musicIcon from '../../assets/music-icon.svg';
import peopleIcon from '../../assets/people-icon.svg';
import eventsIcon from '../../assets/events-icon.svg';

function Section2() {
  return (
    <ImageBackground>
      <Container>
        <FirstPhrase>A rede social para quem ama música</FirstPhrase>
        <SecondPhrase>Com um feed aberto e através do mapa, vivencie uma maneira única de encontrar pessoas, eventos, lugares, seus artistas favoritos e até novos sons.</SecondPhrase>
        <ThirdPhrase>Sonhamos em formar a maior rede de música do mundo e nessa jornada te ajudaremos a encontrar</ThirdPhrase>
        <CategoriesContainer>
          <CategoriesBox>
            <CategoriesIcon><Icon><img src={musicIcon} alt="Ícone música" /></Icon></CategoriesIcon>
            <h3>sons</h3>
            <CategoriesContent>
              <h3>sons</h3>
              <p>Depare-se com novos artistas, bandas e álbuns que nunca tinha escutado antes.</p>
            </CategoriesContent>
          </CategoriesBox>
          <CategoriesBox>
            <CategoriesIcon><Icon><img src={peopleIcon} alt="Ícone pessoas" /></Icon></CategoriesIcon>
            <h3>pessoas</h3>
            <CategoriesContent>
              <h3>pessoas</h3>
              <p>Descubra o perfil musical dos seus melhores amigos e conecte-se com quem tem o gosto parecido com você.</p>
            </CategoriesContent>
          </CategoriesBox>
          <CategoriesBox>
            <CategoriesIcon><Icon><img src={eventsIcon} alt="Ícone eventos" /></Icon></CategoriesIcon>
            <h3>lugares</h3>
            <CategoriesContent>
              <h3>lugares</h3>
              <p>Encontre bares, baladas e casas de show que tocam o som que você quer ouvir naquele dia.</p>
            </CategoriesContent>
          </CategoriesBox>
        </CategoriesContainer>
      </Container>
    </ImageBackground>
  );
}
export default Section2;