const canvas = document.getElementById('out');
const ctx = canvas.getContext('2d');
// (window.onresize = () => {
//   canvas.width = '100%';
//   canvas.height = '100%';
// })();
const limits = [
  { x: 37.78680489952002, y: -122.4049480163113 },
  { x: 37.78662352047515, y: -122.40631596968298 },
  { x: 37.78577964868966, y: -122.40614569840906 },
];
function map_range(x, inMin, inMax, outMin, outMax) {
  return ((x - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
const max = {
  x: Math.max(...limits.map((p) => p.x)),
  y: Math.max(...limits.map((p) => p.y)),
};
const min = {
  x: Math.min(...limits.map((p) => p.x)),
  y: Math.min(...limits.map((p) => p.y)),
};

const range = (p) => ({
  x: map_range(p.x, min.x, max.x, 0, canvas.width),
  y: map_range(p.y, min.y, max.y, 0, canvas.height),
});

function line(p1, p2) {
  const [c1, c2] = [p1, p2].map(range);
  ctx.lineWidth = 50;

  ctx.beginPath();
  ctx.moveTo(c1.x, c1.y);
  ctx.lineTo(c2.x, c2.y);
  ctx.stroke();
}

function plot(p) {
  const { x, y } = range(p);
  ctx.fillRect(x, y, 10, 10);
}

const combo = [];
limits.forEach((a1) => {
  limits.forEach((a2) => {
    if (a1.x !== a2.x) {
      combo.push([a1, a2]);
    }
  });
});

const getlocs = async () => {
  return fetch(`${end}/getlocs`).then((res) => res.json());
};

const repaint = async (x, y) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  combo.forEach((shit) => line(...shit));

  ctx.fillStyle = 'red';
  plot({
    x,
    y,
  });
};
