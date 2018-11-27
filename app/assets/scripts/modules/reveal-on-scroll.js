import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll{
    constructor(elements, offset){
        this.itemsToReveal = elements;
        this.offset = offset
        this.hideInitialy();
        this.createWaypoints();
    }

    hideInitialy(){
        this.itemsToReveal.addClass('reveal-item');
    }

    createWaypoints(){
        var that = this;
        this.itemsToReveal.each(function(){
            var current = this;
            new Waypoint({
                element: current,
                handler: function(){
                    $(current).addClass('reveal-item--is-visible');
                },
                offset: that.offset
            })
        });
    }
}

export default RevealOnScroll;