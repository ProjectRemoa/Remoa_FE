import Layout from "../../layout/Layout";
import React, { useEffect, useState } from "react";
import ManageContainer from "../../containers/manage/managecontainer";
import ManageShareContainer from "../../containers/manage/manageshare";

function ManageShare() {
  return (
    <Layout>
      <ManageContainer />
      <ManageShareContainer />
    </Layout>
  );
}
export default ManageShare;
