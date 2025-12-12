// THREE.js Background Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("bg") });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Torus Knot
const geometry = new THREE.TorusKnotGeometry(10, 3, 200, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x00eaff });
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

camera.position.z = 40;

function animate() {
  requestAnimationFrame(animate);

  torusKnot.rotation.x += 0.006;
  torusKnot.rotation.y += 0.012;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Smooth Reveal Animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  let windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    let elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
