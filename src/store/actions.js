import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchList,
  fetchUserInfo,
  fetchCommentItem,
} from "../api/index.js";

export default {
  // promise
  // FETCH_NEWS(context) {
  //   return fetchNewsList()
  //     .then((response) => {
  //       context.commit("SET_NEWS", response.data);
  //       return response;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },

  // async
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit("SET_NEWS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // promise
  // FETCH_JOBS({ commit }) {
  //   return fetchJobsList()
  //     .then(({ data }) => {
  //       commit("SET_JOBS", data);
  //     })
  //     .catch((error) => console.log(error));
  // },

  //async 여기서 error처리를 함
  async FETCH_JOBS(context) {
    try {
      const response = await fetchJobsList();
      context.commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // promise
  // FETCH_ASK({ commit }) {
  //   return fetchAskList()
  //     .then(({ data }) => {
  //       commit("SET_ASK", data);
  //     })
  //     .catch((error) => console.log(error));
  // },

  //async api쪽에서 error 처리를 함
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit("SET_ASK", response.data);
    return response;
  },

  // promise
  // FETCH_USER({ commit }, name) {
  //   return fetchUserInfo(name)
  //     .then(({ data }) => {
  //       commit("SET_USER", data);
  //     })
  //     .catch((error) => console.log(error));
  // },

  //async api쪽에서 error 처리를 함
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit("SET_USER", response.data);
    return response;
  },

  // promise
  // FETCH_ITEM({ commit }, id) {
  //   return fetchCommentItem(id)
  //     .then(({ data }) => {
  //       commit("SET_ITEM", data);
  //     })
  //     .catch((error) => console.log(error));
  // },

  //async api쪽에서 error 처리를 함
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit("SET_ITEM", response.data);
    return response;
  },

  // promise
  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //     .then(({ data }) => commit("SET_LIST", data))
  //     .catch((error) => console.log(error));
  // },

  //async api쪽에서 error 처리를 함
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
  },
};
