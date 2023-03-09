import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { getIdeaContests } from "../../temporary/idea_data";
import RefList from "../reference/ReferenceList";
import axios from "axios";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import ManageList from "./ManageList";

function ManageListContainer() {
  const [mywork, setMywork] = useState([]);

  useEffect(() => {
    axios
      .get("http://loacalhost:8080/user/reference")
      .then((res) => {
        console.log(res);
        setMywork(res.data.data.myReferenceList);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return <ManageList data={mywork} />;
}

export default ManageListContainer;
