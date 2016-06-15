import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function(opts) {

    var _this = this;
    return new Promise(function(resolve) {
        var $circle = $(_this.newElement).find('svg');

        var $old = $(_this.oldElement);
        var $new = $(_this.newElement);

        var video = $new.find('video')[0];
        video.play();
        video.volume = 0;

        animate($circle, {scaleY: 30, scaleX: 30}, {duration: 0}, 'grow-circle')

        $circle.css({
            opacity: 1
        })

        $new.css({
            zIndex: 7,
            height: '100%',
            opacity: 1,
            visibility: ''
        })

        $old.css({
            zIndex: 8,
            height: '100%',
            opacity: 1
        })

        setTimeout(function() {
            animate($old, {opacity: 0}, {duration: 400}).then(function(){
                $old.css({ visibility: 'none'});
                setTimeout(function() {
                    animate($circle, {opacity: 0}, {duration: 400})
                }, 200);
                animate($circle, {scaleY: 1, scaleX: 1}, {duration: 600}).then(function() {
                    resolve();
                })
            })
        }, 30 )

    })
}
