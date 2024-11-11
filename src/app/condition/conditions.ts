import { ConditionCheck, ConditionContainer, ConditionResult, IConditionInit } from "./interfaces";
import { RuleEngine } from "./rule-engine";

console.log("start")


export class Condition {
  title: string;
  failMessage: string;
  check: ConditionCheck | ConditionContainer;

  constructor({ title, failMessage, check }: IConditionInit) {
    this.title = title;
    this.failMessage = failMessage;
    this.check = check;
  }

  evaluate(): ConditionResult {
    let result: boolean = false;
    if (typeof this.check === 'function') {

      result = this.check();
    }

    if (typeof this.check === 'object') {
      const ruleEngine = new RuleEngine(this.check);
      const evaluationResult = ruleEngine.evaluateAll();
      result =evaluationResult.success;
    }
    return result
      ? { success: true, message: "success" }
      : { success: false, message: this.failMessage };
    }
}


