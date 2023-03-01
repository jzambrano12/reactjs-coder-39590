function ItemListContainer({ greeting, pokemon }) {
  return (
    <div>
      <div style={{ fontSize: "3rem", textAlign: "center" }}>{greeting}</div>
      <p style={{ fontSize: "3rem", textAlign: "center" }}>
        {pokemon?.name ?? "No encontro ningun pokemon"}
      </p>
    </div>
  );
}

export default ItemListContainer;
