const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
