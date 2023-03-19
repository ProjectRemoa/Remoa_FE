import Layout from "../../layout/Layout";
import React from "react";
import ManageContainer from "../../containers/manage/ManageContainer";
import ManageFeedbackContainer from "../../containers/manage/ManageFeedbackContainer";
function ManageFeedback() {
  return (
    <Layout>
      <ManageContainer />
        <ManageFeedbackContainer/>
        {/*받은 피드백 관리*/}
    </Layout>
  )
}
export default ManageFeedback;