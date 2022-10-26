import { useEffect, useState } from "react";
import Row from "react-bootstrap/esm/Row";

function TaskForm({ task, action, onFormSubmit }) {
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
                    <input type="text" id="priority" defaultValue={priority} onChange={(e) => setPriority(e.target.value)} />
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="category">Category</label>
                    <input type="text" id="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="col-sm">
                    <label htmlFor="status">Statut</label>
                    <input type="text" id="status" defaultValue={status} onChange={(e) => setStatus(e.target.value)} />
                </div>
            </Row>
            <button className="btn btn-success">{action}</button>
        </form>
    );
}

export default TaskForm;