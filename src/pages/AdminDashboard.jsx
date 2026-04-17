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
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-white p-6 shadow md:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          <button
            onClick={() => {
              logoutAdmin();
              navigate("/admin");
            }}
            className="text-sm font-medium text-red-600 hover:text-red-700"
          >
            Logout
          </button>
        </div>

        <div className="space-y-4">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium text-slate-800">{p.name}</span>
              <input
                type="number"
                defaultValue={p.price}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 sm:w-32"
                onBlur={(e) => updatePrice(p.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
