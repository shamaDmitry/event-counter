import { Button, Input, Modal, Text, Radio, Textarea } from "@nextui-org/react";
import { useState } from "react";

const AddEventModal = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
  });
  const openModal = () => setIsModalVisible(true);
  const closeHandler = () => setIsModalVisible(false);

  const handleChange = (event) => {
    setEventData({
      ...eventData,
      [event.target.name]: event.target.value
    });
  }

  const addEvent = () => {

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
          {JSON.stringify(eventData)}

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

          <Radio.Group label="Label colors" defaultValue="primary" orientation="horizontal">
            <Radio value="primary" color="primary" labelColor="primary">
              primary
            </Radio>
            <Radio value="secondary" color="secondary" labelColor="secondary">
              secondary
            </Radio>
            <Radio value="success" color="success" labelColor="success">
              success
            </Radio>
            <Radio value="warning" color="warning" labelColor="warning">
              warning
            </Radio>
            <Radio value="error" color="error" labelColor="error">
              error
            </Radio>
          </Radio.Group>

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
