import { Condition } from "./conditions";
import { ConditionContainer, EvaluationResult } from "./interfaces";

export class RuleEngine {
 private conditions: Condition[];
 private conditionContainers: ConditionContainer;
  constructor(conditionContainers: ConditionContainer) {
    this.conditionContainers = conditionContainers;
    this.conditions = conditionContainers.conditions;
  }

  evaluateAll(failMessagesBuffer:string[]=[]): EvaluationResult {
     let currentFailMessages: string[] = [];
    
    let  success = false
    const res =  this.runConditions(this.conditions,failMessagesBuffer);
    failMessagesBuffer.push(...res.currentFailMessages)
    currentFailMessages = res.currentFailMessages
    if ( this.conditionContainers.type === "all" ) {
      success =  currentFailMessages.length === 0 ? true :false
    }else{
      
      success = (this.conditions.length - currentFailMessages.length) === 0 ? false :true;

    }
    
    return {
      success,
       currentFailMessages,
      failMessagesBuffer
    };
  }

  runConditions(conditions:Condition[], failMessagesBuffer:string[] ):{currentFailMessages:string[],failMessagesBuffer:string[]}{
    const currentFailMessages: string[] = [];
   
    for (const condition of conditions) {
      const result = condition.evaluate(failMessagesBuffer);
      if (!result.success) {
       
        currentFailMessages.push(result.currentFailMessage);
      }
    }

   

    return {currentFailMessages,failMessagesBuffer };
  }
}