import { useEffect, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver.hook";
import AlbumCard from "./AlbumCard";
import "./Albums.css";
import useAlbums from "./useAlbums.hook";

function AlbumsGrid() {
  const [page, setPage] = useState(1);
  const { isLoading, albums, error } = useAlbums(page);
  const { isIntersecting, lastElementRef } = useIntersectionObserver({
    isLoading,
  });

  const showNextPageAlbums = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (isIntersecting) {
      showNextPageAlbums();
    }
  }, [isIntersecting]);

  return (
    <div className="albums-grid">
      <h2 className="todo-heading">Albums</h2>
      <ul className="albums-container">
        {albums?.map((album, index) => {
          const isLastElement = albums.length === index + 1;
          const albumWrapProps = isLastElement ? { ref: lastElementRef } : {};
          return (
            <li className="album-wrap" key={album.id} {...albumWrapProps}>
              <AlbumCard id={album.id} title={album.title} />
            </li>
          );
        })}
      </ul>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
    </div>
  );
}

export default AlbumsGrid;
