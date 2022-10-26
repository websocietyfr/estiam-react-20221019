import { useEffect, useState } from "react"
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import TaskCard from "../components/TaskCard"
import request from "../utils/Request";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        request.get('/todos').then(response => setTasks(response.data));
    }, [])

    return (
        <>
            <Container>
                <Link to="/tasks/new" className="btn btn-info">Nouvelle tâche</Link>
            </Container>
            <Container>
                {tasks.length ? tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                )) : ''}
            </Container>
        </>
    )
}

export default Tasks;