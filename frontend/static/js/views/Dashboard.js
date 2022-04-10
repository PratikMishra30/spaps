import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard")
    }
    // <h1> On Dashboard View Test CICD</h1>
    async getHtml(){
        return '<h1>For You</h1>'
        // </picture><img src="./flowers.jpg" alt="Flowers" style="width:500px;height:600px;"></body></html>';
    }
}