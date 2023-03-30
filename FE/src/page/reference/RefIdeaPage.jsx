import Layout from "../../layout/Layout";
import React from "react";
import ReferenceContainer from "../../containers/reference/ReferenceContainer";
import RefListWrapper from "../../containers/reference/RefListWrapper";
import FirstModal from "../../containers/modal/FirstModal";
function RefIdeaPage() {
  //처음에만 보여주는 모달 구현
  return (
    <Layout >
      {/* <FirstModal /> */}
      <ReferenceContainer />
      {/* <RefListWrapper /> */}
    </Layout>
  )
}


export default RefIdeaPage;