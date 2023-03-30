import React from "react";

function AlbumCard({ title, id }: { title: string; id: number }) {
  return (
    <div className="album-card">
      <div className="album-id">{id}.</div>
      <div className="album-title">{title}</div>
    </div>
  );
}

export default AlbumCard;
