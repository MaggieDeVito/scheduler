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

export function getInterview(state, interview) {
  let returnObj = {};
  if (!interview) {
    return null;
  }
  for (let id in state.interviewers) {
    if (Number(id) === interview.interviewer) {
      returnObj.student = interview.student;
      returnObj.interviewer = state.interviewers[id];
    }
  }
  return returnObj;
}
