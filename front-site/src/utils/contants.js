import React from 'react';
import { Answer } from '../components/ExpansionPanel/styles';

export const screensCarousel = [
  {
    id: Math.random(),
    url: require('../assets/img1.png'),
    legend: 'navegue pelo mundo e descubra novos sons, pessoas e lugares',
  },
  {
    id: Math.random(),
    url: require('../assets/img2.png'),
    legend: 'ao postar, escolha suas músicas favoritas para acompanhar sua foto, texto ou vídeo',
  },
  {
    id: Math.random(),
    url: require('../assets/img3.png'),
    legend: 'publique um trecho da música que escolheu no formato que quiser e onde preferir',
  },
  {
    id: Math.random(),
    url: require('../assets/img4.png'),
    legend: 'encontre seus amigos e descubra o que está rolando de novidade por aí',
  },
];

export const faq = [
  {
    title: 'como eu faço um post no musii?',
    content: 
      <Answer>
        Pra fazer um post no <span>musii</span> é bem fácil!<br/>
        Basta <span>segurar o dedo</span> no mapa onde você quer <span>deixar sua marca</span> e selecionar a opção de fazer uma <span>foto</span>, um <span>vídeo</span> ou um <span>texto</span> ;)<br/>
        Depois que você escolheu <span>como</span> quer passar <span>sua mensagem</span>, é só escolher uma <span>música</span> para acompanhar seu post.<br/>
        Caso não tenha encontrado a música que queria, você pode nos ajudar mandando um e-mail para suporte@musii.app pra gente entender o que aconteceu e tentar te auxiliar :)<br/>
      </Answer>
  },
  {
    title: 'como eu faço uma denúncia no musii?',
    content: 
      <Answer>
        Viu um post que <span>não gostou</span>? Pra denunciar é só abrir o <span>post</span> (ou ir diretamente na barra de ações desse post no <span>feed</span>) > clicar nos <span>três pontinhos</span> > e selecionar a opção <span>denunciar</span>.
        Você também pode denunciar algum <span>usuário</span> diretamente, entrando em seu perfil e clicando nos <span>três pontinhos</span> da mesma forma.<br/>
        Logo em seguida você escolhe a <span>categoria</span> da sua denúncia e inclui um <span>comentário</span> com seu motivo. Depois disso é só clicar em <span>denunciar</span>. Nós então iremos avaliar esse post para você em até <span>1 dia útil</span> e te dar um retorno sobre a situação. <span>Conta com a gente :)</span><br/>
        Ficou alguma <span>dúvida</span>? Só mandar no suporte@musii.app.
      </Answer>
  },
  {
    title: 'como o musii usa os meus dados?',
    content: 
      <Answer>
        Nós usamos os <span>dados</span> dos nossos usuários para lhes dar a <span>melhor experiência possível com responsabilidade</span>. Baseado nas <span>suas interações</span>, conseguimos entender seu <span>perfil musical</span> e sugerir primeiro o que tem <span>mais a ver com cada um</span>. Baseado nisso, nosso algoritmo entrega posts, perfis, tendências, artistas, a ideia é <span>mostrar mais do que nossos usuários já gostam</span>, mantendo seus dados em <span>completo sigilo</span> nesse processo.<br/>
        Qualquer <span>dúvida</span> a respeito, entra em <span>contato com a gente</span>, pelo e-mail suporte@musii.app.<br/>
        Vai ser um <span>prazer</span> bater um papo contigo!
      </Answer>
  },
  {
    title: 'como eu solicito um suporte no musii?',
    content: 
      <Answer>
        Muito fácil, só <span>mandar</span> um e-mail para nosso suporte. As instruções estão logo acima.<br/>
        O que precisar <span>estamos aqui pra te ajudar!</span><br/>
        Muita <span>música</span> pra gente :) 
      </Answer>
  },
];

export const banners = [
  {
    title: 'a rede social da música',
    description: 'somos uma rede formada por pessoas que, assim como você, amam a música e gostam de vivê-la o tempo inteiro',
    url: require('../assets/section3-1.png'),
    color: '#FFF',
  },
  {
    title: 'vídeos verticais curtos',
    description: 'no musii, você faz posts no estilo de histórias com fotos, textos ou vídeos, além de suas músicas prediletas tocando junto',
    url: require('../assets/section3-2.png'),
    color: '#FFF',
  },
  {
    title: 'descubra os sons que estão ouvindo em qualquer lugar',
    description: 'navegue pelo mapa, veja o que as pessoas estão postando em diversos lugares e deixe você também sua marca no mundo',
    url: require('../assets/section3-3.png'),
    color: '#FFF',
  },
];