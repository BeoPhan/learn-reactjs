import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Vietnamese Songs",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/2/f/8/0/2f803aba9cf726c924766ada9e24a9b4.jpg",
    },
    {
      id: 2,
      name: "US Songs",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/f/1/4/b/f14b80744dea76d56783927eff527abd.jpg",
    },
    {
      id: 3,
      name: "UK Songs",
      thumbnailUrl:
        "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/4/1/c/0/41c0c2ade8817380405cbe28faab3eb1.jpg",
    },
  ];
  return (
    <div>
      <h2>You can like it...</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
