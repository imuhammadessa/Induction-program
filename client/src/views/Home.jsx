import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
          return;
        }

        const res = await axios.get("/auth/home", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 200) {
          navigate("/");
          setLoading(false);
        } else {
          navigate("/login");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        navigate("/login");
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="p-6">Welcome to Home Page 🎉</div>
    </div>
  );
};

export default Home;
