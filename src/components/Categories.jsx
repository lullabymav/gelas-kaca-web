import "./../index.css";
import category_1 from "./../asset/category_1.jpg";

function Categories() {
  return (
    <div>
      <div className="card h-40 rounded-2xl mb-6 relative">
        <div className="opacity-80">
          <img
            src={category_1}
            alt="gambar"
            className="object-cover h-40 w-full rounded"
          />
        </div>
        <div className="absolute text-5xl text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-xl font-bold">Sound System</h1>
        </div>
      </div>
    </div>
  );
}

export default Categories;
