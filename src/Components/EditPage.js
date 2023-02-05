import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${API}snacks/${id}`).then((res) => setForm(res.data));
  }, [id]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.put(`${API}snacks/${id}`, form).then(() => navigate("/"));
  }

  return (
    <div className="edit-grid">
      <h1 className="column-2 center white">Edit Snack</h1>

      <div className="column-2 form-data">
        <div className="column-2">
          <form className="new-form" onSubmit={(e) => handleSubmit(e)}>
            <label for="name" className="marg-top">
              Name:
            </label>
            <input
              type="text"
              value={form.name}
              id="name"
              required
              onChange={(e) => handleChange(e)}
            />

            <label for="fiber" className="marg-top">
              Fiber:
            </label>
            <input
              type="number"
              value={form.fiber}
              id="fiber"
              required
              onChange={(e) => handleChange(e)}
            />

            <label for="protein" className="marg-top">
              Protein:
            </label>
            <input
              type="number"
              value={form.protein}
              id="protein"
              required
              onChange={(e) => handleChange(e)}
            />

            <label for="sugar" className="marg-top">
              Sugar:
            </label>
            <input
              type="number"
              value={form.added_sugar}
              id="sugar"
              required
              onChange={(e) => handleChange(e)}
            />

            <label for="image" className="marg-top">
              Image:
            </label>
            <input
              type="text"
              value={form.image}
              id="image"
              onChange={(e) => handleChange(e)}
            />

            <div className="submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
