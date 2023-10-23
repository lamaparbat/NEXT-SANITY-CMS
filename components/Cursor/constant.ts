
export type Size = 'sm' | 'md' | 'lg' | 'xl';

export interface ICursor {
    cursorColor: string,
    size: Size
}

export const SIZE = Object.freeze({
    sm: 10,
    md: 20,
    lg: 30,
    xl: 40
})
