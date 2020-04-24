import React from 'react';
import { ImageBackground, Container, FirstPhrase, SecondPhrase, ThirdPhrase, CategoriesContainer, CategoriesBox, CategoriesIcon, Icon, CategoriesContent } from './styles';

import { GiMusicalNotes, GiDamagedHouse } from 'react-icons/gi';
import { MdPersonAdd } from "react-icons/md";

function Section2() {
  return (
    <ImageBackground>
      <Container>
          <FirstPhrase>A rede social dedicada inteiramente à música</FirstPhrase>
          <SecondPhrase>Com um feed aberto e através do mapa, vivencie uma maneira única de encontrar pessoas, eventos, lugares, seus artistas favoritos e até novos sons.</SecondPhrase>
          <ThirdPhrase>Nessa jornada musical, permita-se conhecer</ThirdPhrase>
          <CategoriesContainer>
            <CategoriesBox>
              <CategoriesIcon><Icon><GiMusicalNotes /></Icon></CategoriesIcon>
              <CategoriesContent>
                <h3>músicas</h3>
                <p>Depare-se com novos artistas, bandas e álbuns que nunca havia escutado antes.</p>
              </CategoriesContent>
            </CategoriesBox>
            <CategoriesBox>
              <CategoriesIcon><Icon><MdPersonAdd /></Icon></CategoriesIcon>
              <CategoriesContent>
                <h3>pessoas</h3>
                <p>Descubra o perfil musical dos seus amigos e conecte-se a quem tem o gosto parecido com você.</p>
              </CategoriesContent>
            </CategoriesBox>
            <CategoriesBox>
              <CategoriesIcon><Icon><GiDamagedHouse /></Icon></CategoriesIcon>
              <CategoriesContent>
                <h3>lugares</h3>
                <p>Encontre bares, baladas e casas de show que tocam o som que você quer ouvir.</p>
              </CategoriesContent>
            </CategoriesBox>

          </CategoriesContainer>
      </Container>
    </ImageBackground>
  );
}
export default Section2;