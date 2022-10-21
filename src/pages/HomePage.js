import Navigation from "../components/Navigation";
import AddEventModal from "../components/AddEventModal/AddEventModal";
import { Container, Button } from "@nextui-org/react";
import Counter from "../components/Counter";
import { useState } from "react";

const HomePage = () => {
  const targetTime = new Date('2022/10/22 08:00:00').getTime() / 1000;

  const handleSave = (event, arg) => {

  }

  return (
    <>
      <Navigation />

      <Container>
        <h1>
          Homepage
        </h1>

        <AddEventModal save={handleSave} />

        <Counter targetTime={targetTime} />
      </Container>
    </>
  )
}

export default HomePage;
