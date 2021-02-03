import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1d7bebd9-0b59-408a-aee4-503d4c5a787d",
  },
});

export const userAPI = {
  getUsers(curentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${curentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollowUser(id: number) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId: string) {
    return instance.get(`profile/` + userId);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
