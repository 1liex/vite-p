import Header from "./Header/Header";
import Card from "./Card/Card";
import "./App.css";

function App() {
  const cards = [
    {
      id: 1,
      color: "#FCEED8",
      emoje: "✋",
      title: "Collect Feedback at Multiple Touchpoints",
      description:
        "Provide a comprehensive understanding of the customer experience.",
      photoNumber: "2",
    },
    {
      id: 2,
      color: "#DEE9FC",
      emoje: "🥅",
      title: "Ask Targeted and Specific Questions",
      description:
        "Avoid vague or open-ended questions that may not yield actionable insights.",
      photoNumber: "1",
    },
    {
      id: 3,
      color: "#FBE5E6",
      emoje: "💬",
      title: "Prioritize and Respond to Feedback",
      description:
        "Communicate the changes or improvements you've made in response to their feedback.",
      photoNumber: "3",
    },
  ];

  const repet = cards.map((card) => {
    return (
      <Card
        key={card.id}
        color={card.color}
        emoje={card.emoje}
        title={card.title}
        description={card.description}
        photoNumber={card.photoNumber}
      />
    );
  });

  return (
    <div className="App">
      <Header />

      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {repet}
      </div>
    </div>
  );
}

export default App;
