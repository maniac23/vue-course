export default {
  registerCoach(context, data) {
    const coach = {
      id: context.rootGetters.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      desription: data.description,
      hourlyRate: data.rate,
      areas: data.areas
    }
    context.commit('registerCoach', coach);
  }
}