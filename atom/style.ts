import { atom } from "recoil";
import { Color } from "../constants/color";

export const MainBackColorAtom = atom({
    key: 'MainBackColor',
    default: `${Color.MAIN}`
});
