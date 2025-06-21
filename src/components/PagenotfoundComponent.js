import { useRouteError } from "react-router-dom";
const PagenotfoundComponent = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}
export default PagenotfoundComponent;