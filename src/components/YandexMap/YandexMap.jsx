import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { Box } from '@mui/material';

const YandexMap = () =>
<div className='wrapper'>
<YMaps query={{
  ns: 'use-load-option',
  load: 'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon'
}}>
  <div style={{width: '100%', height: 'auto' ,position: 'relative', margin: '0px 0 0 0' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 0 0px 0', height: { xs:500, md: 700 }}}>
                      <Map width='100%' height='auto' defaultState={{
                      center: [55.75, 37.57],
                      zoom: 9,
                      controls: ['zoomControl', 'fullscreenControl']
                    }}>
                        <Placemark
                        defaultGeometry={[55.75, 37.57]} 
                        properties={{
                        balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[55.79, 37.59]} 
                        properties={{
                        balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[55.71, 37.50]} 
                        properties={{
                        balloonContentBody: 'This is balloon loaded by the Yandex.Maps API module system'
                    }}  
                        />
                </Map>
            </Box>
        </div>

  </YMaps>
  </div>
export default YandexMap;