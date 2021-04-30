export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message
    };
    const response = await fetch(
      `https://vue-test-5122e-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send a request');
    }
    newRequest.id = data.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },

  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-test-5122e-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to send a get requests');
    }
    const requests = [];

    for (const key in data) {
      requests.push({
        id: key,
        coachId,
        userEmail: data[key].userEmail,
        message: data[key].message
      });
    }
    context.commit('setRequests', requests);
  }
};
