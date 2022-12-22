export const checkFileImage = (filename) => {
  const imageReg = /[/.](gif|jpg|jpeg|tiff|png|svg)$/i;
  return imageReg.test(filename);
};

export const checkSize = (filesize, limit = 2) => {
  const sizeInMB = Number((filesize / (1024 * 1024)).toFixed(2));

  if (sizeInMB > limit) {
    return false;
  }

  return true;
};