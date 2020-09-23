import React from "react";

const ImageList = (props) => {
  //We destructure the object, referencing only the fields that we want.
  const images = props.images.map(({ description, id, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return <div>{images}</div>;
};

export default ImageList;
