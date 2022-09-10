/*
Given an array of meeting time intervals consisting of start and end
times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
---------------------------
canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
canAttendMeetings([[7, 10], [2, 4]]) --> true
*/

/**
 *
 * @desc Checks if meetings are intersecting each other
 * @param {Array} schedules
 * @return {Boolean} 
 */
function meetingRooms(schedules) {
    let starts = []
    let ends = []
    for (let i = 0; i < schedules.length; i++) {
        starts.push(schedules[i][0])
        ends.push(schedules[i][1])
    }
    starts.sort((a, b) => {
        return a - b
    })
    ends.sort((a, b) => {
        return a - b
    })

    for (let j = 1; j < starts.length; j++) {
        if (starts[j] < ends[j - 1]) {
            return false
        }
    }
    return true
}

console.log(meetingRooms([[7, 10], [2, 4]]))