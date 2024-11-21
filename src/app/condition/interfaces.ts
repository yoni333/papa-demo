import { Condition } from "./conditions";

export type ConditionCheck = <T>(data:T) => boolean;
export type ConditionResult ={ success: boolean; currentFailMessage: string , failMessagesBuffer:string[] }
export type EvaluationResult = { success: boolean; currentFailMessages: string[] ,failMessagesBuffer:string[] }

export interface IConditionInit <T>{
  title: string, failMessage: string, check: ConditionCheck | ConditionContainer<T> ,data:T
}
export interface ICondition {
   
    evaluate:()=> ConditionResult;
  }
  
export interface ConditionContainer <T> {
  type:"all" | "any";
  conditions: Condition<T>[];
}