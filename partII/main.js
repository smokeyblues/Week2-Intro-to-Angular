angular.module('partII', []);

angular
    .module('partII')
    .controller('partIIController', partII)

function partII () {
    var partIIctrl = this;
    
    partIIctrl.areYouSure = function(link, section) {
        var sure = confirm("Are you want to navigate to " + link);
        
        if (!sure) {
            event.preventDefault();
            partIIctrl.removeLink(section);
        }        
    }
    
    partIIctrl.removeLink = function(section) {
        partIIctrl.sections[section].showLink = false;

    }
    
    
    partIIctrl.sections = [
        {
            heading : 'The First Section',
            content : [
                "This is your world. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned. Talk to trees, look at the birds. Whatever it takes. This piece of canvas is your world. With something so strong, a little bit can go a long way. Here's something that's fun.",

"There is immense joy in just watching - watching all the little creatures in nature. Just let this happen. We just let this flow right out of our minds.",

"Trees grow however makes them happy. This is your creation - and it's just as unique and special as you are. I thought today we would do a happy little picture. Everyone needs a friend. Friends are the most valuable things in the world. Didn't you know you had that much power? You can move mountains. You can do anything.",

"Be brave. We don't have to be concerned about it. We just have to let it fall where it will. Happy painting, God bless. A fan brush is a fantastic piece of equipment. Use it. Make friends with it. Let's put some happy little bushes on the other side now."
            ],
            link : 'http://i.imgur.com/F8itsh6.png',
            showLink : true
        },
        {
            heading : 'The Second Section',
            content : [
                "Let's give him a friend too. Everybody needs a friend. If what you're doing doesn't make you happy - you're doing the wrong thing. It is a lot of fun. You have to make those little noises or it won't work. I'm sort of a softy, I couldn't shoot Bambi except with a camera.",

"You've got to learn to fight the temptation to resist these things. Just let them happen. Just let your mind wander and enjoy. This should make you happy. Let that brush dance around there and play. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. Mix your color marbly don't mix it dead.",

"If there's two big trees invariably sooner or later there's gonna be a little tree. A happy cloud. With practice comes confidence."
            ],
            link : 'https://s-media-cache-ak0.pinimg.com/originals/81/80/b1/8180b1fcb39cc8fafb1c20f5623f0fd4.jpg',
            showLink : true
        },
        {
            heading : 'The Third Section',
            content : [
                "Be careful. You can always add more - but you can't take it away. We have all at one time or another mixed some mud. Didn't you know you had that much power? You can move mountains. You can do anything. You can get away with a lot.",

"See how easy it is to create a little tree right in your world. You want your tree to have some character. Make it special. There comes a nice little fluffer. The light is your friend. Preserve it."
            ],
            link : 'https://s-media-cache-ak0.pinimg.com/originals/85/65/6e/85656e7576a0b995372f4926f098f866.jpg',
            showLink : true
        },
    ];
    
    console.log("controller working")
}