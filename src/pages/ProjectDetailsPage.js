import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";

const API_URL = "http://localhost:5003";

function ProjectDetailsPage(props) {
  const [project, setProject] = useState(null);
  // Get the URL parameter `:projectId`
  const { projectId } = useParams();

  // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getProject = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${API_URL}/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // <== ADD AN EFFECT
    getProject();
  }, []);

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
      <AddTask refreshProject={getProject} projectId={projectId} />
      import TaskCard from "../components/TaskCard";
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}

export default ProjectDetailsPage;
