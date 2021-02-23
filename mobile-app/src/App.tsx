import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('...');

export const App = (): JSX.Element | null => (
    <MobileApp />
);

const packName = 'offline-test-pack';

const MobileApp = () => {
    const peekAtDownload = async () => {
        const data = await MapboxGL.offlineManager.getPack(packName);
        console.log(data);
    }

    const downloadRegion = async () => {
        const zoom = 13;
        const bounds = [[-73.14994193680582, 44.5285092252814], [-73.21585990491724, 44.46474619150939]];

        await MapboxGL.offlineManager.createPack({
            name: packName,
            styleURL: `http://localhost:3000/styles.json`,
            minZoom: zoom,
            maxZoom: zoom,
            bounds: bounds as any,
          }, data => {
              console.log('progress', data)
          }, err => {
              console.log('error', err);
          });

    }

    const deleteDownload = async () => {
        console.log('deleting')
        await MapboxGL.offlineManager.deletePack(packName);
        console.log('done deleting')
    }

    const resumeDownload = async () => {
        console.log('resuming')
        const pack = await MapboxGL.offlineManager.getPack(packName);
        await pack?.resume();
        console.log('done resuming')
    }

    const invalidateDownload = async () => {
        console.log('invalidating', (MapboxGL.offlineManager as any).invalidatePack)
        await (MapboxGL.offlineManager as any).invalidatePack(packName);
        console.log('done invalidating')
    }

    const clearAmbient = async () => {
        console.log('clearAmbient')
        await MapboxGL.offlineManager.clearAmbientCache();
        console.log('done clearAmbient')
    }

    const resetDatabase = async () => {
        console.log('resetDatabase')
        await MapboxGL.offlineManager.resetDatabase();
        console.log('done resetDatabase')
    }

    return (
        <View style={styles.container}>
            <Button title="Reset" onPress={resetDatabase} />
            <Button title="Download" onPress={downloadRegion} />
            <Button title="Peek at Download" onPress={peekAtDownload} />
            <Button title="Delete" onPress={deleteDownload} />
            <Button title="Invalidate" onPress={invalidateDownload} />
            <Button title="Resume" onPress={resumeDownload} />
            <Button title="Clear Ambient" onPress={clearAmbient} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 24,
        height: 24
    }
});
