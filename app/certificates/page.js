import Link from "next/link";
import Image from "next/legacy/image";

export const revalidate = 10;

export default async function Certificates() {
  const res = await fetch(`https://meheer.vercel.app/api/certificates`,{ next: { revalidate: 10 } });
  const post = await res.json();
  const projects = post.data 
  return (
    <div className="md:p-16 p-5">
      <h1 className="text-sky-600 mb-5 text-2xl text-center md:mt-16 mt-14">
        Certificates
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-evenly">
        {projects.map((pr) => {
          return (
            <div className="md:hover:scale-110 md:hover:z-30 z-10 duration-200 md:hover:cursor-pointer">
              <Link href={`/certificates/view/${pr.ranid}`}>
                <div
                  key={pr._id}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="bg-gray-900 hover:text-sky-400 rounded-xl w-full duration-200 text-white"
                >
                  <Image
                    src={pr.image}
                    className="rounded-xl"
                    height={500}
                    width={1000}
                    priority
                  />
                  <div className="flex flex-col">
                    <div className="p-3 pb-4">
                      <h1 className="font-extrabold text-2xl text-center">
                        {pr.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
