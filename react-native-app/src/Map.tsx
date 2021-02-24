import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

const styles = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0
    },
    map: {
        flex: 1,
    }
});

interface MapProps {
}

export class Map extends Component<MapProps> {
    async componentDidMount() {
        MapboxGL.setTelemetryEnabled(false);
    }

    renderMap() {
        return (
            <MapboxGL.MapView
                style={styles.map}
                styleURL={`http://localhost:3000/styles.json`}
                ref={_map=> {
                    module.exports.map = _map;
                }}
            >
                <MapboxGL.Camera
                    centerCoordinate={[-73.18290092085041, 44.49665172950847]}
                    zoomLevel={13}
                />
            </MapboxGL.MapView>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderMap()}
            </View>
        );
    }
}
