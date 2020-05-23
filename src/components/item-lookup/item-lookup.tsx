import React, { ChangeEvent } from 'react';
import WowItem from "../../models/WowItem";
import WowApi from '../../WowApi';


export default class ItemLookup extends React.Component<{}, { selectedItem?: WowItem, inputValue: string }> {
    constructor(props: any) {
        super(props);
        this.state = { inputValue: "" }
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="itemID" onChange={this.onInputItemID} />
                <button onClick={this.getWowItem}>Get Item</button>
                <img src="" alt="" />
            </div>
        )
    }

    onInputItemID = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value })
    }

    getWowItem = () => {
        WowApi.getWowItem(Number(this.state.inputValue))
    }
}