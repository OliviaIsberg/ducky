import ShowCarousel from '../components/Carousel';
import CategoriesCard from '../components/Cards/CategoriesCard';
import StartPageDesription from '../components/StartPageDescription';

function StartPage() {
  return (
    <div>
      <StartPageDesription />
      <ShowCarousel />
      <CategoriesCard />
    </div>
  );
}

export default StartPage;
