import { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";

function TaskForm({ task = {}, action, onFormSubmit }) {
    const [todo, setTodo] = useState(task.todo);
    const [priority, setPriority] = useState(task.priority);
    const [category, setCategory] = useState(task.category);
    const [status, setStatus] = useState(task.status);

    useEffect(() => {
        setTodo(task.todo);
        setPriority(task.priority);
        setCategory(task.category);
        setStatus(task.status);
    }, [ task ]);

    function handleForm(e) {
        e.preventDefault();
        onFormSubmit({ todo, priority, category, status });
    }

    return (
        <form onSubmit={handleForm}>
            <Row>
                <div className="col-sm">
                    <label htmlFor="todo">Libellé de la tâche</label>
                    <input type="text" id="todo" defaultValue={todo} onChange={(e) => setTodo(e.target.value)} />
                </div>
                <div className="col-sm">
                    <label htmlFor="priority">Priorité</label>
                    <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value=""></option>
                        <option value="HIGH">Elevée</option>
                        <option value="MEDIUM">Intermédiaire</option>
                        <option value="LOW">Basse</option>
                    </select>
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="category">Category</label>
                    <select id="priority" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value=""></option>
                        <option value="WORK">Travail</option>
                        <option value="HOME">Personnel</option>
                        <option value="LEARNING">Scolaire</option>
                    </select>
                </div>
                <div className="col-sm">
                    <label htmlFor="status">Statut</label>
                    <select id="priority" value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value=""></option>
                        <option value="TO DO">A Faire</option>
                        <option value="IN PROGRESS">En cours</option>
                        <option value="DONE">Terminée</option>
                    </select>
                </div>
            </Row>
            <button className="btn btn-success">{action}</button>
        </form>
    );
}

export default TaskForm;