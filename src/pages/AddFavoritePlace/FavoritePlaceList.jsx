const FavoritePlaceList = ({ places, onRemovePlace }) => {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          {place.name} - {place.country}
          <button onClick={() => onRemovePlace(place.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default FavoritePlaceList;
