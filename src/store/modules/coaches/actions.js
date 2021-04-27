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
    }

    const response = await fetch(
      `https://vue-test-5122e-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach)
      }
    );
    if(!response.ok) {
      console.error('error');
    }
    context.commit('registerCoach', {...coach, id: userId});
  }
}