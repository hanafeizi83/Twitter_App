import { useEffect, useRef } from "react"

export default function useOutsideClick(cb) {
    const ref = useRef();
    useEffect(() => {
        const outSideClick = (e) => {

            if (ref.current && !ref.current.contains(e.target)) {
                cb();
            }
        };
        document.addEventListener('click', outSideClick, true);


        return () => {
            document.removeEventListener('click', outSideClick, true);
        }
    }, [ref]);
    return { ref };
}