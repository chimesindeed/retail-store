import {useState, useEffect} from 'react'


export const useDaysPassed = () => {

  const [color, setColor] = useState('loading...');
  
  const daysPassed = () => {
    const startingDate = new Date('October 25, 2020');
    const dt1 = startingDate;
    const dt2 = new Date();

    const dPassed = Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
    );
    const placeInCycle = (dPassed / 7) % 5;
    if (placeInCycle >= 0 && placeInCycle < 1) {
      setColor('Pink');
    } else if (placeInCycle >= 1 && placeInCycle < 2) {
      setColor('Yellow');
    } else if (placeInCycle >= 2 && placeInCycle < 3) {
      setColor('Green');
    } else if (placeInCycle >= 3 && placeInCycle < 4) {
      setColor('Blue');
    } else if (placeInCycle >= 4 && placeInCycle < 5) {
      setColor('White');
    }
    console.log(color);
  };

  useEffect(() => {
    daysPassed();
  },[])
  return {color}
}
