import Footer from '../Components/Footer';
import PlantCard from '../Components/PlantCard';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { plants } = useLoaderData();
  // console.log(plants);

  return (
    <div>
      <div className="grid grid-cols-3 gap-12 px-12 py-8">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
