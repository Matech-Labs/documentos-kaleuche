import PostCard from "/components/PostCard";
//cargar publicaciones
async function loadPosts(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json() //convierto datos en json
    // console.log(data) ESTO SE MOSTRARIA EN LA TERMINAL DE VISUAL YA QUE ES DEL LADO DEL SERVIDOR 
    return (data)
}
//RENDERIZO
async function PostPages() {
    const posts = await loadPosts();
    // console.log(posts)
    return(
        <div>
            <h1>POST PAGES</h1>
            {posts.map((post) =>(
                //ESTO ME PERMITE PONERLE "USE CLIENT" AL COMPONENTE Y QUE SEA COMPONENTE DE FRONT
                <PostCard post={post} key={post.id} />
            ))
            }
        </div>
    )
}

export default PostPages