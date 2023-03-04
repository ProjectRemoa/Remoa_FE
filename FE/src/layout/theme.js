const size = {
  mobile: '767px',
  desktop: '1023px',
};

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  desktop: `(max-width: ${size.desktop})`,
  mainColor: 'red',
  subColor: 'blue',

  m_2ndSizeContestItem:'43vw',
  d_3rdSizeContestItem:'28.6vw',
  m_2ndSizeContestItemH:'37.2vw',
  d_3rdSizeContestItemH:'24.7vw',

  m_2ndSizeContestImgCrop:'22.7vw',
  d_3rdSizeContestImgCrop:'14.7vw',
  m_2ndSizeContestImg:'41vw',
  d_3rdSizeContestImg:'26.6vw',

  m_2ndSizeContestExplain:'11.5vw', // m_2ndSizeContestItemH - m_2ndSizeContestImgCrop - 3
  d_3rdSizeContestExplain:'8vw', // d_3rdSizeContestItemH - d_3rdSizeContestImgCrop - 2
  //데스크탑 크기는 18.6 - 10.8 - 1 = 6.8vw
};
/*Item - Img = 2vw */

/*  @media ${props => props.theme.desktop} {
    width: ${(props) => props.theme.d_thirdSize};
  }
  @media ${props => props.theme.mobile} {
    width: ${(props) => props.theme.m_secondSize};
  }


    @media ${props => props.theme.desktop} {

    }
    @media ${props => props.theme.mobile} {

    }
  
*/
export default theme;