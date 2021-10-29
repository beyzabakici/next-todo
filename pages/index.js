import Head from "next/head";
import { useState } from "react";
import TodoCard from "../compoenents/todoCard";
import { result } from "./api/hello";

export default function Home() {
  const [data, setData] = useState(result);

  const updateItem = (item, index, isChecked) => {
    const selectedIndex = data[index].options.findIndex((i) => i.id === item.id);
    data[index].options[selectedIndex].isDone = isChecked
    const updatedData = [...data]
    setData(updatedData)
  }

  return (
    <div className="container">
      <Head className="bg bg-light">
        <title> Next Todo</title>
      </Head>
      <h1 className=" p-3 fw-bold"> My startup progress</h1>
      <div>
        {data.map((item, index) => {
          return <TodoCard item={item} key={index} updateItem={updateItem} index={index}/>
        })}
      </div>
    </div>
  );
}
