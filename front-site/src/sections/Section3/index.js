import React, { useState } from 'react';
import BannerPhoto from '../../components/BannerPhoto';
import { useInterval } from '../../utils/functions';
import { banners } from '../../utils/contants';

function Section3() {
  const [idxBanner, setIdxBanner] = useState(0);

  useInterval(() => {
    const idx = (idxBanner+1) % banners.length;
    setIdxBanner(idx);
  }, 10000);

  return (
    <BannerPhoto 
      title={banners[idxBanner].title}
      description={banners[idxBanner].description}
      url={banners[idxBanner].url}
      color={banners[idxBanner].color}
    />
  );
}
export default Section3;