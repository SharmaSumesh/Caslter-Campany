import {Component} from "react";
import './index.css';
class App extends Component{
    constructor()
    {
        super();
        this.state = {
            searchdata:{},
            total:null,
            noData:false,
        }
    }
    search = (key)=>{
        console.log(key)
        fetch('https://reqres.in/api/users/'+key).then((data) => {
            data.json().then((resp)=>{
                if(resp.length>12)
                {
                    console.log("error");
                    this.setState({noData:true,searchdata:null,});
                }
                // console.log(resp.data);
                console.log(this.setState({searchdata:resp.data}
                ));
            })
        })
     }
     componentDidUpdate()
     {
        console.log(this.state);
     }
    render()
    {
        return (
            <div>
                <h1>Please Enter the Id </h1>
                <input type="number"  placeholder = "enter the id" onChange={(event)=>this.search(event.target.value)}/>
                <div>
                    {
                        <div className="container-fluid mt-9">
                            <h2>Yours Data</h2>
                            <div className = "row text-center">
                                <div className = "col-10 col-md-4 mt-5">
                                    <div className = "card p-2">
                                        <div className = "d-flex align-items-center">
                                            <div className = "image"><img src={this.state.searchdata.avatar} className="rounded" width="140"/></div>
                                            <div className = "ml-3 w-100">
                                                <h4 className="mb-0 mt-0 bg-primary d-flex justify-content-between rounded text-white stats"></h4>
                                                <h4 className = "mb-0 mt-0 textleft">{this.state.searchdata.first_name}</h4>
                                                <div className = "p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                    <div className = "d-flex  flex-column"><span className = "first_name">Name<br/>{this.state.searchdata.first_name}</span></div>
                                                    <div className = "d-flex flex-column"><span className = "last_name">Last_N<br/>{this.state.searchdata.last_name}</span></div>
                                                    <div className = "d-flex flex-column"><span className = "Email">Email<br/>{this.state.searchdata.email}</span></div>
                                                </div>
                                                <h6 class = "mb-0 mt-0 bg-primary d-flex justify-content-between rounded text-white stats">Description<br/>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eum numquam quae? Perferendis exercitationem asperiores repudiandae. Iste neque sit, consequatur error enim amet excepturi soluta eos? Ipsa aspernatur aliquam expedita iste quasi?</h6>
                                            </div>
                                            {
                                                this.setState.noData?<h3>No Data</h3>: null2
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        

                        
                    }
                </div>
                
            </div>

        )
    }
}
export default App;
