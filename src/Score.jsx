const Score = function Score({ score }) {
  return (
    <div className="score-container">
      <span className="score">Score: {score}</span>
    </div>
  );
};

export default Score;
