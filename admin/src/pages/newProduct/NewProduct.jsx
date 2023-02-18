import {useState} from "react";
import "./newProduct.css";
import * as api from "../../api/index";
export default function NewProduct() {
  const [productData, setproductData] = useState({
    name: "",
    category: "",
    selectedFile: "",
    price: 0,
    description: "",
    stock: 0,
    active: true,
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = e => {
    const file = e.target.files[0];
    const validFileTypes = ["image/jpg", "image/jpeg", "image/png"];
    if (!validFileTypes.find(type => type === file.type)) {
      setError("File must be in JPG/PNG format");
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setproductData({...productData, selectedFile: reader.result});
      };
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    if (!productData.selectedFile) return;
    const res = await api.createProduct(productData);
    setLoading(false);
    //setproductData({...productData, res.data});
  };
  if (error) return <h1 className="text-red-800">error</h1>;
  if (loading) return <h1 className="text-red-800 product">Loading</h1>;
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="image"
            name="image"
            htmlFor="image"
            onChange={handleUpload}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            onChange={e =>
              setproductData({...productData, name: e.target.value})
            }
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            onChange={e =>
              setproductData({...productData, category: e.target.value})
            }
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            onChange={e =>
              setproductData({...productData, description: e.target.value})
            }
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="text"
            placeholder="123"
            onChange={e =>
              setproductData({...productData, stock: e.target.value})
            }
          />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select
            name="active"
            id="active"
            onChange={e =>
              setproductData({...productData, active: e.target.value})
            }
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button
          className="addProductButton"
          type="submit"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
}
