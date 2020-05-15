import React from 'react';
import { } from './styles';
import background1 from '../../assets/section3-1.png';
import background2 from '../../assets/section3-2.png';
import background3 from '../../assets/section3-3.png';
import BannerPhoto from '../../components/BannerPhoto';
import { useInterval } from '../../utils/functions';

const banners = [
  {
    title: 'A rede social da música',
    description: 'Somos uma rede formada por pessoas que, assim como você, amam a música e gostam de viver ela o tempo inteiro.',
    url: background1,
    color: '#FFF',
  },
  {
    title: 'Vídeos verticais curtos',
    description: 'No musii, você faz posts no estilo de histórias com fotos, textos ou vídeos, além de suas músicas prediletas tocando junto.',
    url: background2,
    color: '#771292',
  },
  {
    title: 'Descubra os sons que estão ouvindo em qualquer lugar',
    description: 'Navegue pelo mapa, veja o que as pessoas estão postando em diversos lugares e deixe você também sua marca no mundo.',
    url: background3,
    color: '#FFF',
  },
]

function Section3() {
  return (
    <>
      {banners.map(banner => (
        <BannerPhoto 
          title={banner.title}
          description={banner.description}
          url={banner.url}
          color={banner.color}
        />
      ))}
    </>
  );
}
export default Section3;