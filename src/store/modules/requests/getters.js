export default {
  requests(state, getters, rootState, rootGetters) {
    const coachId = rootGetters.userId
    return state.requests.filter(req => req.coachId === coachId);
  }
};
