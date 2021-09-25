import React, { useRef, useEffect } from 'react';
import KakaoMapService from 'services/KakaoMapService'

function App() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapService = useRef<KakaoMapService>()

  useEffect(() => {
    mapService.current = new KakaoMapService(mapContainer.current, 33.450701, 126.570667)
    mapService.current.loadMap()
  }, [])

  return (
    <div style={{ width: '800px', height: '700px' }} ref={mapContainer} />
  );
}

export default App;
