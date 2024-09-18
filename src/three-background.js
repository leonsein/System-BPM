import * as THREE from 'three';

function initThree() {
  // Crear una escena
  const scene = new THREE.Scene();
  
  // Crear una cámara
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
  // Crear un renderizador
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('three-container').appendChild(renderer.domElement);
  
  // Crear una geometría y material para el fondo
  const geometry = new THREE.PlaneGeometry(2000, 2000);
  const texture = new THREE.TextureLoader().load('public/images/animated-background.jpg'); // Reemplaza con tu imagen
  const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
  const background = new THREE.Mesh(geometry, material);
  scene.add(background);

  // Configurar la cámara
  camera.position.z = 1;

  // Animación
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });
}

export default initThree;
