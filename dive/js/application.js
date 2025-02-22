var game;
// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  game = new GameManager(20, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});

function changeGameMode() {
  if (game == null)
    return;
  game.restart();
}
