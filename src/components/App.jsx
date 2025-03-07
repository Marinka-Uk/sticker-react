import { Component } from "react";
import { StickerList } from "./StickersList/StickerList";
import data from "../stickers.json"


export class App extends Component{
state ={
  label:"",
}

changeSticker = changeSticker => {
  this.setState({ label: changeSticker });
};

render(){
  return(
    <>
    <StickerList data={data} onChoose={this.changeSticker} />
    </>
  )
}};