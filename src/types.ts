export interface ImageType {
    id: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description?: string;
    user?: {
        name: string;
    };
    likes?: number;
}

export interface SearchParams {
    query: string;
    page?: number;
    per_page?: number;
}

export interface Photo {
    id: string;
    alt_description?: string;
    urls: {
        small: string;
        regular?: string;
    };
}

export interface SearchResponse {
    results: Photo[];
}

export interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export interface ImageGalleryProps {
    images: ImageType[];
    onImageClick: (image: ImageType) => void;
}

export interface ImageCardProps {
    img: Pick<ImageType, "urls" | "alt_description">;
}

export interface ImageModalProps {
    isOpen: boolean;
    img: ImageType | null;
    onClose: () => void;
}

export interface ErrorMessageProps {
    message: string;
}

export interface LoadMoreBtnProps {
    onLoadMore: () => void;
}
