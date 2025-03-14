import { useEffect, useState } from "react";
import fetchPhoto from "../api";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { toast } from "react-hot-toast";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [modalImage, setModalImage] = useState(null);
  const [page, setPage] = useState(1);

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) {
      toast.error("Please enter a search term!");
      return;
    }
    setQuery(searchQuery);
    setPage(1);
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const data = await fetchPhoto({ query, page: page + 1 });
      setImages((prev) => [...prev, ...data]);
      setPage((prev) => prev + 1);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      toast.error("Failed to fetch more images!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query) return;

    const getPhotos = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPhoto({ query, page: 1 });
        setImages(data);
      } catch (error) {
        setError(error.message || "Something went wrong!");
        toast.error("Failed to fetch images!");
      } finally {
        setLoading(false);
      }
    };

    getPhotos();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setModalImage} />
      {loading && <Loader />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={loadMore} />}
      <ImageModal
        isOpen={modalImage !== null}
        img={modalImage}
        onClose={() => setModalImage(null)}
      />
    </div>
  );
}

export default App;
