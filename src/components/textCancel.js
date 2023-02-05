import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";


function TextCancel({ value, placeholder, onChange, onDelete }) {
  const [hovered, setHovered] = useState(false);

  return (
    <InputGroup className="mt-2"
      onMouseOver={(e) => setHovered(true)}
      onMouseLeave={(e) => setHovered(false)}
    >
      <Form.Control
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      { hovered &&
        <Button variant="danger" id="button-addon2" size="sm" onClick={(e) => onDelete()}>
          X
        </Button>
      }
    </InputGroup>
  );
}

export default TextCancel;