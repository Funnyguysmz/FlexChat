import axios from "axios";

const API_BASE_URL = "http://47.113.118.26:9090"; // 替换为你的API基础URL

const Service = {
  addFriend: async (friendId: string, token: string) => {
    const formData = new FormData();
    formData.append("friend_id", friendId);

    try {
      const response = await axios.post(`${API_BASE_URL}/friend`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // 明确指定 Content-Type 为 form-data
          token: token,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error adding friend:", error);
      throw error;
    }
  },

  // 暂时搁置
  createGroup: async (groupName: string, members: string[], token: string) => {
    const response = await axios.post(
      `${API_BASE_URL}/group`,
      { name: groupName, ids: members },
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  },

  // 暂时搁置
  joinGroup: async (groupId: string, token: string) => {
    const response = await axios.post(
      `${API_BASE_URL}/group/join`,
      { group_id: groupId },
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  },

  deleteFriend: async (friendId: string, token: string) => {
    const formData = new FormData();
    formData.append("friend_id", friendId);
  
    try {
      const response = await axios({
        method: 'delete',
        url: `${API_BASE_URL}/friend`,
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
        },
        data: formData, // 通过 data 发送 formData
      });
      return response.data;
    } catch (error) {
      console.error("Error deleting friend:", error);
      throw error;
    }
  },
};

export default Service;
