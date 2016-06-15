import Ember from 'ember';



var content = {};

content['01'] = {
    title: "Product"
}

content['02'] = {
    title: "Product"
}

content['03'] = {
    title: "Product"
}

content['04'] = {
    title: "Product"
}


export default Ember.Route.extend({
    model: function(id) {
        if (id.item_id in content)
            return content[id.item_id];
        return null;
    }
});
