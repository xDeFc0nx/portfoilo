import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${process.env.VITE_API}/api/check-auth`, {
          method: "GET",
          credentials: "include", // Include cookies (JWT)
        });

        if (response.ok) {
          setIsAuthenticated(true); // User is authenticated
        } else {
          setIsAuthenticated(false); // User is not authenticated
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setIsAuthenticated(false); // Error means not authenticated
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Optional: Show a loading state
  }

  if (!isAuthenticated) {
    navigate("/login"); // Redirect to login page if not authenticated
    return null; // Prevent rendering the protected content
  }

  return <>{children}</>; // Render protected content if authenticated
};

export default ProtectedRoute;
