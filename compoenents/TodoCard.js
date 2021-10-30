import TodoItem from "./TodoItem";

function TodoCard(props) {
  const isAllChecked = () => {
    return props.item.options.every((i) => {
      return i.isDone;
    });
  };
  return (
    <div>
      <div className="d-flex align-items-center pb-2">
        <h1 className="badge bg-dark rounded-pill me-2">{props.index + 1}</h1>
        <h4>{props.item.title}</h4>
        {isAllChecked() && <p className="ms-2 mb-0">✅</p>}
      </div>
      <div>
        {props.item.options.map((item, index) => {
          return (
            <TodoItem
              item={item}
              key={index}
              updateItem={props.updateItem}
              index={props.index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoCard;
