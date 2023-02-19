import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapYandex = () => {

    const defaultState = {
    center: [59.935635, 30.335167,],
    zoom: 15,
    controls: []
  };
  
     return (
         <>
            <div className="map-block z-depth-1">
                <YMaps>
                  <Map defaultState={defaultState} width="100vw" height="600px">
                    <Placemark geometry={[59.935635, 30.335167]} />
                  </Map>
                </YMaps>
            </div>
         </>
)};

export default MapYandex;
