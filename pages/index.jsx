import axios from "axios";

export default function Home({ data }) {
  return <div className="row">{data && data.map((el, i) => <div key={i} className="col-4 p-4">{el.name}</div>)}</div>;
}

export const getServerSideProps = async (ctx) => {
  let data;
  try {
    const hotelsData = await axios.get(`${process.env.BACKEND_URL}/hotels`);
    data = hotelsData.data.data;
  } catch (err) {
    data = null;
  }
  return {
    props: {
      data,
    },
  };
};
