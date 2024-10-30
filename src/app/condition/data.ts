import { IConditionInit } from "./interfaces";

export const AGE_RULE :IConditionInit = {
    title: "בדיקת גיל מעל - 18",
    failMessage: "Age must be over 18.",
    check:() => {
        const age = 18
        return age > 18;
    }
}

export const AGE_RULE19 :IConditionInit = {
    title: " - בדיקת גיל - מעל 21",
    failMessage: "Age must be over 21.",
    check:() => {
        const age = 20
        return age > 21;
    }
}

export const EMPTY_RULE = {
    title:"מולאו כל הפרטים",
    failMessage:"Name cannot be empty.",
    check:() => {
        const name:string= "ro"
      return name.trim() !== "";
    }
}
export const LOCATION_RULE = {
    title:"מיקום מזכה - צפון",
    failMessage:"לא גר בישוב מזכה.",
    check:() => {
        const name:string= "ro"
      return name.trim() !== "";
    }
}
export const ARMY_RULE30 = {
    title:"מילואים - 20 ימים בחודש",
    failMessage:"Name cannot be empty.",
    check:() => {
        const name:string= "ro"
      return name.trim() !== "";
    }
}

export const ARMY_RULE60 = {
    title:"מילואים 30 ימים ב 60 יום",
    failMessage:"Name cannot be empty.",
    check:() => {
        const name:string= "ro"
      return name.trim() !== "";
    }
}

export const KIDS3_RULE = {
    title:"ילדים - מעל 3",
    failMessage:"Name cannot be empty.",
    check:() => {
        const name:string= "ro"
      return name.trim() !== "";
    }
}

export const KIDS6_RULE = {
    title:"ילדים מעל 6",
    failMessage:"Name cannot be empty.",
    check:() => {
        const name:string= "ro"
      return name.trim() !== "";
    }
}