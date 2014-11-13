slideStream = new Meteor.Stream('slide');

if (Meteor.isClient) {
    Template.reveal.rendered = function() {
        Reveal.initialize();

        Reveal.addEventListener('slidechanged', function( event ) { slideStream.emit('slide', event); });
        slideStream.on('slide', function(slide) { Reveal.slide(slide.indexh, slide.indexv, slide.indexf); });

    };
}