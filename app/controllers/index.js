import Ember from 'ember';

export default Ember.Controller.extend({
    setup: function(){
        Ember.run.scheduleOnce('afterRender', this, function(){
            // debugger;
            var video = document.getElementById("bgvid");
            video.play();
            video.onended = function(){
                // debugger
                console.log('video replay');
                video.load();
                video.play();
            }
        });
    }.on('init')
});
