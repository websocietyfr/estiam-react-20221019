import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import request from '../utils/Request';

function Task() {
    const { id } = useParams();
    const [task, setTask] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        request.get('/todos/' + id).then(response => setTask(response.data));
    }, [ id ])

    function editTask(formTask) {
        console.log('formTask', formTask);
        request.put('/todos/' + id, formTask).then((response) => {
            navigate('/tasks');
        })
    }

    return (
        <TaskForm task={task} action="Modifier la tâche" onFormSubmit={editTask} />
    );
}

export default Task;