import axios from "axios";
import axiosInstance from "../axiosInterceptors";
const token = sessionStorage.getItem("accessToken");

export const getUserProfileImg = async() => {
  try {
    const response = await axiosInstance.get(`user/img`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching UserImg data:', error);
  }
}

export const getUserInfo = async() => {
  try {
    const response = await axiosInstance.get(`user`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching UserInfo data:', error);
  }
}

export const putUserProfileImg = async (newImage) => {
  try {
    const formData = new FormData();
    formData.append("file", newImage);
    return await axios.put("/BE/user/img", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
