import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function TaskCard({ task }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    {task.todo}
                </Card.Title>
                <Card.Text>
                    <strong>Priority : </strong>{task.priority}<br/>
                </Card.Text>
                <Card.Text>
                    <strong>Category : </strong>{task.category}<br/>
                </Card.Text>
                <Card.Text>
                    <strong>Status : </strong>{task.status}<br/>
                </Card.Text>
                <Card.Text>
                    <Link className="btn btn-success" to={'/task/' + task.id}>Access to task details</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TaskCard;