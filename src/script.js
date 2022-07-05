window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let actors = [new Map(ctx), new FPSViewer((ctx.canvas.width / 2) - 70, (ctx.canvas.height / 2) - 20), new Pacman(100, (ctx.canvas.height / 2) - 30, 'yellow')];

  let lastFrame = 0;
  const render = (time) => {
    let delta = (time - lastFrame) / 1000;
    lastFrame = time;
    actors.forEach((actor) => actor.update(delta));
    ctx.clearRect(0, 0, 1024, 1024);
    actors.forEach((actor) => actor.draw(ctx, delta));
    window.requestAnimationFrame(render);
  };

  window.requestAnimationFrame(render);

  document.body.addEventListener('keydown', (e) => {
    actors.forEach((actor) => {
      actor.keyboard_event(e.key);
    });
  });
};
