// src/components/TaskCard.js

// We are deconstructing the props object directly in the parentheses of the function
function TaskCard({ title, description }) {
  return (
    <div className="TaskCard card">
      <h3>{title}</h3>
      <h4>Description:</h4>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;

{
  /* <li className="TaskCard card" key={task._id}>
  <h3>{task.title}</h3>
  <h4>Description:</h4>
  <p>{task.description}</p>
</li>; */
}
