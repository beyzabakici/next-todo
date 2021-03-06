function TodoItem(props) {
  const onChange = (e) => {
    return props.updateItem(props.item, props.index, e.target.checked);
  };

  return (
    <div className="mb-3 ms-4">
      <input
        className="form-check-input"
        type="checkbox"
        id={props.item.value}
        checked={props.item.isDone}
        onChange={onChange}
        disabled={props.isDisabled}
      />
      <label className="form-check-label ms-2" htmlFor={props.item.value}>
        {props.item.value}
      </label>
    </div>
  );
}

export default TodoItem;
