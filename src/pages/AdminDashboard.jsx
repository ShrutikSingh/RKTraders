import { useEffect, useState } from "react";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { logoutAdmin } from "../firebaseAuth";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDocs(collection(db, "products")).then((snapshot) => {
      setProducts(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, []);

  const updatePrice = async (id, price) => {
    await updateDoc(doc(db, "products", id), { price: Number(price) });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-8">
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <button
            onClick={() => {
              logoutAdmin();
              navigate("/admin");
            }}
            className="text-red-600"
          >
            Logout
          </button>
        </div>

        {products.map((p) => (
          <div key={p.id} className="flex justify-between mb-4">
            <span>{p.name}</span>
            <input
              type="number"
              defaultValue={p.price}
              className="border p-2 rounded w-32"
              onBlur={(e) => updatePrice(p.id, e.target.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
