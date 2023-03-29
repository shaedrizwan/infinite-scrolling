import "./Albums.css";
import useAlbums from "./useAlbums.hook";

function AlbumsGrid() {
  const { isLoading, albums, error } = useAlbums(1);

  console.log(albums);

  return <div className="albums-grid">AlbumsGrid</div>;
}

export default AlbumsGrid;
