import { React, useEffect, useState } from "react";
import axios from "axios";
import ManageList from "./ManageList";
import "./ManageListContainer.scss";
import { useNavigate } from "react-router";

function ManageListContainer() {
  const [mywork, setMywork] = useState([]);
  const [totalOfAllReferences, setTotalOfAllReferences] = useState(0);
  const [totalOfPageElements, setTotalOfPageElements] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const onChangeCategory = (e) => {
    navigate(`/manage/list/${e.target.value}`);
  };

  useEffect(() => {
    axios
      .get("/BE/user/reference")
      .then((res) => {
        console.log(res);
        setMywork([...res.data.data.references]);
        setTotalOfAllReferences(res.data.data.totalOfAllReferences);
        setTotalOfPageElements(res.data.data.totalOfPageElements);
        setTotalPages(res.data.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="ManageListContainer">
      <div style={{ float: "left" }}>내 작업물 목록</div>
      <div>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-1"
            type="radio"
            name="category"
            value="total"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-1">전체</label>
        </div>
      </div>
      {!totalOfAllReferences ? (
        <div>지금 바로 작업물을 올려보세요!</div>
      ) : (
        <ManageList
          data={mywork}
          TAR={totalOfAllReferences}
          TPE={totalOfPageElements}
          TP={totalPages}
        />
      )}
    </div>
  );
}

export default ManageListContainer;
