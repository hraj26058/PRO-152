AFRAME.registerComponent("car-rotation-reader",{
    schema:{
      speedOfRotation:{
        type:'number',
        default:0
      }
    },
    tick: function () {
      this.data.speedOfRotation=this.el.getAttribute("rotation");
        var carRotation = this.data.speedOfRotation;
        carRotation.y+=-0.5;
      this.el.setAttribute("rotation",carRotation);
    }

  })