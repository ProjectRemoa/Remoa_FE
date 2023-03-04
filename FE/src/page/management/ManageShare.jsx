import Layout from "../../layout/Layout";
import React from "react";
import ManageContainer from "../../containers/manage/ManageContainer";
import ManageShareContainer from "../../containers/manage/ManageShareContainer";
function ManageShare() {
  return (
    <Layout>
      <ManageContainer />
      <ManageShareContainer />
    </Layout>
  );
}
export default ManageShare;
