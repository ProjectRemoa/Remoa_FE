import styled from "styled-components";


const ManageListContainer = styled.div`
  width: 1270px;
  margin-top: 72px;
`;

const ManageTextBox = styled.div`
  font-size: 24px;
  text-align: left;
  margin-top: 72px;
  margin-bottom: 15px;
  font-weight: 700;
  color: #1e1e1e;
`;
const ManageNameText = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #1e1e1e; //#fada5e;
`;

const Category = styled.div`
  width: 200px;
  height: 44px;
  border: 1px solid ${(props) => (props.checked ? "black" : "#CECECE")}; // #cecece;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#FADA5E" : "white")};
  color: ${(props) => (props.checked ? "#464234" : "#1e1e1e")};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  :last-child {
    margin-right: 0px;
  }
  :hover {
    background-color: ${(props) => (props.checked ? "#DFB71C" : "#f0f0f0")};
  }
`;

const CategoryText = styled.span`
  font-size: 15px;
`;

const ManageListBox = styled.div`
  margin: 30px 0px;
`;

const SelectBox = styled.div`
  float: left;
`;
const SelectButton = styled.button`
  width: 104px;
  height: 24px;
  font-size: 12px;
  color: #464646;
  background-color: ${(props) => (props.checked ? "#fada5e" : "white")};
  box-shadow: none;
  border-radius: 8px;
  border: ${(props) =>
    props.checked ? "1px solid #727272" : "1px solid #e1e2e5"};
  margin-right: 7px;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;

  :first-child {
    margin-left: 19px;
  }

  :hover {
    background-color: ${(props) => (props.checked ? "#DFB71C" : "lightgray")};
  }
`;

const SortBox = styled.div`
  float: right;
  // margin-bottom:30px;
`;

const ManageListNo = styled.div`
  margin-top: 88px;
`;

const NoManageText = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const NoManageSubText = styled.p`
  font-size: 16px;
  color: #4e4e4e;
  font-weight: 500;
`;

const Button = styled.button`
  width: 320px;
  height: 54px;
  //margin: 0 auto;
  margin-top: 58px;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  box-shadow: none;
  color: #464646;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: #fada5e;
`;

const ButtonRegister = styled.button`
  width: 209px;
  height: 48px;
  margin-top: 58px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  box-shadow: none;
  color: #1e1e1e;
  cursor: pointer;
  background: #fada5e;
  font-weight: 600;
  :hover {
    background-color: #dfb71c;
  }
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #e7e7e7;
  margin-top: 12.5px;
`;

const CategoryBox = styled.div`
  display: flex;
  margin-top: 64px;
`;



export const S = {
  ManageListContainer,
  ManageTextBox,
  ManageNameText,
  Button,
  ButtonRegister,
  Line,
  CategoryBox,
  Category,
  CategoryText,
  ManageListBox,
  ManageListNo,
  NoManageText,
  NoManageSubText,
  SortBox,
  SelectBox,
  SelectButton,
};



const Wrapper = styled.div`
  width: 65vw;
  margin: 61px 0 55px;
`;

const CommentContainer = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: left;
`;

const CommentListContainer = styled.div`
  width: 100%;
`;

const NullData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 86px;
`;

const MoreSearch = styled.button`
  width: 236px;
  height: 48px;
  margin-top: 46px;
  background-color: #fada5e;
  border: none;
  border-radius: 50px;
  font-family: Pretendard-SemiBold;
  &:hover {
    background-color: #dfb71c;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: 40px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 297px;
  height: 167px;
  border-radius: 8px;
  border: 1px solid #e1e2e5;
`;

const Button_ = styled.button`
  width: 146px;
  height: 40px;
  background-color: #fada5e;
  border: none;
  border-radius: 8px;
  font-family: Pretendard-Medium;
  font-size: 13px;
  &:hover {
    background-color: #dfb71c;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const HorizonLine = styled.hr`
  height: 1px;
  background: #e7e7e7;
  border: 0;
`;
const Contents = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const CommentsContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const MyCommentTitle = styled.div`
  font-size: 18px;
`;

const OneComment = styled.div`
  font-size: 14px;
  font-family: Pretendard-SemiBold;
  color: #727272;
  margin-left: 12px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 104px;
  box-sizing: border-box;
  padding: 28px 24px;
  border: none;
  border-radius: 12px;
  background-color: #f7f6f5;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
  font-size: 16px;
`;

const ProfileNickname = styled.div`
  font-weight: 700;
`;

const MyComment = styled.div` 
font-weight: 500;
  color: #464646;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9.75px;
`;


export const styledComponent = {
  Wrapper,
  CommentContainer,
  CommentListContainer,
  NullData,
  MoreSearch,
  ContentsContainer,
  AsideContainer,
  Img,
  Button_,
  SectionContainer,
  Title,
  HorizonLine,
  Contents,
  CommentsContainer,
  MyCommentTitle,
  OneComment,
  ProfileContainer,
  ProfileImg,
  ProfileContents,
  ProfileNickname,
  MyComment,
  ButtonBox,
};

