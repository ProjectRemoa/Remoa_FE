import axios from "axios";

const API_SERVER = process.env.REACT_APP_API_SERVER;

export const getRefreshToken = async () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  try {
    axios
      .put(
        `${API_SERVER}api/member/reissue`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "refresh-token": `Bearer ${refreshToken}`,
          },
        }
      )
      .then((res) => {
        sessionStorage.setItem(
          "accessToken",
          res.data.data.remoaToken.accessToken
        );
        window.location.reload();
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};
