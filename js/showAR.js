window.onload = function() {
    document.querySelector(".say-hi-button")
    let flag = false;
    document.addEventListener("click", function() {
    // here you can change also a-scene or a-entity properties, like changing your 3D model source, size, position..
    // or you can just open links, trigger actions...
    if (flag === false){
        document.querySelector("a-text").setAttribute(`value`, `Oi humanos !`)
        flag = true;
    }
    else {
        document.querySelector("a-text").setAttribute(`value`, ``)
        flag = false;
    }
    });
    
    window.addEventListener('camera-init', (data) => {
        console.log('camera-init', data);
    })

    window.addEventListener('camera-error', (error) => {
    console.log('camera-error', error);
        })
};

AFRAME.registerComponent('registerevents', {
    init: function () {
        var marker = this.el;

        marker.addEventListener('markerFound', function() {
            console.log('markerFound', marker.id);
            // TODO: Add your own code here to react to the marker being found.
        });

        marker.addEventListener('markerLost', function() {
            console.log('markerLost', marker.id);
            // TODO: Add your own code here to react to the marker being lost.
        });
    }
});