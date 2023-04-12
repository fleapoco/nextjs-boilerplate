import { errorHandler } from '@utils/errorHandler';
import { useState } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng, getZipCode } from 'use-places-autocomplete';

const useLocation = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue
  } = usePlacesAutocomplete({ callbackName: 'initMap', debounce: 500, cache: 24 * 60 * 60 });

  const [latlng, setLatLng] = useState({ lat: 0, lng: 0 });

  const getCurrentLocation = async () => {
    try {
      if (!navigator.geolocation) throw new Error('Geolocation is not supported by this browser.');
      const postion = (await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      })) as GeolocationPosition;
      console.log(postion);
      setLatLng({ lat: postion.coords.latitude, lng: postion.coords.longitude });
      return { lat: postion.coords.latitude, lng: postion.coords.longitude };
    } catch (error) {
      showGetCurrentLocationError(error);
    }
    return { lat: -1, lng: -1 };
  };

  const showGetCurrentLocationError = (error: any) => {
    let msg = error.message;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        msg = 'Please allow location access.';
        break;
      case error.POSITION_UNAVAILABLE:
        msg = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        msg = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        msg = 'An unknown error occurred.';
        break;
    }
    errorHandler({ msg, showError: true });
    setLatLng({ lat: -1, lng: -1 });
  };

  const getZipCodeFromAddress = async (address: string) => {
    const results = await getGeocode({ address });
    const zipCode = getZipCode(results[0], false);
    return zipCode;
  };

  const getLatLngromAddress = async (address: string) => {
    const results = await getGeocode({ address });
    const latlng = getLatLng(results[0]);
    setLatLng(latlng);
    return latlng;
  };

  return {
    getCurrentLocation,
    latlng,
    autoCompleteReady: ready,
    searchValue: value,
    setLocationSearchValue: setValue,
    searchResults: data,
    getZipCodeFromAddress,
    getLatLngromAddress
  };
};

export default useLocation;
