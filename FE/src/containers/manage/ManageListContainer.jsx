import { React, useEffect, useState } from "react";
import axios from "axios";
import ManageList from "./ManageList";
function ManageListContainer() {
  const [mywork, setMywork] = useState([]);
  useEffect(() => {
    axios
      .get("/BE/user/reference")
      .then((res) => {
        console.log(res);
        setMywork([...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(mywork);
  return <ManageList data={mywork} />;
}

export default ManageListContainer;
