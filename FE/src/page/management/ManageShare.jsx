import Layout from "../../layout/Layout";
import React, { useEffect, useState } from "react";
import ManageContainer from "../../containers/manage/ManageContainer";
import ManageShareContainer from "../../containers/manage/ManageShareContainer";
import { useNavigate } from "react-router";
function ManageShare() {
  return (
    <Layout>
      <ManageContainer />
      <ManageShareContainer />
    </Layout>
  );
}
export default ManageShare;
