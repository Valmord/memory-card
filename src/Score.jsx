const Score = function Score({ score, bestScore }) {
  return (
    <div className="score-container">
      <span className="best-score">Best Score: {bestScore} </span>
      <span className="score">Current Score: {score}</span>
    </div>
  );
};

export default Score;
