import {database} from './firebase';
import {Score} from './interface';

const ref = database.ref('kdscore');

export const pushData = (json: Score) => ref.push(json);
