import Boxer from '../assets/images/Boxer.jfif';
import GermanShepherd from '../assets/images/GermanShepherd.jfif';
import GoldenRetriever from '../assets/images/GoldenRetriever.jfif';
import Labrador from '../assets/images/Labrador.jfif';
import Rajapalayam from '../assets/images/Rajapalayam.jfif';
import Rottweilers from '../assets/images/Rottweilers.jfif';
import TheGreatDane from '../assets/images/TheGreatDane.jfif';
import TheShihTzus from '../assets/images/TheShihTzus.jfif';
function Gallery() {
  const dogBreeds = [
    { name: 'Boxer', img: Boxer },
    { name: 'German Shepherd', img: GermanShepherd },
    { name: 'Golden Retriever', img: GoldenRetriever },
    { name: 'Labrador', img: Labrador },
    { name: 'Rajapalayam', img: Rajapalayam },
    { name: 'Rottweilers', img: Rottweilers },
    { name: 'TheGreatDane', img:TheGreatDane },
    { name: 'TheShihTzus', img: TheShihTzus }
   
  ];

  return (
    <div className='bg'>
       <div className="gallery-container">
      {dogBreeds.map((breed, index) => (
        <div key={index} className="card">
          <img src={breed.img} alt={breed.name} className="card-image" />
          <h1 className="breed-name">{breed.name}</h1>
        </div>
      ))}
    </div>
    </div>
   
  );
}

export default Gallery;
