import React from "react";


const AddTask = ({name, setName, date, setDate, reminder, setReminder, onAdd }) => {
 

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    if (!name) {
      alert("Please enter the text");
      return;
    }

    onAdd({ name, date, reminder });
    
    
  

    setName("");
    setDate("");
    setReminder(false);
  };

  return (
    <form className="addForm" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* {console.log(text, day, reminder)} */}
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.target.checked)}
          checked={reminder}
        />
      </div>
      <input className="saveBtn" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
