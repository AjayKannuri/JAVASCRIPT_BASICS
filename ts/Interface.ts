export interface payment{

    pay(from:string,to:string,amount:number):void;
}

export class AmazonPay implements payment{
    pay(from:string, to:string, amount:number){
        console.log(`Paying ${amount} from ${from} to ${to} using AmazonPay`)
    }
}

export class GooglePay {
    pay(from:string, to:string, amount:number){
        console.log(`Paying ${amount} from ${from} to ${to} using AmazonPay`)
    }
}
class Paytm implements payment{
    pay(from:string, to:string, amount:number){
        console.log(`Paying ${amount} from ${from} to ${to} using AmazonPay`)
    }
}