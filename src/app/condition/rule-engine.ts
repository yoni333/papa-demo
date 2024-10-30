import { Condition } from "./conditions";

export class RuleEngine {
  conditions: Condition[];

  constructor(conditions: Condition[]) {
    this.conditions = conditions;
  }

  evaluateAll(): { success: boolean; messages: string[] } {
    const messages: string[] = [];

    for (const condition of this.conditions) {
      const result = condition.evaluate();
      if (!result.success) {
        messages.push(result.message!);
      }
    }

    return {
      success: messages.length === 0,
      messages,
    };
  }
}