import styled from 'styled-components';

const RefCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;
`;

const RefCardThumbnailWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-top: 56.36%;
  background-color: #fafafa;
  overflow: hidden;
`;

const RefCardThumbnail = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
`;

const RefCardTitle = styled.p`
  width: 100%;
  margin: 15px 0 0 0;
  font-weight: 600;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: initial;
  overflow: hidden;
`;

const RefCardProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;
`;
const RefCardProfileImg = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ededed;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RefCardInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 6px;
`;

const RefCardProfileName = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
`;
const RefCardFunctionWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

const StyledComponents = {
  RefCardWrapper,
  RefCardThumbnailWrapper,
  RefCardThumbnail,
  RefCardTitle,

  RefCardProfileWrapper,
  RefCardProfileImg,
  RefCardInfo,
  RefCardProfileName,
  RefCardFunctionWrapper,
};

export default StyledComponents;
