import Experience from "../../Experience";

export default class FoxState
{
    constructor()
    {
        this.experience = new Experience()
    }

    setState()
    {
        //this.currentState = state.walking
        this.state = {
            idle: this.animation.play('idle'),
            walking: this.animation.play('walking'),
            running: this.animiation.play('running')
        }
    }
}