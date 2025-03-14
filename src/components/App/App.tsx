import { useEffect, useState } from "react";
import fetchPhoto from "../../api";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import { toast } from "react-hot-toast";
import { ImageType, Photo } from "../../types";

function App() {
    const [images, setImages] = useState<ImageType[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [query, setQuery] = useState("");
    const [modalImage, setModalImage] = useState<ImageType | null>(null);
    const [page, setPage] = useState(1);

    const handleSearch = (searchQuery: string) => {
        if (!searchQuery.trim()) {
            toast.error("Please enter a search term!");
            return;
        }
        if (searchQuery === query) return;

        setQuery(searchQuery);
        setPage(1);
    };

    const loadMore = async () => {
        setLoading(true);
        try {
            const data = await fetchPhoto({ query, page: page + 1 });
            const updatedImages = data.map(
                (photo: Photo): ImageType => ({
                    id: photo.id,
                    urls: {
                        small: photo.urls.small,
                        regular: photo.urls.small,
                    },
                    alt_description: photo.alt_description || "",
                })
            );

            setImages((prev) => [...prev, ...updatedImages]);
            setPage((prev) => prev + 1);
        } catch (error) {
            setError((error as Error).message || "Something went wrong!");
            toast.error("Failed to fetch more images!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const data: Photo[] = await fetchPhoto({ query, page: 1 });
                const mappedData: ImageType[] = data.map((photo) => ({
                    id: photo.id,
                    urls: {
                        small: photo.urls.small,
                        regular: photo.urls.regular || "",
                    },
                    alt_description: photo.alt_description,
                }));
                setImages(mappedData);
            } catch (error) {
                setError((error as Error).message || "Something went wrong!");
                toast.error("Failed to fetch images!");
            } finally {
                setLoading(false);
            }
        };

        if (query) fetchData();
    }, [query]);

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={setModalImage} />
            {loading && <Loader />}
            {images.length > 0 && <LoadMoreBtn onLoadMore={loadMore} />}
            <ImageModal isOpen={modalImage !== null} img={modalImage} onClose={() => setModalImage(null)} />
        </div>
    );
}

export default App;
