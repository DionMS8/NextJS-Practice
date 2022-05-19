//=====[USING getStaticPaths FUNCTION]============================================================================================

export const getStaticPaths = async () => {
  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
  ];
  return { paths, fallback: false };
};

//=====[CREATING THE DETAILS PAGE COMPONENT]=========================================================================

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  );
};

export default Details;
