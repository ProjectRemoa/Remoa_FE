import axios from "axios";

export const getRefreshToken = async () => {
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = sessionStorage.getItem("refreshToken");

  try {
    axios
      .put(
        "/BE/api/member/reissue",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "refresh-token": `Bearer ${refreshToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.remoaToken.accessToken);
        sessionStorage.setItem(
          "accessToken",
          res.data.data.remoaToken.accessToken
        );
      });
  } catch (err) {
    console.error(err);
  }
};
