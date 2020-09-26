import React, { Component } from 'react';
import Axios from 'axios';

export default class Message extends Component {

   

    onDelete = ()=>{
         this.MessageDelete();
    }

    MessageDelete = async () => {
        await Axios.delete("http://127.0.0.1:8000/api/messages"+"/"+this.props.message.id);
        this.props.getmessages();

      };

      render() {  
        
        return (
            <>
               <td ><button type="button" class="btn btn-danger h-50" onClick={this.onDelete}><i class="fas fa-trash-alt"></i></button></td>
         </>
            
        )
    }
}
