import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import request from '../utils/Request';

function handleForm(e) {
    console.log(e)
}

function Task() {
    const { id } = useParams();
    const [task, setTask] = useState([]);
    useEffect(() => {
        request.get('/todos/' + id).then(response => setTask(response.data));
    }, [ id ])
    return (
        <React.Fragment>
            <TaskForm task={task} action="Modifier l'action" onFormSubmit={handleForm} />
        </React.Fragment>
    );
}

export default Task;