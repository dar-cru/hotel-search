import Header from './components/Header';
import HotelsList from './containers/HotelsList';

const App = () => {
  return (
    <div
      style={{
        width: '70%',
        margin: '0 auto'
      }}
    >
      <Header />
      <HotelsList />
    </div>
  );
};

export default App;
