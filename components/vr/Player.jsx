
import { useXR } from '@react-three/xr'
export function Player({ vrMode, setVrMode }) {

    const { player } = useXR();

    if (vrMode === 0) {
        player.position.x = 0
        player.position.y = 0
        player.position.z = 0

    }
    else if (vrMode === 1) {
        player.position.x = 1
        player.position.y = 0.4
        player.position.z = 1.2

    }
    else {
        player.position.x = -4
        player.position.y = 0.4
        player.position.z = -0.71
    }
    return (null)
}