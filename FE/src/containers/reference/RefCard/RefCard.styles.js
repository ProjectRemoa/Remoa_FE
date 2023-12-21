import styled from 'styled-components';

const RefCardSelectedDeleted = styled.img`
  position: absolute;
  width: 22.5px;
  z-index: 3;
  top: 7.75px;
  left: 7.75px;
  cursor: pointer;
`;

const RefCardThumbnailWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-top: 56.36%;
  background-color: #fafafa;
  border-radius: 8px;
  border: 1px solid #e1e2e5;
  overflow: hidden;
  cursor: pointer;
`;

const RefCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: fit-content;

  &:hover {
    ${RefCardThumbnailWrapper} {
      box-shadow: 0px 0px 10px 0px #3f3f3f42;
    }
  }
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
  margin: 16px 0 0 0;
  font-weight: 600;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: initial;
  overflow: hidden;
  cursor: pointer;
`;

const RefCardProfileWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

const RefCardProfileImg = styled.div`
  width: 24px;
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid #ededed;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RefCardInfo = styled.div`
  display: flex;
  width: 100%;
  margin-left: 8px;
`;

const RefCardProfileName = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
`;
const RefCardFunctionWrapper = styled.div`
  display: flex;
  margin-left: auto;
  gap: 0 10px;
  color: #a7a7a7;
  cursor: default;
`;

const RefCardFunctionIcon = styled.div`
  display: inline-flex;
  align-items: center;

  svg {
    width: 16px;
    min-width: 16px;
    height: 16px;
    margin-right: 4px;
    color: #a7a7a7;

    &.views {
      width: 20px;
      min-width: 20px;
      height: 20px;
    }
  }
`;

const ScrapButton = styled.button`
  width: 80px;
  height: 24px;
  font-family: Pretendard-Medium;
  font-size: 12px;
  border: 1px solid #e1e2e5;
  border-radius: 8px;
  background-color: transparent;
  &:hover {
    background-color: #a7a7a7;
  }
`;

const StyledComponents = {
  RefCardWrapper,
  RefCardSelectedDeleted,
  RefCardThumbnailWrapper,
  RefCardThumbnail,
  RefCardTitle,

  RefCardProfileWrapper,
  RefCardProfileImg,
  RefCardInfo,
  RefCardProfileName,
  RefCardFunctionWrapper,
  RefCardFunctionIcon,
  ScrapButton,
};

export default StyledComponents;
