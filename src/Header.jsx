import Score from "./Score";

const Header = function Header({ score }) {
  return (
    <header>
      <h1>Memory Card Game</h1>
      <Score score={score} />
    </header>
  );
};

export default Header;
