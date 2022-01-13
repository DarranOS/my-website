const gradient = (shape, col1, col2, pos1, pos2) => {
  const grad = `${shape}-gradient(150deg, ${col1} ${pos1}%, ${col2} ${pos2}%)`;
  return grad;
};

export default gradient;
