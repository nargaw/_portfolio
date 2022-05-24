import Controls from "../../Utils/Controls";

export default class FoxControls extends Controls
{
    constructor()
    {
        super()
    }

    movement(body)
    {
        if(this.keyMap['w'] || this.hoverMap['3']  || this.hoverTouch['3']|| this.keyMap['ArrowUp']){
            //console.log('forward')
            body.position.z -= 0.02
        }

        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown']){
            //console.log('backward')
            body.position.z += 0.02
        }

        if(this.keyMap['a'] || this.hoverMap['1'] || this.hoverTouch['1']|| this.keyMap['ArrowLeft']){
            //console.log('left')
            //body.quaternion.z -= 0.1 * Math.PI
        }

        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight']){
            //console.log('right')
            //body.quaternion.z += 0.1 * Math.PI
        }
    }
}