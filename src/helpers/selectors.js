export function getAppointmentsForDay(state, day) {
  const foundDay = state.days.find((days) => days.name === day);
  if (state.days.length === 0 || foundDay === undefined) {
    return []; // if no day return empty array
  }

  return foundDay.appointments.map((id) => state.appointments[id]);
  // if day, find the appointments for that day
}

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.find((days) => days.name === day);
  if (state.days.length === 0 || foundDay === undefined) {
    return []; // if no day, return empty array
  }
  return foundDay.interviewers.map((id) => state.interviewers[id]);
  //if day, find the interviewers for that day
}

export function getInterview(state, interview) {
  let returnObj = {};
  if (!interview) {
    return null; // if no interview, its null.
  }
  for (let id in state.interviewers) {
    // looping through interviewers
    if (Number(id) === interview.interviewer) {
      // if that interviewer matches the interviews interviewer
      returnObj.student = interview.student; // add the student
      returnObj.interviewer = state.interviewers[id]; // add the interviewer
    }
  }
  return returnObj; // return object with student and interviewer from above.
}
