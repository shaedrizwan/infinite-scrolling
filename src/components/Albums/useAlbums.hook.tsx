import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { AlbumType } from "./Albums.types";

function useAlbums(page: number) {
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [error, setError] = useState<string>();

  async function getAlbums() {
    setIsLoading(true);
    try {
      const todosResponse = await api.get(`/albums?_limit=10&_page=${page}`);
      if (todosResponse.status === 200) {
        setAlbums([...albums, ...todosResponse.data]);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAlbums();
  }, [page]);

  return { isLoading, albums, error };
}

export default useAlbums;
