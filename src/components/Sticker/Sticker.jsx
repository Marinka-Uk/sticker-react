
export  const StickerItem =({img, label, choose})=>{
return (
    <li onClick={()=>{choose(label)}}>
        <img src={img} alt={label}/>
        <p >{label}</p>
    </li>
   
    
)
}

