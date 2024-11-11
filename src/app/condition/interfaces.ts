import { Condition } from "./conditions";

export type ConditionCheck = () => boolean;
export type ConditionResult ={ success: boolean; message: string[] }

export interface IConditionInit {
  title: string, failMessage: string, check: ConditionCheck | ConditionContainer
}
export interface ICondition {
   
    evaluate:()=> ConditionResult;
  }
  
export interface ConditionContainer {
  type:"all" | "any";
  conditions: Condition[];
}