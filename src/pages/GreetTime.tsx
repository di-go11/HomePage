import React from "react";

class GreetTime extends React.Component {
    hourTime: number;
    constructor(props: any){
        super(props);
        this.hourTime = new Date().getHours();
    }
    GetTime() {
        if (this.hourTime <= 9 && this.hourTime >= 5) {
            return "おはようございます";
        } else if (this.hourTime <= 18 && this.hourTime >= 10) {
            return "こんにちは!!";
        } else if (this.hourTime <= 22 && this.hourTime >= 19) {
            return "こんばんは!!";
        } else if ((this.hourTime <= 24 && this.hourTime >= 23) || (this.hourTime <= 2 && this.hourTime >= 0)) {
            return "夜遅くまでお疲れ様です";
        } else if (this.hourTime <= 4 && this.hourTime >= 3) {
            return "早起きですね!!もしかして徹夜ですか？";
        }
    }
    render() {
        return (
            <div className="greet-time">
                <br />{this.GetTime()}
            </div>
        );
    }
}
export default GreetTime;