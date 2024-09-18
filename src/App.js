import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import anime from 'animejs/lib/anime.es.js'; 
import './App.css'; 
import logo from './mci-technology.png';

function App() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToLoginPage = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = '/login'; // Redirige a la página de login en la misma ventana
    }, 300); // Pequeña demora para permitir que el estado se actualice y el contenido se oculte
  };

  useEffect(() => {
    // Mostrar el overlay durante la carga
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    const particleCount = 1000;
    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = (Math.random() - 0.5) * 1000;
      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    camera.position.z = 400;

    function animate() {
      requestAnimationFrame(animate);
      particleSystem.rotation.x += 0.001;
      particleSystem.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    anime.timeline({ loop: false })
      .add({
        targets: '.letter',
        translateY: [100, 0],
        opacity: [0, 1],
        scale: [0.3, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
      });

    anime({
      targets: '.underline',
      scaleX: [0, 1],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutExpo',
      delay: 2000,
    });

    // Ocultar el overlay una vez que la carga esté completa
    const handleLoad = () => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 500); // Coincide con la duración de la transición de opacidad
    };

    window.addEventListener('load', handleLoad);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {/* Overlay que cubre la página durante la carga */}
      <div id="overlay"></div>
      <div className={`App ${isRedirecting ? 'redirecting' : ''}`}>
        <div id="three-container"></div>
        <header className="App-header">
          <img src={logo} className="logo" alt="logo" />
          <div className="icon-container">
            <div className="login-icon" onClick={redirectToLoginPage}>
              <i className="fas fa-user"></i> {/* Ícono de login */}
            </div>
          </div>
        </header>
        <div className="content">
          <h1 className="letter">Bienvenido al Sistema BPM</h1>
          <h2 className="letter">MCI TECHNOLOGY</h2>
          <p className="letter">Inicia sesión para continuar</p>
          <div className="underline"></div>
        </div>
      </div>
    </>
  );
}

export default App;
