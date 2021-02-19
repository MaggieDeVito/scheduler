export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find((days) => days.name === day);
  if (state.days.length === 0 || foundDay === undefined) {
    return [];
  }

  return foundDay.appointments.map((id) => state.appointments[id]);
}

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.find((days) => days.name === day);
  if (state.days.length === 0 || foundDay === undefined) {
    return [];
  }
  return foundDay.interviewers.map((id) => state.interviewers[id]);
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
