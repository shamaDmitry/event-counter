import Counter from "../components/Counter";

const EventPage = () => {
  return (
    <h1>
      EventPage

      <Counter
        targetDate={'date'}
        isExpired={false}
      />
    </h1>
  )
}

export default EventPage;
