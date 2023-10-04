import React from 'react';
import { useProgress, Html } from '@react-three/drei';
import ClipLoader from "react-spinners/ClipLoader";

export function LoadingScreen() {

    const { progress } = useProgress()


    return (
        <Html center>
            <div>
                <ClipLoader
                    color={'#eedecb'}
                    size={80}
                />
                <br />
                <br />
                LOADING
                <br />
                 {Math.round(progress)}%
            </div>


        </Html >
    );
};