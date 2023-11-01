import axios from "axios";
import { useEffect, useState } from "react";
import RefModal from "../../modal/RefModalPages/RefModal";
import FeedBackComponent from "../../../components/FeedBackComponent";
import styledComponent from "./MyPageFeedback.styles";
const { Wrapper, CommentContainer } = styledComponent;

function MyPageFeedback(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState([]);
  const topValue = 26;

  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  useEffect(() => {
    axios
      .get(`/BE/user/comment?page=${page}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data.contents);
        setAllPage(Array.from({ length: res.data.data.totalPages }));
      })
      .catch((res) => {
        console.log("error");
      });
  }, [page]);

  // const FeedBackPage = data.map((data, i) => {
  //   return (
  //     <div
  //       key={i}
  //       style={{
  //         display: "flex",
  //         alignContent: "center",
  //         marginTop: "19px",
  //         // top: `${(i + 1) * topValue}%`,
  //       }}
  //     >
  //       <div
  //         style={{
  //           display: "flex",
  //           flexDirection: "column",
  //         }}
  //       >
  //         <img
  //           src={data.thumbnail}
  //           alt=""
  //           style={{
  //             width: "264px",
  //             height: "150px",
  //           }}
  //         />
  //         <button
  //           style={{
  //             background: "#FADASE",
  //             border: "1px solid #B0B0B0",
  //             borderRadius: "10px",
  //             width: "264px",
  //             height: "27px",
  //             marginTop: "7px",
  //           }}
  //           onClick={() => {
  //             onClickModal(data.postId);
  //           }}
  //         >
  //           작업물 뷰어 보기
  //         </button>
  //         <button
  //           style={{
  //             background: "#FADASE",
  //             border: "1px solid #B0B0B0",
  //             borderRadius: "10px",
  //             width: "264px",
  //             height: "27px",
  //             marginTop: "7px",
  //           }}
  //           onClick={() => {
  //             onClickModal(data.postId);
  //           }}
  //         >
  //           상세 피드백
  //         </button>
  //       </div>
  //       <div
  //         style={{
  //           width: "70%",
  //           display: "flex",
  //           flexDirection: "column",
  //           marginLeft: "13px",
  //         }}
  //       >
  //         <div
  //           style={{
  //             textAlign: "left",
  //             fontSize: "23px",
  //             fontWeight: "500",
  //             marginBottom: "9px",
  //           }}
  //         >
  //           {data.title}
  //         </div>
  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "column",
  //             border: "1px solid #FADA5E",
  //             borderRadius: "10px",
  //             padding: "20px 31px",
  //           }}
  //         >
  //           <div
  //             style={{
  //               width: "100%",
  //               height: "35%",
  //             }}
  //           >
  //             <div
  //               style={{
  //                 textAlign: "left",
  //                 fontSize: "20px",
  //                 fontWeight: "700",
  //               }}
  //             >
  //               내가 작성한 코멘트
  //             </div>
  //             <div
  //               style={{
  //                 textAlign: "left",
  //                 fontSize: "15px",
  //                 fontWeight: "400",
  //               }}
  //             >
  //               가장 먼저 작성된 코멘트 1개만 보입니다.
  //             </div>
  //           </div>
  //           <div
  //             style={{
  //               display: "flex",
  //               marginTop: "24px",
  //             }}
  //           >
  //             <img
  //               src={data.member.profileImage}
  //               alt=""
  //               style={{
  //                 width: "46px",
  //                 height: "46px",
  //                 borderRadius: "50%",
  //                 border: "1px solid black",
  //                 marginRight: "12px",
  //               }}
  //             />
  //             <div
  //               style={{
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 textAlign: "left",
  //               }}
  //             >
  //               <div style={{ textAlign: "left", fontSize: "18px" }}>
  //                 {data.member.nickname}
  //                 <span style={{ marginLeft: "23px" }}>
  //                   👍 {data.likeCount}
  //                 </span>
  //               </div>
  //               <div
  //                 style={{
  //                   textAlign: "left",
  //                   fontSize: "16px",
  //                   marginTop: "4px",
  //                 }}
  //               >
  //                 {data.content}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });

  const Paging = allPage.map((data, i) => {
    return (
      <span
        key={i}
        style={{ marginLeft: "5px", marginRight: "5px" }}
        onClick={() => {
          setPage(i + 1);
        }}
      >
        {i + 1}
      </span>
    );
  });

  const Page = () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.4em",
        }}
      >
        <span
          style={{ marginRight: "2px" }}
          onClick={() => {
            if (page > 1) {
              setPage((prev) => prev - 1);
            }
          }}
        >
          &lt;
        </span>
        {Paging}
        <span
          style={{ marginLeft: "2px" }}
          onClick={() => {
            if (page <= allPage) {
              setPage((prev) => prev + 1);
            }
          }}
        >
          &gt;
        </span>
      </div>
    );
  };

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  return (
    <Wrapper>
      <CommentContainer>코멘트 및 피드백을 단 작업물</CommentContainer>
      <FeedBackComponent />
      {allPage.length === 0 ? null : <Page />}

      {modalVisibleId !== "" && (
        <RefModal
          id2={postId}
          modalVisibleId2={modalVisibleId}
          setModalVisibleId2={setModalVisibleId}
        />
      )}
    </Wrapper>
  );
}

export default MyPageFeedback;
