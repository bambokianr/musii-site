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
  
  const newIdx = idxBanner;
  return (
    <BannerPhoto 
      key={newIdx}
      idxBanner={newIdx}
      title={banners[newIdx].title}
      description={banners[newIdx].description}
      url={banners[newIdx].url}
      color={banners[newIdx].color}
    />
  );
}
export default Section3;