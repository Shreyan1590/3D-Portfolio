// Create a basic 3D scene with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#scene')
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

// Create a 3D object (Torus)
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
const material = new THREE.MeshBasicMaterial({ color: 0xff3b3f, wireframe: true });
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);

// Animation
function animate() {
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// GSAP Animations for UI elements
gsap.from('.intro h1', { opacity: 0, y: -50, duration: 1 });
gsap.from('.intro p', { opacity: 0, y: 50, duration: 1, delay: 0.5 });

// Responsive resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});