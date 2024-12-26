import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface Employee {
  first_name: string;
  last_name: string;
  departement: string;
  employee_id: string;
  id: number;
}

export const useEmployeeData = () => {
  const [info, setInfo] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [one, setOne] = useState<Employee | null>(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const data: string | null = localStorage.getItem("data");
  const data2 = data ? JSON.parse(data) : null;

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    // Fetch employees data
    axios
      .get("http://127.0.0.1:8000/employees/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Employees fetched:", res.data);
        setInfo(res.data.employees);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching employees:", err.response || err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data2?.username.startsWith("employee")) {
      const index = parseInt(
        data2.username.replace("employee", "").trim() || "0"
      );

      if (index >= 0 && index < info.length) {
        setOne(info[index]);
      }
    }
  }, [info, data2]);

  return { info, loading, one };
};
