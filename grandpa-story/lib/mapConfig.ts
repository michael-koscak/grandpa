export const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

// Check if token is available
export const HAS_MAPBOX_TOKEN = Boolean(MAPBOX_TOKEN && MAPBOX_TOKEN.length > 0);

// Custom map style with warm, archival tones
export const MAP_STYLE = 'mapbox://styles/mapbox/light-v11';

// Initial view settings
export const INITIAL_VIEW = {
  europe: {
    center: [12.5, 48.5] as [number, number],
    zoom: 4.5,
    pitch: 0,
    bearing: 0
  },
  usa: {
    center: [-90, 40] as [number, number],
    zoom: 3.5,
    pitch: 0,
    bearing: 0
  },
  world: {
    center: [20, 35] as [number, number],
    zoom: 1.8,
    pitch: 0,
    bearing: 0
  }
};

// Animation settings
export const FLY_TO_OPTIONS = {
  speed: 0.8,
  curve: 1.4,
  essential: true
};

// Marker sizes
export const MARKER_SIZE = {
  default: 28,
  active: 36,
  mini: 20
};
