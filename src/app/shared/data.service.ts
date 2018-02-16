import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const todos = [
      {
        id: 1, title: 'Lorem ipsum dolor sit.', discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis doloribus ratione architecto animi sit vel, molestias rerum. Nesciunt odio, nulla dignissimos aspernatur accusantium est architecto quae fugit possimus perferendis enim a voluptatum voluptatem amet laborum ipsa? Eius, nulla est ipsum, placeat hic nisi ducimus ipsa sint reprehenderit saepe consequatur tempora voluptas mollitia maiores eum rerum repellendus! Magnam iure consequuntur nobis et expedita inventore minima sunt voluptatibus perferendis ullam autem ea facilis, ipsam ratione aliquam incidunt? Velit ex officiis totam.',
        date: '02/18/2018', completed: true
      },
      {
        id: 2, title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem neque quo ratione veritatis maiores quia placeat rem sunt dignissimos veniam.',
        date: '03/25/2018', completed: false
      },
      {
        id: 3, title: 'Lorem, ipsum dolor.', discription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum debitis eius voluptatem minima tenetur nemo architecto aut atque facere iusto quibusdam tempore vero dolore, praesentium nostrum, non cum dolorum magnam illo! Beatae soluta non tenetur hic temporibus iste vitae iure?',
        date: '12/25/2017', completed: false
      }
    ];

    return { todos };
  }

}