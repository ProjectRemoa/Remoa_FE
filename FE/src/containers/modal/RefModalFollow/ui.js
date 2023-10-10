import styled from 'styled-components';

export const S = {
  SmallModalWrapper: styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 401px;
    height: 128px;
    left: ${(props) => (props.location === 4 ? '-20vw' : '5vw')};
    @media ${(props) => props.theme.desktop} {
      left: ${(props) => (props.location === 3 ? '-40vw' : '5vw')};
      top: 5.5vw;
    }
    @media ${(props) => props.theme.mobile} {
      left: ${(props) => (props.location === 2 ? '-50vw' : '5.5vw')};
      top: 7vw;
    }
    background: #ffffff;
    border: 0.5px solid #b0b0b0;
    border-radius: ${(props) =>
      props.location >= 1 ? '10px 0px 10px 10px' : '0px 10px 10px 10px'};
    z-index: 4;
    top: 4vw;
  `,
  ModalProfile: styled.div`
    margin-left: 25px;
    margin-top: 25px;
  `,
  ModalProfilePhoto: styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    float: left;
  `,
  ModalProfileName: styled.div`
    font-size: 20px;
    position: absolute;
    color: black;
    left: 75px;
    top: 25px;
  `,
  FollowingFollower: styled.div`
    width: 126.5px;
    height: 24px;
    display: absolute;
    float: right;
    margin-top: 7px;
    margin-right: 15px;
    font-weight: 700;
    font-size: 20px;
    color: black;
    line-height: 24px;
  `,
  ModalFollower: styled.span`
    color: #fada5e;
    float: right; //left;
  `,
  ModalFollowing: styled.span`
    color: #fada5e;
    float: right; //left;
  `,
  SmallModalButtonWrapper: styled.div`
    width: 353px;
    height: 23px;
    position: absolute;
    bottom: 24px;
    left: 25px;
  `,
  SmallModalButton: styled.div`
    width: 173px;
    height: 23px;
    background-color: #fada5e;
    border-radius: 10px;
    font-size: 15px;
    line-height: 23px;
    color: #000000;
    display: inline-block;
    cursor: pointer;
  `,
};
