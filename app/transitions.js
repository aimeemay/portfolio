import Resolver from 'ember-resolver';

var duration = 200;

export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('overview'),
    this.use('myAnimation')

    // this.fromRoute('overview'),
    // this.toRoute('index'),
    // this.use('reverseTransition')



    // this.use('toLeft'),
  //   this.use('explode',{
  //     pickOld: 'title',
  //     use: ['toUp', {duration}]
  //   }, {
  //     pickNew: 'title',
  //     use: ['toDown', {duration}]
  // })
    //   this.use('explode', {
    //       pick: "title",
    //       use: ['fly-to', {duration, easing: 'spring'}]
    //   })
  );
};
