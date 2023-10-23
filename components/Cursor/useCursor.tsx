import { saturate } from "polished";
import { useEffect, useRef } from "react";
import { ICursor, SIZE } from "./constant";


export const useCursor = ({ cursorColor, size }: ICursor) => {
    let cords = { x: 0, y: 0 };

    const cursorSize = SIZE[size] ?? 10;
    const cursorRefs = useRef<NodeListOf<Element>>();

    useEffect(() => {
        cursorRefs.current = document.querySelectorAll(".cursor");

        cursorRefs.current.forEach((ref: any, index: number) => {
            ref.x = 0;
            ref.y = 0;
            ref.style.backgroundColor = saturate(index * 10, cursorColor);
        });

        window.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            cords = { x: clientX, y: clientY };
        });

        document.body.addEventListener('click', () => {
            const ref: any = document.querySelectorAll('.cursor')[0];
            ref.style.opacity = "0.5"
            ref.style.height = '48px';
            ref.style.width = '48px';
            ref.style.left = `${cords.x - 24}px`;
            ref.style.top = `${cords.y - 24}px`;


            setTimeout(() => {
                ref.style.height = '24px';
                ref.style.width = '24px';
                ref.style.left = '12px';
                ref.style.top = '12px';
            }, 300)
        });

        animateCursor();
    }, []);

    const animateCursor = () => {
        let xPos = cords.x;
        let yPos = cords.y;

        cursorRefs.current?.forEach((ref: any, index: number) => {
            ref.style.left = `${xPos - 12}px`;
            ref.style.top = `${yPos - 12}px`;

            ref.style.scale = ((cursorRefs.current?.length ?? 0) - index) / (cursorRefs.current?.length ?? 0);

            ref.x = xPos;
            ref.y = yPos;

            const nextRef: any = cursorRefs.current?.[index + 1] || cursorRefs.current?.[0];

            xPos += (nextRef.x - xPos) * 0.3;
            yPos += (nextRef.y - yPos) * 0.3;
        });

        requestAnimationFrame(animateCursor)
    }

    return {
        cursorSize
    }
}