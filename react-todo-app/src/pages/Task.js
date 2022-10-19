import React from 'react';
import { useParams } from 'react-router-dom';

function Task() {
    const tasks = [
        { id: 0, label:'Première tâche' },
        { id: 1, label:'Seconde tâche' },
        { id: 2, label:'Troisième tâche' },
        { id: 3, label:'Quatrième tâche' },
        { id: 4, label:'Cinquième tâche' },
        { id: 5, label:'Sixième tâche' }
    ]
    const { id } = useParams();
    const task = tasks.find(task => task.id === Number(id));
    return (
        <React.Fragment>
            <p><strong>Id: </strong>{task.id}</p>
            <p><strong>Libellé: </strong>{task.label}</p>
        </React.Fragment>
    );
}

export default Task;