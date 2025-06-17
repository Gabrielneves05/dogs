import Feed from "@/components/feed/feed";
import getPhotos from "@/actions/getPhotos";

export default async function Home() {
  const { data } = await getPhotos();

  return (
    <section className="container mainContainer">
      {data && <Feed photos={data} />}
    </section>
  );
}
