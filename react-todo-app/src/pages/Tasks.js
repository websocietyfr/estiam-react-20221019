import TaskCard from "../components/TaskCard"

const Tasks = () => {
    const tasks = [
        { id: 0, label:'Première tâche' },
        { id: 1, label:'Seconde tâche' },
        { id: 2, label:'Troisième tâche' },
        { id: 3, label:'Quatrième tâche' },
        { id: 4, label:'Cinquième tâche' },
        { id: 5, label:'Sixième tâche' }
    ]

    return (
        <ul>
            {tasks.length ? tasks.map((task) => (
                <TaskCard key={task.id} title={task.label} identifiant={task.id} />
            )) : ''}
        </ul>
    )
}

export default Tasks;