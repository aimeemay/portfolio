import { isAnimating, finish, timeSpent, animate, stop } from "liquid-fire";

export default function(opts) {
    var _this = this;
    return new Promise(function(resolve) {
        console.log('grow circle')
        // debugger;

        var circle = $(_this.oldElement).find('svg');

        var $old = $(_this.oldElement);
        var $new = $(_this.newElement);

        $new.css({
            zIndex: 7
        })
        $old.css({
            zIndex: 8,
            height: '100%'
        })
        animate(circle, {opacity: 1}, {duration: 200});

        animate(circle, {scaleY: 30, scaleX: 30}, {duration: 600}, 'grow-circle').then(function(){
            $new.css({
                visibility: '',
                opacity: 0,
                zIndex: 9,
                height: '100%'
            })
            animate($new, {opacity: 1}, {duration: 400}, 'fade-in').then(function(){
                console.log('done')


                $old.css({
                    visibility: 'none'
                })

                resolve();
            })
        });
    })




    // return null;

}
