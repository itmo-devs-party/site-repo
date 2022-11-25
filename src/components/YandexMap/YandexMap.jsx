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
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 0 0px 0', height: { xs:1000, md: 1000 }}}>
                      <Map width='100%' height='auto' defaultState={{
                      center: [59.9490959,30.3085916],
                      zoom: 12,
                      controls: ['zoomControl', 'fullscreenControl']
                    }}>
                        <Placemark
                        defaultGeometry={[59.956386, 30.309993]} 
                        properties={{
                        balloonContentBody: ' Университет ИТМО на Кронверксом 49'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.9269688,30.2679992]} 
                        properties={{
                          balloonContentBody: ' Университет ИТМО на Ломоносова 9'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.9728756,30.299376]} 
                        properties={{
                        balloonContentBody: ' Вяземский пер., 5/7'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.9423948,30.2947174]} 
                        properties={{
                        balloonContentBody: 'Биржевая линия, 4'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.92948,30.3128744]} 
                        properties={{
                        balloonContentBody: 'пер. Гривцова, 14-16'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.9462409,30.340817]} 
                        properties={{
                        balloonContentBody: 'ул. Чайковского, 11/2'
                    }}  
                        />

                </Map>
            </Box>
        </div>

  </YMaps>
  </div>
export default YandexMap;