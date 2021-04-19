import { useEffect } from "react";
import { collatedTasks } from "../constants";
import { useProjectsValue, useSelectedProjectsValue } from "../context";
import { collatedTasksExist, getCollatedTitle, getTitle } from "../helpers";
import { useTasks } from "../hooks";
import { Checkbox } from "./Checkbox";
import { AddTask } from "./AddTask";
import { ProjectOverlay } from "./ProjectOverlay";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>

      <ul className="tasks__list">
        {tasks.map((task) => (
          <li key={`${task.id}`}>
            <Checkbox id={task.id} taskDesc={task.task} />
            <span>{task.task}</span>
          </li>
        ))}
      </ul>

      <AddTask />
    </div>
  );
};
