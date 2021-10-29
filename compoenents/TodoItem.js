export default function TodoItem(props) {
  const onChange = (e) => {
    return props.updateItem(props.item, props.index, e.target.checked);
  };

  return (
    <div className="mb-3">
      <input
        className="form-check-input"
        type="checkbox"
        id={props.item.value}
        checked={props.item.isDone}
        onChange={onChange}
      />
      <label className="form-check-label ms-2" htmlFor={props.item.value}>
        {props.item.value}
      </label>
    </div>
  );
}