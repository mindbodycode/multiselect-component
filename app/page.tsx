import Multiselect from "@/components/ui/multiselect";

export type Fruit = {
  id: number;
  name: string;
};

const Home = () => {
  const fruits: Fruit[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Elderberry" },
    { id: 6, name: "Fig" },
    { id: 7, name: "Grapes" },
    { id: 8, name: "Kiwi" },
    { id: 9, name: "Lemon" },
    { id: 10, name: "Mango" },
    { id: 11, name: "Orange" },
    { id: 12, name: "Papaya" },
    { id: 13, name: "Quince" },
    { id: 14, name: "Raspberry" },
    { id: 15, name: "Strawberry" },
    { id: 16, name: "Tangerine" },
    { id: 17, name: "Uva" },
    { id: 18, name: "Watermelon" },
    { id: 19, name: "Xigua" },
    { id: 20, name: "Yellow Passion Fruit" },
  ];

  return (
    <div className="flex justify-center items-center h-dvh">
      <Multiselect fruits={fruits} />
    </div>
  );
};

export default Home;
