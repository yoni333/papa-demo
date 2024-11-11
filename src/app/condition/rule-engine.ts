import { Condition } from "./conditions";
import { ConditionContainer } from "./interfaces";

export class RuleEngine {
 private conditions: Condition[];
 private conditionContainers: ConditionContainer;
  constructor(conditionContainers: ConditionContainer) {
    this.conditionContainers = conditionContainers;
    this.conditions = conditionContainers.conditions;
  }

  evaluateAll(): { success: boolean; messages: string[] } {
    let messages: string[] = [];
    let  success = false
     messages =  this.runConditions(this.conditions);

    if ( this.conditionContainers.type === "all" ) {
      success =  messages.length === 0 ? true :false
    }else{
      
      success = (this.conditions.length - messages.length) === 0 ? false :true;

    }
    
    return {
      success,
      messages,
    };
  }

  runConditions(conditions:Condition[]):string[]{
    const messages: string[] = [];
    for (const condition of conditions) {
      const result = condition.evaluate();
      if (!result.success) {
        messages.push(result.message);
      }
    }

    return messages;
  }
}