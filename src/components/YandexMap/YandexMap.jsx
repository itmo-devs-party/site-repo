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
            <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 0 0px 0', height: { xs: "79vh", md: "81vh" }}}>
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
                        defaultGeometry={[59.927288,30.338353]} 
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
                        defaultGeometry={[59.942719,30.296752]} 
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
                        <Placemark
                        defaultGeometry={[60.638921,30.004207]} 
                        properties={{
                        balloonContentBody: 'Ягодное'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.851263,30.376972]} 
                        properties={{
                        balloonContentBody: 'Общежитие № 3'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.936521,30.500014]} 
                        properties={{
                        balloonContentBody: 'Общежитие № 4'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.871053,30.307154]} 
                        properties={{
                        balloonContentBody: 'Межвузовский студенческий городок'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[59.968443,30.305331]} 
                        properties={{
                        balloonContentBody: 'Доходный дом'
                    }}  
                        />
                        <Placemark
                        defaultGeometry={[60.023129,30.387087]} 
                        properties={{
                        balloonContentBody: 'Общежитие № 6 СПбГЛТУ'
                    }}  
                        />

                </Map>
            </Box>
        </div>

  </YMaps>
  </div>
export default YandexMap;