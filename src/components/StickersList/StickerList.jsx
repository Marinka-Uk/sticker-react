import { StickerItem } from "components/Sticker/Sticker"

export const StickerList = (props)=>{
return<>
<ul>
    {props.data.map(sticker =>{
        return <StickerItem img={sticker.img} label={sticker.label} choose={props.onChoose}/>
    })}
</ul>
</>
}