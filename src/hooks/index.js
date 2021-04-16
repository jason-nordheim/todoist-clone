import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";

const collatedTasksExists = () => {};

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "7yFLIr7XSqGRvxmcfhId");

    unsubscribe =
      selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "data",
            "==",
            moment().format("DD/MM/YYY")
          ))
        : selectedProject === "INBOX" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("data", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapShot) => {
      const newTasks = snapShot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));
      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archived !== true
            )
          : newTasks.filter((task) => task.archived !== true)
      );

      setArchivedTasks(newTasks.filter((task) => task.archived !== false));
    });
    return unsubscribe();
  }, [selectedProject]);
  return { tasks, archivedTasks };
};
