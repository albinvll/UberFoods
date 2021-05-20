import React, { PureComponent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Subscribe.css';

class Subscribe extends PureComponent{

    state={
        subEmailString: "",
    }

    onSubStringChange =(event)=>{
        this.setState({subEmailString: event.target.value});
    };

    onCheckEmail=(event)=>{
        event.preventDefault();
        if(this.state.subEmailString.length <= 0){
            toast.error("Email address required!");
        }else{
            toast.success("Subscribed!");
        }
    }

    render(){
        return (
            <div id="SubMainSection">
                <div id="SubContentContainer">
                    <div id="leftSide">
                        <p className="subTitle">
                            SUBSCRIBE TO OUR NEWSLETTER
                        </p>
                        <p className="subDesc">
                            Receive new interesting offers every week
                        </p>
                        <div id="SubInputButton">
                            <input 
                                placeholder="Your email address" 
                                id="SubEmail" 
                                onChange={this.onSubStringChange}/>
                            <button id="SubButton" onClick={this.onCheckEmail}>Subscribe</button>
                            <ToastContainer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


export default Subscribe;