import React from "react";
import Layout from "../../layout/Layout";
import ManageContainer from "../../containers/manage/ManageContainer";
import ManageListContainer from "../../containers/manage/ManageListContainer";

function ManageList() {
  return (
    <Layout>
      <ManageContainer />
      <ManageListContainer />
    </Layout>
  );
}

export default ManageList;
