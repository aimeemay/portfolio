import Ember from 'ember';

export default Ember.Route.extend({
    model: function(){
        return [
            {
                title: "Product",
                cover: "assets/cover-01.png",
                number: "01",
                desc: "Description of the final product output, features and achievements."
            },
            {
                title: "Process",
                cover: "assets/cover-02.png",
                number: "02",
                desc: "Documentation of the design process including evalution and reflection."
            },
            {
                title: "Report",
                cover: "assets/cover-03.png",
                number: "03",
                desc: "Scholarly document providing insight into IxD from the findings of Say Hello."
            },
            {
                title: "Past Outcomes",
                cover: "assets/cover-04.png",
                number: "04",
                desc: "Previously assessed and ‘semi-final’ product outputs."
            }
        ]
    }
});
