import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
