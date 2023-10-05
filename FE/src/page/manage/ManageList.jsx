import React from "react";
import Layout from "../../layout/Layout";
import ManageContainer from "../../containers/manage/managecontainer";
import ManageListContainer from "../../containers/manage/managelistcontainer";

function ManageList() {
  return (
    <Layout>
      <ManageContainer />
      <ManageListContainer />
    </Layout>
  );
}

export default ManageList;
