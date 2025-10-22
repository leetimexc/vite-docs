import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import type { Location } from "@remix-run/router";

export const usePrevious = (value: Location) => {
    const ref = useRef<Location>()
    useEffect(() => { ref.current = value }, [value])

    return ref.current
}


const useLocationChange = (action: (location: Location, prevLocation?: Location) => void) => {
    const location = useLocation()
    const prevLocation = usePrevious(location)
    const currentHashRef = useRef<string>();

    useEffect(() => {
        const hashPath = window.location.hash.slice(0, window.location.hash.indexOf('?'))
        if (currentHashRef.current === hashPath) return;
        currentHashRef.current = hashPath;
        action(location, prevLocation)
    }, [location, prevLocation, action]);
}

export default useLocationChange;