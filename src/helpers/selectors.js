export function getAppointmentsForDay(state, day) {
  const newArr = state.interview.filter((interview) => interview.day === day);
  return newArr;
}

// function selectUserByName(state, name) {
//   const filteredNames = state.users.filter((user) => user.name === name);
//   return filteredNames;
// }
