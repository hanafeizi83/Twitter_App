import { useEffect, useRef } from "react"

export default function useOutsideClick(cb) {
    const ref = useRef();
    useEffect(() => {
        const outSideClick = (e) => {

            if (ref.current && !ref.current.contains(e.target)) {
                cb();
            }
        };
        document.addEventListener('mousedown', outSideClick, true);


        return () => {
            document.removeEventListener('mousedown', outSideClick, true);
        }
    }, [ref]);
    return { ref };
}