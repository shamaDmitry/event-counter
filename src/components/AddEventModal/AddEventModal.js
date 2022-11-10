import { Button, Input, Modal, Text, Textarea, Dropdown } from "@nextui-org/react";
import { useState } from "react";

const AddEventModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    label: 'primary',
    description: '',
  });
  // const [selected, setSelected] = useState("Primary");

  // const selectedValue = useMemo(
  //   () => Array.from(selected).join(", ").replaceAll("_", " "),
  //   [selected]
  // );

  const openModal = () => setIsModalVisible(true);
  const closeHandler = () => setIsModalVisible(false);

  const setLabelColor = (color) => {
    console.log(color)

    setEventData({
      ...eventData,
      label: color
    });
  }

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value
    });
  }

  const addEvent = () => {
    alert(JSON.stringify(eventData))
  }

  return (
    <>
      <Modal
        blur
        closeButton
        preventClose
        aria-labelledby="modal-title"
        open={isModalVisible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={20} b>
            Add event
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            label="Title"
            name="title"
            placeholder="Title"
            value={eventData.title}
            onChange={handleChange}
          />
          <Input
            label="Date"
            type="date"
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
          />

          <Input
            type="time"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            label="Time"
            placeholder="Time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
          />

          {JSON.stringify(eventData)}

          <Text css={{mb: 3}} color="primary">
            Color
          </Text>
          <Dropdown>
            <Dropdown.Button flat color={eventData.label.currentKey}>
              {eventData.label}
            </Dropdown.Button>
            <Dropdown.Menu
              aria-label="Single selection actions"
              color={eventData.label.currentKey}
              textColor={eventData.label.currentKey}
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={eventData.label}
              onSelectionChange={setLabelColor}
            >
              <Dropdown.Item key="primary" color="primary" textColor="primary">Primary</Dropdown.Item>
              <Dropdown.Item key="secondary" color="secondary" textColor="secondary">secondary</Dropdown.Item>
              <Dropdown.Item key="success" color="success" textColor="success">success</Dropdown.Item>
              <Dropdown.Item key="warning" color="warning" textColor="warning">warning</Dropdown.Item>
              <Dropdown.Item key="error" color="error" textColor="error">error</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Textarea
            bordered
            color="primary"
            label="Description"
            placeholder="Description"
            name="description"
            value={eventData.description}
            onChange={handleChange}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>

          <Button auto onPress={(e) => addEvent()}>
            Add event
          </Button>
        </Modal.Footer>
      </Modal>

      <Button auto shadow onPress={openModal}>
        Open modal
      </Button>
    </>
  );
}

export default AddEventModal;
