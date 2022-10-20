import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";
import TaskCard from "../components/TaskCard"
import request from "../utils/Request";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        request.get('/todos').then(response => setTasks(response.data));
    }, [])
    /*const tasks = [
        { id: 0, label:'Première tâche' },
        { id: 1, label:'Seconde tâche' },
        { id: 2, label:'Troisième tâche' },
        { id: 3, label:'Quatrième tâche' },
        { id: 4, label:'Cinquième tâche' },
        { id: 5, label:'Sixième tâche' }
    ]*/

    return (
        <Container>
            {tasks.length ? tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            )) : ''}
        </Container>
    )
}

export default Tasks;