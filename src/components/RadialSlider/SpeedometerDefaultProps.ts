import { Colors } from '../../theme';

export const defaultSpeedoMeterProps = {
  radius: 100,
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  title: '',
  unit: 'MB/S',
  markerLineSize: 50,
  sliderWidth: 18,
  sliderTrackColor: Colors.grey,
  lineColor: Colors.grey,
  lineSpace: 3,
  linearGradient: [
    { stop: '0%', color: Colors.skyBlue },
    { stop: '100%', color: Colors.darkBlue },
  ],
  onChange: (_v: number) => {},
  onComplete: (_v: number) => {},
  openingRadian: Math.PI / 3,
  disabled: false,
  isHideSlider: false,
  isHideTitle: false,
  isHideSubtitle: false,
  isHideValue: false,
  isHideTailText: false,
  isHideLines: false,
  isHideMarkerLine: false,
  isHideCenterContent: false,
  fixedMarker: false,
  markerCircleSize: 15,
  markerCircleColor: Colors.grey,
  markerPositionY: 20,
  markerPositionX: 20,
  needleBackgroundColor: 'purple',
  needleColor: '#175BAD',
  needleBorderWidth: 1.5,
  needleHeight: 30,
  variant: 'default',
  markerValueInterval: 10,
  markerValueColor: Colors.darkCharcoal,
  strokeLinecap: 'butt',
};
