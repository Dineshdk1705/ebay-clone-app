import { BsChevronRight } from "react-icons/bs";

const CategoryCard = () => {
  const categoryItems = [
    {
      id: 1,
      title: "Collectibles & Art",
      list: [
        "Antiques",
        "Sports Mem, Cards & Fun Shop",
        "Coins & Paper Money",
        "Stamps",
      ],
    },
    {
      id: 2,
      title: "Home & Garden",
      list: [
        "Kitchen, Dining & Bar",
        "Home Improvement",
        "Yard, Garden & Outdoor Living",
        "Refurbished",
      ],
    },
    {
      id: 3,
      title: "Sporting Goods",
      list: [
        "Outdoor Sports",
        "Team Sports",
        "Fitness, Running & Yoga",
        "Golf",
      ],
    },
    {
      id: 4,
      title: "Electronics",
      list: [
        "Cell Phones & Smartphones",
        "Computers & Tablets",
        "TV & Home Audio",
        "Refurbished",
      ],
    },
    {
      id: 5,
      title: "Jewellery & Watches",
      list: [
        "Fashion Jewellery",
        "Watches",
        "Vintage & Antique Jewellery",
        "Fine Jewellery",
      ],
    },
    {
      id: 6,
      title: "Toys & Hobbies",
      list: [
        "Action Figures",
        "Diecast & Toy Vehicles",
        "Model Railroads & Trains",
        "Radio Control & Control Line",
      ],
    },
    {
      id: 7,
      title: "Fashion",
      list: ["Women", "Men", "Watches", "Sneakers"],
    },
    {
      id: 8,
      title: "Motors",
      list: [
        "Parts & Accessories",
        "Cars & Trucks",
        "Motorcycles",
        "Other Vehicles & Trailers",
      ],
    },
    {
      id: 9,
      title: "Other Categories",
      list: [
        "Health & Beauty",
        "DVDs & Movies",
        "Musical Instruments & Gear",
        "Business & Industrial",
      ],
    },
  ];
  return (
    <>
      <div className="px-5 py-4">
        <div className="grid grid-cols-3 w-[660px] h-[480px] border-b">
          {categoryItems.map((item, index) => {
            return (
              <div className="" key={item.id}>
                <div className="flex items-center mb-1">
                  <div className="hover:underline hover:text-[#0654ba] text-[14px] font-bold cursor-pointer">
                    {item.title}
                  </div>
                  <BsChevronRight
                    size={9}
                    style={{ color: "black", strokeWidth: "1" }}
                  />
                </div>
                <ul id="listCategory" className="text-[12px] text-[#555]">
                  {categoryItems[index].list.map((ele, i) => {
                    return (
                      <li
                        key={i}
                        className="mb-1 hover:text-[#0654ba] hover:underline cursor-pointer"
                      >
                        {ele}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex justify-between p-2">
          <div className="flex items-center font-bold text-[#0654ba] hover:underline cursor-pointer">
            Gift Cards
            <BsChevronRight
              size={10}
              style={{ color: "#0654ba", strokeWidth: "1" }}
            />
          </div>
          <div className="flex items-center font-bold text-[#0654ba] hover:underline cursor-pointer">
            See all categories
            <BsChevronRight
              size={10}
              style={{ color: "#0654ba", strokeWidth: "1" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
