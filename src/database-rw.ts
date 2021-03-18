import {database} from './firebase';
import {Score} from './interface';

const ref = database.ref('kdscore');

export const pushData = (json: Score) => ref.push(json);

export let data = {};
ref.on('value', snapshot => {
  data = snapshot.val();
});

export const getKills = (user: string) => {
  let result = {};
  ref
    .orderByChild('attacker')
    .startAt(user)
    .endAt(user)
    .once('value', snapshot => {
      result = snapshot.val();
    });
  return Object.keys(result).length;
};
