import { useState, useEffect } from 'react'
import './App.css';
import axios, { AxiosError } from 'axios';
import { AppType } from './AppType';
import { Nftcard } from './components/card/Nftcard';
import { Toaster, toast } from 'react-hot-toast';
function App() {

  const [productslist, setProductlist] = useState<AppType[]>([]);
  const [productCategory, setProductCategory] = useState<string>('');

  const getNFTProductsList = async () => {
    try {
      const response = await axios.get('https://mehulnodejstest.herokuapp.com/');
      setProductlist(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      toast.error(axiosError.message);
      console.log(axiosError.message);
    }

  }
  useEffect(() => {
    getNFTProductsList()
  }, [])



  const filterVideos = (nftCardList: AppType[]) => {
    return (category: string) => {
      const filterMovies = nftCardList.filter((nftCards) =>
        category === 'Clear All'
          ? nftCards
          : category !== "CLEAR_ALL"
            ? nftCards.category.includes(category)
            : nftCards
      );
      return filterMovies;
    };
  };


  return (
    <main>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <h1>Live Space</h1>

      <div className='subheading'>
        <i className='bx bxs-check-circle'></i>
        <span className='font-light font-bold'>All NFT's onCyber either belong to or were minted by their space creator.</span>
      </div>

      <section>
        <div className="nft-buttons-list">
          <button className={`nft-button ${(productCategory === '24h Trending' ? ('nft-active-btn') : (''))}`} onClick={() => setProductCategory('24h Trending')}>
            <span>
              <i className='bx bxs-hot' ></i>
            </span>
            <span>24h Trending</span>
          </button>

          <button className={`nft-button ${(productCategory === 'Latest shows' ? ('nft-active-btn') : (''))}`}
            onClick={() => setProductCategory('Latest shows')}>
            <span><i className='bx bxs-party' ></i></span>
            <span>Latest shows</span>
          </button>

          <button className={`nft-button ${(productCategory === 'In Genesis' ? ('nft-active-btn') : (''))}`} onClick={() => setProductCategory('In Genesis')}>
            <span>
              <i className='bx bxs-diamond' ></i>
            </span>
            <span>In Genesis</span>
          </button>

          <button className={`nft-button ${(productCategory === 'In Temple' ? ('nft-active-btn') : (''))}`} onClick={() => setProductCategory('In Temple')}>
            <span>
              <i className='bx bx-sitemap' ></i>
            </span>
            <span>In Temple</span>
          </button>

          <button className={`nft-button ${(productCategory === 'In Void' ? ('nft-active-btn') : (''))}`} onClick={() => setProductCategory('In Void')}>
            <span><i className='bx bxl-trip-advisor' ></i></span>
            <span>In Void</span>
          </button>
          <button className={`nft-button ${(productCategory === 'Clear All' ? ('nft-active-btn') : (''))}`} onClick={() => setProductCategory('Clear All')}>
            <span>
              <i className='bx bxs-analyse' ></i>
            </span>
            Clear All
          </button>
        </div>

        <div className="nft-cards-container">
          <Nftcard cardlist={filterVideos(productslist)(productCategory)} />

        </div>
      </section>
    </main>
  )
}

export default App
