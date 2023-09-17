"use client" //ahora es un componente de cliente y puede usar propiedades de react como useEffect

function PostCard({post}) {
    return(
        // LA KEY ES PARA QUE NO ROMPA LOS HUEVOS REACT
        <div key={post.id}> 
            <h3>{post.title}</h3>
            <p>{post.body} </p>
            <button onClick={()=>{alert("vos queres pelear?")}}>ESTO SOLO FUNCIONA PORQUE ES COMPONENTE DE CLIENTE</button>
        </div>
    )
    
}

export default PostCard