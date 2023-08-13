export default async function data(){
    const res = await fetch(`https://meheer.vercel.app/api/projects`,{ next: { revalidate: 10 } });
    const post = await res.json();
    const projects = post.data 
    return projects
}