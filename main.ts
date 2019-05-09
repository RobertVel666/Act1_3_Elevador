import Elevator from './elevator'

let elev1 = new Elevator(1,11,false);

elev1.openDoor()
elev1.goTo(6)

console.log(elev1.floorOn)