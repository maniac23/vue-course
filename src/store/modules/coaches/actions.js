export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coach = {
      // id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      desription: data.description,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(
      `https://vue-test-5122e-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach)
      }
    );
    if (!response.ok) {
      console.error('error');
    }
    context.commit('registerCoach', { ...coach, id: userId });
  },
  async loadCoaches(context, payload ) {
    if(!payload.forceRefresh && !context.getters.shouldUpdate) {
      return
    }
    const response = await fetch(
      `https://vue-test-5122e-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch coaches');
    }
    const coaches = [];
    for (const key in data) {
      coaches.push({
        id: key,
        firstName: data[key].firstName,
        lastName: data[key].lastName,
        desription: data[key].description,
        hourlyRate: data[key].rate,
        areas: data[key].areas
      });
    }

    context.commit('setCoaches', coaches);
     context.commit('setFetchTimeStamp');
  }
};
