AFRAME.registerComponent('controlterr', {
    schema  : {speedRotation: {type:'number' ,default:0} },
    init : function(){
        window.addEventListener('keydown', e =>{
            if( e.key === 'ArrowRight'){
                this.data.speedRotation += 0.06
            }
            else if( e.key === 'ArrowLeft'){
                this.data.speedRotation -= 0.06
            }
        })
    },
    tick: function(){
        mapRotation = this.el.getAttribute('rotation')
        mapRotation.y += this.data.speedRotation 
        this.el.setAttribute('rotation', {
            x: mapRotation.x, y:mapRotation.y , z: mapRotation.z
        })
        
    },
    
})
AFRAME.registerComponent('planerot', {
    schema : {speedRotation : {type:'number', default : 0} },
    init : function(){
        window.addEventListener("keydown", e=>{
            this.data.speedRotation = this.el.getAttribute('rotation')
            var planeRotation = this.data.speedRotation
            if(e === 'ArrowUp'){
                if(planeRotation.z <= 20){
                    planeRotation.z += 0.5
                    this.el.setAttribute('rotation', planeRotation)
                }
            }
            if(e === 'ArrowDown'){
                if(planeRotation.z >= -20){
                    planeRotation.z -= 0.5
                    this.el.setAttribute('rotation', planeRotation)
                }
            }
            if(e === 'ArrowRight'){
                if(planeRotation.x <= 50){
                    planeRotation.x += 0.5
                    this.el.setAttribute('rotation', planeRotation)
                }
            }
            if(e === 'ArrowLeft'){
                if(planeRotation.x >= -50){
                    planeRotation.x -= 0.5
                    this.el.setAttribute('rotation', planeRotation)
                }
            }
        })
    }
})