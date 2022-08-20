import "./index.css";
import "./App.css";

import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedBackStats from "./components/FeedBackStats";
import { FeedbackProvider } from "./components/Context/FeedbackContext.jsx";

function App() {
  return (
    <FeedbackProvider>
      <Header text="Feedback Application" bgColor="lightgray" />
      <div className="container">
        <FeedbackForm />
        <FeedBackStats />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
