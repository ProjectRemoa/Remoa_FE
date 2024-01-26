import React from 'react';
import { Helmet } from 'react-helmet-async';

function Meta({ title = 'Remoa', imageURL = 'https://example.com/image.jpg' }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:url" content="https://d197wa6gufmlpc.cloudfront.net" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageURL} />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="공모전 참여작품들을 탐색하고, 공유하고, 피드백을 받을 수 있어요. 첫 공모전부터 역량 상승까지 레모아에서 시작하세요."
      />
      <meta
        property="og:description"
        content="공모전 참여작품들을 탐색하고, 공유하고, 피드백을 받을 수 있어요. 첫 공모전부터 역량 상승까지 레모아에서 시작하세요."
      />
      <meta property="og:site_name" content="Remoa" />
      <meta property="og:locale" content="ko_KR" />
      <meta
        name="description"
        content="공모전 참여작품들을 탐색하고, 공유하고, 피드백을 받을 수 있어요. 첫 공모전부터 역량 상승까지 레모아에서 시작하세요."
      />
    </Helmet>
  );
}

export default Meta;
