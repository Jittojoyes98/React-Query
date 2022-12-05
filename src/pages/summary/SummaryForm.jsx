import React from "react";
import { useState } from "react";
import { Form, Button, OverlayTrigger, Popover } from "react-bootstrap";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Terms and conditions</Popover.Header>
      <Popover.Body>
        We won't be <strong>delivering</strong> this to your home.
      </Popover.Body>
    </Popover>
  );
  const checkLabel = (
    <span>
      I agree to
      <OverlayTrigger
        trigger={["hover", "hover"]}
        placement="right"
        overlay={popover}
      >
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <Form>
      <Form.Group>
        <Form.Check
          type="checkbox"
          label={checkLabel}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
      </Form.Group>
      <Button type="submit" variant="primary" disabled={!checked}>
        Submit
      </Button>
    </Form>
  );
};

export default SummaryForm;
