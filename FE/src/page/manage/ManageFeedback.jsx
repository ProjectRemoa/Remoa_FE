import Layout from "../../layout/Layout";
import React from "react";
import ManageContainer from "../../containers/manage/managecontainer";
import ManageFeedbackContainer from "../../containers/manage/managefeedback";
function ManageFeedback() {
  return (
    <Layout>
      <ManageContainer />
      <ManageFeedbackContainer/>
    </Layout>
  )
}
export default ManageFeedback;