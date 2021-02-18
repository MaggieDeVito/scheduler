export function getAppointmentsForDay(state, day) {
  let newArr = [];
  for (let dayObject of state.days) {
    if (day === dayObject.name) {
      for (let app of dayObject.appointments) {
        newArr.push(state.appointments[app]);
      }
    }
  }
  return newArr;
}
