import React, { useState, useEffect } from 'react';
import MapComponent from './components/MapComponent';
import FlowerListComponent from './components/FlowerListComponent';
import FlowerDetailComponent from './components/FlowerDetailComponent';
import flowerDescriptions from './assets/flowers/flowerDescriptions';
import './App.css';
import map1 from './assets/maps/map1.jpeg'; // Import the JPEG map image

const flowers = [
  { name: 'Alyssum (Alis)', image: '/src/assets/flowers/alis.jpeg', description: flowerDescriptions.alyssum, audio: '/src/assets/audio/alyssum.mp3', mapSrc: '/src/assets/maps/alyssum-map.jpeg' },
  { name: 'Beyaz Civan Perçemi (Achillea Ketenoglui)', image: '/src/assets/flowers/beyaz-civan-percemi.jpeg', description: flowerDescriptions.beyazCivanPercemi, audio: '/src/assets/audio/beyaz-civan-percemi.mp3', mapSrc: '/src/assets/maps/beyaz-civan-percemi-map.jpeg' },
  { name: 'Yurtçanı (Campanula Pamphylica Subsp)', image: '/src/assets/flowers/yurtcani.jpeg', description: flowerDescriptions.yurtcani, audio: '/src/assets/audio/yurtcani.mp3', mapSrc: '/src/assets/maps/yurtcani-map.jpeg' },
  { name: 'Centaurea Nivea', image: '/src/assets/flowers/centaurea-nivea.jpeg', description: flowerDescriptions.centaureaNivea, audio: '/src/assets/audio/centaurea-nivea.mp3', mapSrc: '/src/assets/maps/centaurea-nivea-map.jpeg' },
  { name: 'Çan Çiçeği (Tokurii)', image: '/src/assets/flowers/can-cicegi.jpeg', description: flowerDescriptions.canCicegi, audio: '/src/assets/audio/can-cicegi.mp3', mapSrc: '/src/assets/maps/can-cicegi-map.jpeg' },
  { name: 'Çöven Otu (Gypsophila Osmangaziensis)', image: '/src/assets/flowers/coven-otu.jpeg', description: flowerDescriptions.covenOtu, audio: '/src/assets/audio/coven-otu.mp3', mapSrc: '/src/assets/maps/coven-otu-map.jpeg' },
  { name: 'Dağ Çayı (Sideritis Gulendamiae)', image: '/src/assets/flowers/dag-cayi.jpeg', description: flowerDescriptions.dagCayi, audio: '/src/assets/audio/dag-cayi.mp3', mapSrc: '/src/assets/maps/dag-cayi-map.jpeg' },
  { name: 'Jülyen (Hesperis Turkmendaghensis)', image: '/src/assets/flowers/julyen.jpeg', description: flowerDescriptions.julyen, audio: '/src/assets/audio/julyen.mp3', mapSrc: '/src/assets/maps/julyen-map.jpeg' },
  { name: 'Kahkaha Çiçeği (Convolvulus Pulvuinatus)', image: '/src/assets/flowers/kahkaha-cicegi.jpeg', description: flowerDescriptions.kahkahaCicegi, audio: '/src/assets/audio/kahkaha-cicegi.mp3', mapSrc: '/src/assets/maps/kahkaha-cicegi-map.jpeg' },
  { name: 'Kantoron (Hypericum Sechmenii)', image: '/src/assets/flowers/kantoron.jpeg', description: flowerDescriptions.kantoron, audio: '/src/assets/audio/kantoron.mp3', mapSrc: '/src/assets/maps/kantoron-map.jpeg' },
  { name: 'Peygamber Çiçeği (Centaurea Sericea)', image: '/src/assets/flowers/peygamber-cicegi.jpeg', description: flowerDescriptions.peygamberCicegi, audio: '/src/assets/audio/peygamber-cicegi.mp3', mapSrc: '/src/assets/maps/peygamber-cicegi-map.jpeg' },
  { name: 'Sığır Kuyruğu (Verbascum Gypsicola)', image: '/src/assets/flowers/sigir-kuyrugu.jpeg', description: flowerDescriptions.sigirKuyrugu, audio: '/src/assets/audio/sigir-kuyrugu.mp3', mapSrc: '/src/assets/maps/sigir-kuyrugu-map.jpeg' },
  { name: 'Taşçanta (Aethionema Dumanii)', image: '/src/assets/flowers/tascanta.jpeg', description: flowerDescriptions.tascanta, audio: '/src/assets/audio/tascanta.mp3', mapSrc: '/src/assets/maps/tascanta-map.jpeg' },
  { name: 'Eskisığırkuyruğu (Verbascum Eskisehirensis)', image: '/src/assets/flowers/eskisigirkuyrugu.jpeg', description: flowerDescriptions.eskisigirkuyrugu, audio: '/src/assets/audio/eskisigirkuyrugu.mp3', mapSrc: '/src/assets/maps/eskisigirkuyrugu-map.jpeg' },
];

function App() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [mapSrc, setMapSrc] = useState(map1); // Set the initial state to map1

  useEffect(() => {
    // Preload images
    const preloadImages = () => {
      flowers.forEach(flower => {
        const img = new Image();
        img.src = flower.mapSrc;
      });
    };
    preloadImages();
  }, []);

  const handleFlowerClick = (flower) => {
    setSelectedFlower(flower);
    setMapSrc(flower.mapSrc);
  };

  const handleCloseDetail = () => {
    setSelectedFlower(null);
    setMapSrc(map1); // Reset the map to the initial state
  };

  return (
    <div className="app">
      <div className="map-container">
        <MapComponent mapSrc={mapSrc} />
      </div>
      <div className="flower-list-container">
        {selectedFlower ? (
          <FlowerDetailComponent flower={selectedFlower} onClose={handleCloseDetail} />
        ) : (
          <FlowerListComponent flowers={flowers} onFlowerClick={handleFlowerClick} />
        )}
      </div>
    </div>
  );
}

export default App;