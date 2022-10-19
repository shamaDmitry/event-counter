import Navigation from "../components/Navigation";
import { Button, Input, Modal, Row, Text } from "@nextui-org/react";
import { useState } from "react";

const HomePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeHandler = () => {
    setIsModalVisible(false)
  }

  const openModal = () => setIsModalVisible(true)

  return (
    <>
      <Navigation />

      <h1>
        Homepage
      </h1>

      <Button auto shadow onPress={openModal}>
        Open modal
      </Button>

      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isModalVisible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>

        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default HomePage;
