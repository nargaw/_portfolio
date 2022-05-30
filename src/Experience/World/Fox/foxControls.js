import Controls from "../../Utils/Controls";
import Experience from "../../Experience";

export default class FoxControls extends Controls
{
    constructor()
    {
        super()
        this.experience = new Experience()
        this.fox = this.experience.world.fox
        this.moving = false
    }

    movement(body)
    {
        let x = 0;
        if(this.keyMap['w'] || this.hoverMap['3']  || this.hoverTouch['3']|| this.keyMap['ArrowUp']){
            console.log('forward')
            body.position.z -= 0.005
            // animation.play('walking')
            this.moving = true
        }

        if(this.keyMap['s'] || this.hoverMap['4'] || this.hoverTouch['4'] || this.keyMap['ArrowDown']){
            console.log('backward')
            body.position.z += 0.05
        }

        if(this.keyMap['a'] || this.hoverMap['1'] || this.hoverTouch['1']|| this.keyMap['ArrowLeft']){
            console.log('left')
            // // this.groundBody.quaternion.setFromEuler(Math.PI * 0.5, 0, 0)
            // if(x <= Math.PI){
            //     x = 1
            //     console.log(x)
            //     body.quaternion.y += x
            // }
            
        }

        if(this.keyMap['d'] || this.hoverMap['2'] || this.hoverTouch['2']|| this.keyMap['ArrowRight']){
            console.log('right')
            //body.quaternion.z += 0.1 * Math.PI
        }

        // if(this.moving === false)
        // {
        //     animation.play('idle')
        //     console.log('here')
        // }

        if(this.keyMap[' ']){

        }
    }
}