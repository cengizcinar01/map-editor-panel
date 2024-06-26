const onDelete = (styleId, getAllStyles, setGetAllStyles) => {
  setGetAllStyles(getAllStyles.filter((style) => style.style_id !== styleId));
};

export default onDelete;
