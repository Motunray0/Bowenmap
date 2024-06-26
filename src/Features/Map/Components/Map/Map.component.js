import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { useAppContext } from '../../../../Services/Hooks/useAppContext';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import axios from 'axios'

const GOOGLE_MAPS_APIKEY = 'AIzaSyBuMOQ-CBlb_jx33Y4IYXJcEpg5xojmUZE';

const MapComponent = () => {
    const [region, setRegion] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [loading, setLoading] = useState(true)
    const [route, setRoute] = useState(null);
    const mapRef = useRef(null);

    const { destination, setDestination } = useAppContext()

    useEffect(() => {
        const getCurrentLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                console.warn('Permission to access location was denied');
                return;
            }
    
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
                timeout: 15000,
                maximumAge: 10000,
            });

            const { latitude, longitude } = location.coords;

            const newRegion = {
                latitude,
                longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            };

            setRegion(newRegion);
            setCurrentLocation({ latitude, longitude });
            setLoading(false)
        };
    
        getCurrentLocation();

    }, []);

    const fetchDirections = async (origin, destination) => {
        const {longitude, latitude} = destination.coordinates

        const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${latitude},${longitude}&key=${GOOGLE_MAPS_APIKEY}`);

        console.log(response)

        const points = decode(response.data.routes[0].overview_polyline.points);
        const coords = points.map(point => ({
            latitude: point[0],
            longitude: point[1],
        }));

        setRoute(coords);
    };
    
    const decode = (t, e = 5) => {
        let points = []
        for (let step of t.split`:`) {
            let pos = 0
            let dlat = 0
            let dlng = 0
            let index = 0

            while (index < step.length) {
                let byte, res = 0, shift = 0

                do byte = step.charCodeAt(index++) - 63, res |= (31 & byte) << shift, shift += 5
                while (byte >= 32)
                
                dlat += res & 1 ? ~(res >> 1) : res >> 1
                shift = res = 0
                
                do byte = step.charCodeAt(index++) - 63, res |= (31 & byte) << shift, shift += 5
                while (byte >= 32)
                
                dlng += res & 1 ? ~(res >> 1) : res >> 1

                points.push([dlat / 1e5, dlng / 1e5])
            }
        }
        return points
    }
    
    const handleLocationPress = (location) => {
        setDestination(location.coordinates);
        if (currentLocation) {
            fetchDirections(currentLocation, location.coordinates);
        }
    };
    

    return (
        <View style={styles.container}>
            {loading && (
                <ActivityIndicator
                    size="large"
                    color="#0000ff"
                    style={styles.loader}
                />
            )}
            {region && (
                <MapView
                    ref={mapRef}
                    style={styles.map}
                    initialRegion={region}
                    showsUserLocation
                    followUserLocation
                >
                    {currentLocation && destination && (
                        <MapViewDirections
                            origin={currentLocation}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="hotpink"
                            onReady={(result) => {
                                mapRef.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                    top: 20,
                                },
                                });
                            }}
                        />
                    )}
                    {destination && (
                        <Marker coordinate={destination} title="Destination" />
                    )}
                    {/* {route && (
                        <Polyline
                            coordinates={route}
                            strokeColor="hotpink"
                            strokeWidth={3}
                        />
                    )} */}
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
    map: {
        width: '100%',
        height: '100%'
    },
});

export default MapComponent;
