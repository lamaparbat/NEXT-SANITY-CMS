"use client";

import { useCursor } from './useCursor';
import './style.css';
import { Size } from './constant';

const Cursor = ({ size }: { size: Size }) => {
    const { cursorSize } = useCursor({ cursorColor: "purple", size });

    return (
        <>
            {
                Array(cursorSize)?.fill(0)?.map((d, i) => {
                    return (
                        <div className='cursor' key={i} > </div>
                    )
                })
            }
        </>
    )
}

export default Cursor;