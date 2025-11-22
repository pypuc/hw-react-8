const Filter = ({ value, onChange }) => {
  return (
    <label>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        value={value}
        onChange={(event) => {
          const fieldName = event.target.name;
          const fieldValue = event.target.value;
          onChange(fieldName, fieldValue);
        }}
      />
    </label>
  );
};

export default Filter;
