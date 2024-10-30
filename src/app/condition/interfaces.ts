export type ConditionCheck = () => boolean;
export type ConditionResult ={ success: boolean; message?: string }

export interface IConditionInit {
  title: string, failMessage: string, check: ConditionCheck
}
export interface ICondition {
   
    evaluate:()=> ConditionResult;
  }
  