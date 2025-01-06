
import { atom } from 'nanostores';

export const cartIsOpen = atom<boolean>(false);
export const cart = atom<any[]>([]);
