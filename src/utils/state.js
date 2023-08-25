import { proxy } from 'valtio';

const state = proxy({
    isHere: true,
});

export default state;