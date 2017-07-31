(function() {

  angular
    .module('reddit')
    .controller('PostListController', PostListController)

  function PostListController() {
    const vm = this;

    vm.$onInit = function() {

      console.log('hello from post-list');
      vm.time = new Date()


      vm.posts = [{
          title: 'The Matrix',
          author: 'Thomas Anderson',
          description: "Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.",
          image: 'https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg',
          count: 8,
          createdAt: '2017-07-24'
        },
        {
          title: 'Pulp Fiction',
          author: 'Vincent Vega',
          description: 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).',
          image: 'https://cdn.miramax.com/media/assets/Pulp-Fiction1.png',
          count: 11,
          createdAt: '2017-07-12'
        },
        {
          title: 'The Bourne Identity',
          author: 'Jason Bourne',
          description: "The story of a man (Matt Damon), salvaged, near death, from the ocean by an Italian fishing boat. When he recuperates, the man suffers from total amnesia, without identity or background... except for a range of extraordinary talents in fighting, linguistic skills and self-defense that speak of a dangerous past. He sets out on a desperate search-assisted by the initially rebellious Marie (Franka Potente) - to discover who he really is, and why he's being lethally pursued by assassins.",
          image: 'https://resizing.flixster.com/W8RFOqAkPmxKLozoue82f009rAA=/206x305/v1.bTsxMTE3MTYxMDtqOzE3NDU0OzEyMDA7ODAwOzEyMDA',
          count: 2,
          createdAt: '2017-07-18'
        },
        {
          title: 'Rogue One',
          author: 'Jyn Erso',
          description: "Former scientist Galen Erso lives on a farm with his wife and young daughter, Jyn. His peaceful existence comes crashing down when the evil Orson Krennic takes him away from his beloved family. Many years later, Galen becomes the Empire's lead engineer for the most powerful weapon in the galaxy, the Death Star. Knowing that her father holds the key to its destruction, Jyn joins forces with a spy and other resistance fighters to steal the space station's plans for the Rebel Alliance.",
          image: 'http://cdn3-www.comingsoon.net/assets/uploads/gallery/star-wars-rogue-one/cwq_ccexuauhczm.jpg',
          count: 5,
          createdAt: '2017-06-19'
        },
        {
          title: 'Guardians of the Galaxy',
          author: 'Peter Quill',
          description: "Brash space adventurer Peter Quill (Chris Pratt) finds himself the quarry of relentless bounty hunters after he steals an orb coveted by Ronan, a powerful villain. To evade Ronan, Quill is forced into an uneasy truce with four disparate misfits: gun-toting Rocket Raccoon, treelike-humanoid Groot, enigmatic Gamora, and vengeance-driven Drax the Destroyer. But when he discovers the orb's true power and the cosmic threat it poses, Quill must rally his ragtag group to save the universe.",
          image: 'https://images.redbox.com/Images/EPC/Kiosk/7402.jpg',
          count: 3,
          createdAt: '2017-05-12'
        },
        {
          title: 'Back to the Future',
          author: 'Marty McFly',
          description: "In this 1980s sci-fi classic, small-town California teen Marty McFly (Michael J. Fox) is thrown back into the '50s when an experiment by his eccentric scientist friend Doc Brown (Christopher Lloyd) goes awry. Traveling through time in a modified DeLorean car, Marty encounters young versions of his parents (Crispin Glover, Lea Thompson), and must make sure that they fall in love or he'll cease to exist. Even more dauntingly, Marty has to return to his own time and save the life of Doc Brown.",
          image: 'http://static.rogerebert.com/uploads/movie/movie_poster/back-to-the-future-1985/large_pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg',
          count: 8,
          createdAt: '2017-07-23'
        }
      ]
    }
  }

})()
