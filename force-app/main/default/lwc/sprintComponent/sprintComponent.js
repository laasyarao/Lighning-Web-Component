import { LightningElement,track } from 'lwc';

export default class SprintComponent extends LightningElement {

    @track colorClass;
    @track objList = [{'name':'App Engineering Team','totalEffort':'68', 'estimatedEffort':'80'},
    {'name':'Demo Engineering Team','totalEffort':'65', 'estimatedEffort':'80'},
    {'name':'CX Engineering Team', 'totalEffort':'22','estimatedEffort':'32'},
    {'name':'Designer Team', 'totalEffort':'30','estimatedEffort':'64'},
    {'name':'Technical Strategy Team', 'totalEffort':'0','estimatedEffort':'0'},
    {'name':'Creative Stategy Team', 'totalEffort':'0','estimatedEffort':'0'},
    {'name':'Communication Design Team', 'totalEffort':'0','estimatedEffort':'0'}
   
];


connectedCallback(){
    this.calcPercentage();
}
    calcPercentage(){
     console.log("Hi");
       // let tempArr = this.objList;
        for(let i=0;i<this.objList.length;i++){
            this.objList[i].percentage=this.objList[i].totalEffort/this.objList[i].estimatedEffort*100;
            let colorProperty 
            if(this.objList[i].percentage>=60){
                this.objList[i].colorProperty='GREEN';
                
             }
             else if (this.objList[i].percentage>=30 && this.objList[i].percentage<60){
                this.objList[i].colorProperty='ORANGE';
              
             }
             else {
                this.objList[i].colorProperty='RED';
                
             }
             this.objList[i].colorClass= colorProperty;
        }
        //this.objList = tempArr;
        //  console.log(this.objList);
    }
   


//     get colorDemoCode(){
//         let colorProperty = '';
//         for(let i=0;i<this.objList.length;i++){
//             console.log(this.objList[i].percentage);
//              if(this.objList[i].percentage>=60){
//                 colorProperty='GREEN';
                
//              }
//              else if (this.objList[i].percentage>=30 && this.objList[i].percentage<60){
//                 colorProperty='ORANGE';
              
//              }
//              else if (this.objList[i].percentage>=0 && this.objList[i].percentage<30){
//                 colorProperty='RED';
                
//              }

//              return colorProperty;
//         }


// }
}