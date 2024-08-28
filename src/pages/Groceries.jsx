import { CiShoppingBasket } from "react-icons/ci";

const Groceries = () => {
  const groceries = [
    {
      name: "Safeguard (Soap)",
      price: "₱35",
    },
    {
      name: "Shampoo",
      price: "₱15",
    },
    {
      name: "Bag",
      price: "₱1098",
    },
    {
      name: "Aquaflask",
      price: "₱780",
    },
    {
      name: "Ballpen",
      price: "₱20",
    },
  ];

  return (
    <div className="min-h-screen bg-[#8f9a78] w-full flex flex-col items-center justify-center p-4 overflow-x-hidden">
      <h1 className="text-3xl sm:text-4xl mb-6 flex items-center text-[#ebebeb] font-['Poppins'] tracking-wide sm:tracking-wider text-center">
        GROCERIES <CiShoppingBasket className="ml-2" />
      </h1>
      <div className="w-full max-w-md bg-[#F7EED3] rounded-lg shadow-lg p-4 sm:p-6">
        <ul className="space-y-2">
          {groceries.map((item) => (
            <li
              className="font-['Poppins'] text-[#674636] text-lg sm:text-xl flex justify-between items-center"
              key={item.name}
            >
              <span className="mr-2 break-words">{item.name}</span>
              <span className="flex-shrink-0">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Groceries;
