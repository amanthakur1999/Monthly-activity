function Activity(props) {
  function getDay(y, m) {
    let dayInMonths = new Date(y, m, 0).getDate();
    let days = [];

    for (let i = 1; i <= dayInMonths; i++) {
      days.push(i);
    }
    return days;
  }

  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let date = new Date();
  let month = date.getMonth();
  let year = date.getFullYear();
  let numberOfDays = getDay(month, year);
  let activities = props.activities;
  return (
    <>
      {activities.map((activity, i) => (
        <div
          className="flex w-12/12 m-auto shadow-lg p-4 py-12 border mb-8 text-pink-700 relative rounded-md"
          key={i}
        >
          <div className="flex-30 flex flex-col justify-center items-center p-2  px-8">
            <h4 className="text-xl text-green-500 font-bold">
              {activity.activityName}
            </h4>
            <h4 className="inline bg-red-400 text-white font-bold my-1 p-1 px-4 rounded-md">
              {months[month]}
            </h4>
          </div>

          <div className="flex flex-60 flex-wrap px-8 ">
            {numberOfDays.map((day, j) => (
              <div className="flex flex-wrap flex-60">
                <button
                  id={i}
                  key={j}
                  className={
                    !activity.activityDays.includes(String(day))
                      ? 'border-2 text-black border-gray-300 flex-10 w-10 h-10 hover:border-blue-500 mx-3 my-2 rounded-lg shadow-md'
                      : 'bg-green-500 w-10 h-10 border-2 text-white flex-10 mx-3 my-2 rounded-lg  shadow-md'
                  }
                  value={day}
                  onClick={(e) => props.handleClick(e)}
                >
                  {day}
                </button>
              </div>
            ))}
          </div>
          <div className="absolute right-4 top-1">
            <i
              className="fas fa-times-circle cursor-pointer text-red-600 text-2xl"
              id={i}
              onClick={(e) => props.handleRemove(e)}
            ></i>
          </div>
        </div>
      ))}
    </>
  );
}

export default Activity;
