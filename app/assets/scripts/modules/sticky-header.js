import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
    constructor(){
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.large-hero__title');
        this.pageSections = $('.page-section');
        this.headerLinks = $('.primary-nav a');
        this.createHeaderWaypoint();
        this.createPageSectionsWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint(){
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: (diretion)=>{
                if(diretion == 'down'){
                    this.siteHeader.addClass('site-header--dark');
                } else{
                    this.siteHeader.removeClass('site-header--dark');
                }
            }
        })
    }

    createPageSectionsWaypoints(){
        let that = this;
        this.pageSections.each(function(){
            let current = this;
            new Waypoint({
                element: current,
                handler: function(direction){
                    if(direction == 'down'){
                        let match = current.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(match).addClass("is-current-link");
                    }   
                },
                offset: "9%"
            })

            new Waypoint({
                element: current,
                handler: function(direction){
                    if(direction == 'up'){
                        let match = current.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(match).addClass("is-current-link");
                    }   
                },
                offset: "-40%"
            })
        })
    }
}

export default StickyHeader;