import { ConditionCheck, ConditionContainer, ConditionResult, IConditionInit } from "./interfaces";
import { RuleEngine } from "./rule-engine";

console.log("start")


export class Condition <T>{
  title: string;
  failMessage: string;
  check: ConditionCheck | ConditionContainer<T>;
  data:T
  constructor({ title, failMessage, check,data }: IConditionInit<T>) {
    this.title = title;
    this.failMessage = failMessage;
    this.check = check;
    this.data = data
  }

  evaluate(failMessagesBuffer:string[]): ConditionResult {
    let result: boolean = false;
    if (typeof this.check === 'function') {

      result = this.check(this.data);
     
    }

    if (typeof this.check === 'object') {
      const ruleEngine = new RuleEngine(this.check);
      const evaluationResult = ruleEngine.evaluateAll(failMessagesBuffer);
     
      result =evaluationResult.success;
    }
   
    return result
      ? { success: true, currentFailMessage: "success" ,failMessagesBuffer}
      : { success: false, currentFailMessage: this.failMessage ,failMessagesBuffer};
    }
}


