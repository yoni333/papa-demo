import { AGE_RULE, AGE_RULE19, ARMY_RULE30, ARMY_RULE60, EMPTY_RULE, KIDS3_RULE, KIDS6_RULE, LOCATION_RULE } from "./data";
import { ConditionCheck, ConditionResult, ICondition, IConditionInit } from "./interfaces";
import { RuleEngine } from "./rule-engine";

console.log("start")


export class Condition {
  title: string;
  failMessage: string;
  check: ConditionCheck;

  constructor({ title, failMessage, check }: IConditionInit) {
    this.title = title;
    this.failMessage = failMessage;
    this.check = check;
  }

  evaluate():ConditionResult  {
    const result = this.check();
    return result
      ? { success: true }
      : { success: false, message: this.failMessage };
  }
}


  

export const conditions: Condition[] = [
    new Condition(
        AGE_RULE
    ),
    new Condition(
        EMPTY_RULE
    ),
    new Condition(
      LOCATION_RULE
    ),
    new Condition(
      AGE_RULE19
    ),
    new Condition(
      ARMY_RULE30
    ),
    new Condition(
      ARMY_RULE60
    ),
    new Condition(
      KIDS3_RULE
    ),
    new Condition(
      KIDS6_RULE
    ),
  ];
  
  const ruleEngine = new RuleEngine(conditions);
  const evaluationResult = ruleEngine.evaluateAll();
  
  if (evaluationResult.success) {
    console.log("All conditions passed!");
  } else {
    console.log("Conditions failed:", evaluationResult.messages);
  }
  