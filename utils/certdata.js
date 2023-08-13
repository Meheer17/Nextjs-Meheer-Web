export default async function datac(){
    const res = await fetch(`http://localhost:3000/api/certificates`,{ next: { revalidate: 10 } });
    const post = await res.json();
    const projects = post.data 
    return projects
}