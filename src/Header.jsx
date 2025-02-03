import Score from "./Score";

const Header = function Header({ score, bestScore }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <small>Featuring Might Guy, the best Guy</small>
      <Score score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
