
export  const StickerItem =({img, label, choose})=>{
return (
    <li>
        <img src={img} alt={label}/>
        <p >{label}</p>
    </li>
)
}

