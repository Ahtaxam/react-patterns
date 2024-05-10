import { Route, Routes } from "react-router-dom";
// import SplitScreen from "./components/LayoutComponent/SplitScreenComponent/SplitScreen";
// import Left from "./components/SplitScreenComponent/Left";
// import Right from "./components/SplitScreenComponent/Right";
import RegularList from "./components/LayoutComponent/ListItemComponent/RegularList";
import SmallPersonListItems from "./components/LayoutComponent/ListItemComponent/People/SmallPersonListItems";
import LargePersonListItem from "./components/LayoutComponent/ListItemComponent/People/LargePersonListItem";
import SmallProductListItems from "./components/LayoutComponent/ListItemComponent/Product/SmallProductListItems";
import LargerProductListItems from "./components/LayoutComponent/ListItemComponent/Product/LargerProductListItems";
import Modal from "./components/LayoutComponent/Modal";

const Persons = [
  {
    name: "John Doe",
    email: "john@example.com",
    age: 25,
    hairColor: "Brown",
    hobbies: ["Reading", "Painting", "Hiking"],
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    age: 30,
    hairColor: "Blonde",
    hobbies: ["Cooking", "Photography", "Yoga"],
  },
  {
    name: "Michael Johnson",
    email: "michael@example.com",
    age: 28,
    hairColor: "Black",
    hobbies: ["Playing Guitar", "Swimming", "Traveling"],
  },
  {
    name: "Emily Davis",
    email: "emily@example.com",
    age: 22,
    hairColor: "Red",
    hobbies: ["Dancing", "Drawing", "Camping"],
  },
];
const Products = [
  {
    name: "Product A",
    price: 29.99,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
  },
  {
    name: "Product B",
    price: 49.99,
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 3.8,
  },
  {
    name: "Product C",
    price: 39.99,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.2,
  },
  {
    name: "Product D",
    price: 59.99,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4.7,
  },
];

function App() {
  return (
    <>
      {/* <SplitScreen leftWeight={1} rightWeight={3}>
               <Left color="red" />
               <Right color="yellow"/>
             </SplitScreen> */}

      {/* <RegularList
        items={Persons}
        resourceName="person"
        itemComponent={SmallPersonListItems}
      />
      <br />
      <RegularList
        items={Persons}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />

      <RegularList
        items={Products}
        resourceName="product"
        itemComponent={SmallProductListItems}
      />
      <br />
      <RegularList
        items={Products}
        resourceName="product"
        itemComponent={LargerProductListItems}
      /> */}
      <Modal>
        {" "}
        <RegularList
          items={Products}
          resourceName="product"
          itemComponent={SmallProductListItems}
        />
      </Modal>
    </>
  );
}

export default App;
