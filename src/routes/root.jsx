import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <div>
      <ItemListContainer
        isCategoryRoute={isCategoryRoute}
        categoryId={params.id}
      />
    </div>
  );
}

export default Root;
