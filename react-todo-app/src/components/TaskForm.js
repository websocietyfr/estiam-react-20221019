import { useState } from "react";
import Row from "react-bootstrap/esm/Row";

function TaskForm({ task, action, onFormSubmit }) {
    const [todo, setTodo] = useState(task.todo);
    const [priority, setPriority] = useState(task.priority);
    const [category, setCategory] = useState(task.category);
    const [status, setStatus] = useState(task.status);

    return (
        <form onSubmit={onFormSubmit}>
            <Row>
                <div className="col-sm">
                    <label htmlFor="todo"></label>
                    <input type="text" id="todo" defaultValue={todo} onChange={(e) => setTodo(e.target.value)} />
                </div>
                <div className="col-sm">
                    <label htmlFor="priority"></label>
                    <input type="text" id="priority" defaultValue={priority} onChange={(e) => setPriority(e.target.value)} />
                </div>
            </Row>
            <Row>
                <div className="col-sm">
                    <label htmlFor="category"></label>
                    <input type="text" id="category" defaultValue={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div className="col-sm">
                    <label htmlFor="status"></label>
                    <input type="text" id="status" defaultValue={status} onChange={(e) => setStatus(e.target.value)} />
                </div>
            </Row>
            <button className="btn btn-success">{action}</button>
        </form>
    );
}

export default TaskForm;