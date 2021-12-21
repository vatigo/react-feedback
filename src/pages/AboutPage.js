import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>This is a ReactJS app to leave feedback for a service or a product.</p>
      <p>Version: 1.0.0.</p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </Card>
  );
}

export default AboutPage;
