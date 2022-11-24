import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    photo: "chair-1.png",
    productName: "Speaker Kecil",
    price: "Rp 120.000",
  },
  {
    id: 2,
    photo: "chair-2.png",
    productName: "Mic 18 Watt",
    price: "Rp 75.000",
  },
  {
    id: 3,
    photo: "chair-3.png",
    productName: "Mixer Audio Besar",
    price: "Rp 250.000",
  },
  {
    id: 4,
    photo: "chair-1.png",
    productName: "Kabel Jack",
    price: "Rp 30.000",
  },
];

function Related() {
  return (
    <div>
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto">
          <div className="flex flex-start mb-4 text-left">
            <h3 className="text-2xl capitalize font-semibold">
              Complete your room <br classname="" />
              with what we recommend
            </h3>
          </div>
          <div className="flex overflow-x-auto mb-4 -mx-3">
            {items.map((item) => (
              <div className="px-3 flex-none" style={{ width: "320px" }}>
                <div className="rounded-xl p-4 pb-8 relative bg-white">
                  <div className="rounded-xl overflow-hidden card-shadow w-full h-36">
                    <img
                      src=""
                      alt=""
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <h5 className="text-lg font-semibold mt-4">
                    {item.productName}
                  </h5>
                  <span class="">{item.price}</span>
                  <Link to="/product" className="stretched-link">
                    <div></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Related;
