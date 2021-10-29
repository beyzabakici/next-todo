import TodoItem from "./TodoItem";

export default function TodoCard(props) {

  const isAllChecked = () => {
    return props.item.options.every((i) => {
      return i.isDone
    })
  }
  return (
    <div>
      <h4 className="d-flex align-items-center pb-2">{props.item.title}
      {
        isAllChecked() && <p className="ms-2 mb-0">✅</p>
      }
      </h4>
      <div>
        {props.item.options.map((item, index) => {
            return <TodoItem item={item} key={index} updateItem={props.updateItem} index={props.index} />
        })}
      </div>
    </div>
  );
}
