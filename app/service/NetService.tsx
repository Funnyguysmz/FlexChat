import axios from 'axios';

const API_BASE_URL = 'http://47.113.118.26:9090'; // 替换为你的API基础URL

const Service = {
  addFriend: async (friendId: string, token: string) => {
    const response = await axios.post(
      `${API_BASE_URL}/friend`,
      { friend_id: friendId },
      {
        headers: {
          token: token,
        },
      }
    );
    return response.data;
  },

  createGroup: async (groupName: string, members: string[], token: string) => {
    const response = await axios.post(
      `${API_BASE_URL}/create-group`,
      { groupName, members },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },

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
};

export default Service;



