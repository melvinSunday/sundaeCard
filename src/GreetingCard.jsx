const GreetingCard = ({ children }) => {
  return (
    <div>
      <h1>Greetings!</h1>
      {children}
    </div>
  );
};

export default GreetingCard;
