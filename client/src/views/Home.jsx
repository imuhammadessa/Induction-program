import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useIdleLogout from "../hooks/useIdleLogout.js";
import Layout from "../layout/Layout";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useIdleLogout(300);

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
    <Layout>
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-2 text-gray-700">This is the dashboard area.</p>
    </Layout>
  );
};

export default Home;
