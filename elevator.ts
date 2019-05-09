export default class Elevator{

    _floorOn: number
    readonly _floors: number
    _doorSt: boolean

    constructor(elevatorPosition: number, floors: number, doorStatus: boolean){
        this._floorOn = elevatorPosition
        this._floors = floors
        this._doorSt = doorStatus
    }

    get floorOn(){
        return this._floorOn
    }

    set floorOn(piso){
        this._floorOn = piso
    }

    get floors(){
        return this._floors
    }

    get doorSt(){
        return this._doorSt
    }

    set doorSt(act){
        this._doorSt = act
    }

    openDoor(){
        this._doorSt = true
        console.log(`La puerta ha sido abierta`)
    }

    closeDoor(){
        this._doorSt = false
        console.log(`La puerta ha sido cerrada`)
    }

    private goUp(floor){
        this._floorOn = floor
        console.log(`Esta en el piso ${this.floorOn}`)
    }

    private goDown(floor){
        this._floorOn = floor
        console.log(`Esta en el piso ${this._floorOn}`)
    }

    goTo(floor){
        if(this._doorSt){
            if(this.floors < floor)
            {
                if (this._floorOn < floor) {
                    this.goDown(floor)
                }
                else
                {
                    this.goUp(floor)
                }
            }
            else
            {
                console.log('Piso no valido')
            }
        }
        else
        {
            console.log('No esta cerrada la puerta')
        }
    }
}