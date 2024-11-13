import { Condition } from "./conditions";
import { ConditionContainer, IConditionInit } from "./interfaces";
import { RuleEngine } from "./rule-engine";

export const AGE_RULE: IConditionInit = {
    title: "בדיקת גיל מעל - 18",
    failMessage: "Age must be over 18.",
    getData():Promise<any>{
        const p = new Promise(resolve=>{
            resolve( 17)
        })
        return p
    }
    check: () => {
       this.getData().then((age)=>{
            return age > 18;
        })
        return age > 18;
    }
}

export const AGE_RULE19: IConditionInit = {
    title: " - בדיקת גיל - מעל 21",
    failMessage: "Age must be over 21.",
    check: () => {
        const age = 22
        return age > 21;
    }
}

export const EMPTY_RULE = {
    title: "מולאו כל הפרטים",
    failMessage: "Name cannot be empty.",
    check: () => {
        const name: string = ""
        return name.trim() !== "";
    }
}
export const LOCATION_RULE = {
    title: "מיקום מזכה - צפון",
    failMessage: "לא גר בישוב מזכה.",
    check: () => {
        const name: string = "ro"
        return name.trim() !== "";
    }
}
export const ARMY_RULE30 = {
    title: "מילואים - 20 ימים בחודש",
    failMessage: "אין 20 ימי מילואים",
    check: () => {
        const days: number = 20
        return days > 21;
    }
}

export const ARMY_RULE60 = {
    title: "מילואים 30 ימים ב 60 יום",
    failMessage: "Name cannot be empty.",
    check: () => {
        const name: string = "ro"
        return name.trim() !== "";
    }
}

export const KIDS3_RULE = {
    title: "ילדים - מעל 3",
    failMessage: "אין ילדים מעל גיל 3",
    check: () => {
        const sum: number = 2
        return sum > 3;
    }
}

export const KIDS6_RULE = {
    title: "ילדים מעל 6",
    failMessage: " ילדים מעל 6",
    check: () => {
        const sum: number =7
        return sum > 6;
    }
}

export const SALARY_RULE = {
    title: "משכורת עד 10 אלף",
    failMessage: "משכורת עד 10 אלף .",
    check: () => {
        const sum: number = 19000
        return sum < 10000;
    }
}

export const KIDSBOX_SALARY_AND_3KIDS_RULE = {
    title: "אוסף תנאי זכאות עד 3 ילדים",
    failMessage: "אוסף תנאי זכאות עד 3 ילדים לא מתקיים",
    check: <ConditionContainer>{
        type: "all",
        conditions: [new Condition(
            ARMY_RULE30
        ), new Condition(
            SALARY_RULE
        ),]
    }

}

export const KIDSBOX_SALARY_AND_MILUIM_OR_6KIDS_RULE = {
    title: "אוסף תנאי זכאות ילדים",
    failMessage: "אוסף תנאי זכאות ילדים - מעל 6 ילדים",
    check: <ConditionContainer>{
        type: "all",
        conditions: [new Condition(
            KIDSBOX_SALARY_AND_3KIDS_RULE
        ), new Condition(
            KIDS6_RULE
        ),]
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
    new Condition(
        KIDSBOX_SALARY_AND_3KIDS_RULE
    ),
    new Condition(
        KIDSBOX_SALARY_AND_MILUIM_OR_6KIDS_RULE
    ),
];



function runTest( conditionContainers:ConditionContainer) {
    const ruleEngine = new RuleEngine(conditionContainers);
    const evaluationResult = ruleEngine.evaluateAll();

    if (evaluationResult.success) {
        console.log("All conditions passed!");
    } else {
        console.log("Conditions failed:", evaluationResult.currentFailMessages,evaluationResult.failMessagesBuffer);
    }

}
const conditionContainers: ConditionContainer = {
    type: "all",
    conditions: [new Condition(
        KIDSBOX_SALARY_AND_3KIDS_RULE
    )],
};

const conditionContainers2: ConditionContainer = {
    type: "all",
    conditions: [new Condition(
        KIDS3_RULE
    )],
};
const conditionContainers3: ConditionContainer = {
    type: "all",
    conditions: [new Condition(
        KIDSBOX_SALARY_AND_MILUIM_OR_6KIDS_RULE
    )],
};
const conditionContainersSimple: ConditionContainer = {
    type: "all",
    conditions: [new Condition(
        AGE_RULE
    ),new Condition(
        AGE_RULE19
    )
    ,new Condition(
        EMPTY_RULE
    )],
};
const conditionContainersAll: ConditionContainer = {
    type: "all",
    conditions: 
        conditions
,
};

runTest(conditionContainersSimple)
runTest(conditionContainers)
// runTest(conditionContainers2)
runTest(conditionContainers3)
// runTest(conditionContainersAll)