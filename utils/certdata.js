export default async function datac(){
    const res = await fetch(`https://meheer.vercel.app/api/certificates`,{ next: { revalidate: 10 } });
    const post = await res.json();
    const projects = post.data 
    return projects
}