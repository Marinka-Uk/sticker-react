import { Component } from "react";
import { StickerList } from "./Sticker/Sticker";
import data from "../stickers.json"

export class App extends Component{
state ={
  label:"",
}


render(){
  return(
    <>
    <StickerList data={data} />
    </>
  )
}};