import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import request from "../utils/Request";

function NewTasks() {
    const navigate = useNavigate();

    function saveTodo(task) {
        // Enregistrer la todo dans l'API
        const currentDate = new Date();
        request.post('/todos/', {
            ...task,
            dueDate: currentDate.getFullYear() + '-' + currentDate.getMonth() + '-' + currentDate.getDay()
        }).then((response) => {
            console.log('Response', response);
            navigate('/tasks');
        })
    }

    return (
        <TaskForm action="Enregistrer la tâche" onFormSubmit={saveTodo} ></TaskForm>
    );
}

export default NewTasks;