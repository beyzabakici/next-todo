import Head from "next/head";
import { useState } from "react";
import TodoCard from "../compoenents/todoCard";
import { result } from "./api/hello";

function Home() {
  const [data, setData] = useState(result);

  const updateItem = (item, index, isChecked) => {
    const selectedIndex = data[index].options.findIndex(
      (i) => i.id === item.id
    );
    data[index].options[selectedIndex].isDone = isChecked;
    const updatedData = [...data];
    setData(updatedData);
  };

  const isPreviusCompleted = (index) => {
    if (index === 0) {
      return false;
    }

    const isAllDone = data[index - 1].options.every((i) => {
      return i.isDone;
    });

    return isAllDone ? false: true
  };

  return (
    <div className="container bg bg-light rounded-3 mt-5 p-4">
      <Head>
        <title> Next Todo</title>
      </Head>
      <h1 className=" p-3 fw-bold"> My startup progress</h1>
      <div>
        {data.map((item, index) => {
          return (
            <TodoCard
              item={item}
              key={index}
              updateItem={updateItem}
              index={index}
              isDisabled={isPreviusCompleted(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
