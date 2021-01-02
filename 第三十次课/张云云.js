
function City( cityName,cityArea,cityPostcode,cityRegions){
    this.cityName = cityName;
    this.cityArea = cityArea;
    this.cityPostcode = cityPostcode;
    this.cityRegions = cityRegions;
}

var EastLake = {
    orgionName:"东湖区",
    orgionPostcode:"1111",
    orgionArea:1000
}
var WestLake = {
    orgionName:"西湖区",
    orgionPostcode:"2222",
    orgionArea:2000
}
var QSLake = {
    orgionName:"青山湖区",
    orgionPostcode:"3333",
    orgionArea:3000
}
var SJQ = {
    orgionName:"新建区",
    orgionPostcode:"4444",
    orgionArea:4000
}

City.prototype.Show=function(){
    for(let i=0;i<this.cityRegions.length;i++){
         console.log(this.cityRegions[i]);
    }
}


let arr=[EastLake, WestLake,QSLake,SJQ];
let City1 = new City("南昌市",10000,"1234",arr)

City1.Show();

