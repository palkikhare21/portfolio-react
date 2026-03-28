import React, { useEffect, useRef } from "react";
import "./styles/Cursor.css";

const Cursor = () => {
    const curRef = useRef(null);
    const ringRef = useRef(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animCursor = () => {
            if (curRef.current) {
                curRef.current.style.left = `${mousePos.current.x}px`;
                curRef.current.style.top = `${mousePos.current.y}px`;
            }
            if (ringRef.current) {
                ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.14;
                ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.14;
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }
            requestAnimationFrame(animCursor);
        };

        const handleMouseEnter = () => {
            if (curRef.current) curRef.current.style.transform = 'translate(-50%,-50%) scale(2)';
            if (ringRef.current) {
                ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)';
                ringRef.current.style.borderColor = 'rgba(0,229,255,0.8)';
            }
        };

        const handleMouseLeave = () => {
            if (curRef.current) curRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
            if (ringRef.current) {
                ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
                ringRef.current.style.borderColor = 'rgba(0,229,255,0.5)';
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        const interactables = document.querySelectorAll('a, button, .skill-pill, .proj-card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        const frameId = requestAnimationFrame(animCursor);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <>
            <div className="cursor" ref={curRef}></div>
            <div className="cursor-ring" ref={ringRef}></div>
        </>
    );
};

export default Cursor;
