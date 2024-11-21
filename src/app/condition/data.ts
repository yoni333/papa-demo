import { Condition } from "./conditions";
import { ConditionContainer, IConditionInit } from "./interfaces";
import { RuleEngine } from "./rule-engine";
const mockData= {age:19,name:"ron",placeNorth:{city:"aco",list:["aco","haifa","nahariya"]},formValid:true,miluim:30,kids:5,salary:9000}
export const AGE_RULE: IConditionInit<number> = {
    title: "בדיקת גיל מעל - 18",
    failMessage: "Age must be over 18.",
    data:mockData.age,
    check:function() {
       
        return this.data > 18;
    }
}

export const AGE_RULE21: IConditionInit<number>  = {
    title: " - בדיקת גיל - מעל 21",
    failMessage: "Age must be over 21.",
    data:mockData.age,
    check:function() {
       
        return this.data > 21;
    }
}

export const EMPTY_RULE: IConditionInit<boolean> = {
    title: "מולאו כל הפרטים",
    failMessage: "Name cannot be empty.",
    data:mockData.formValid,
    check:function() {
        return this.data;
    }
}
export const LOCATION_RULE : IConditionInit<{city:string,list:string[]}>= {
    title: "מיקום מזכה - צפון",
    failMessage: "לא גר בישוב מזכה.",
    data:mockData.placeNorth,
    check:function() {
       
        return this.data.list.find(c=>c===this.data.city)? true :false;
    }
}
export const ARMY_RULE30 : IConditionInit<number>= {
    title: "מילואים - 20 ימים בחודש",
    failMessage: "אין 20 ימי מילואים",
    data:mockData.miluim,
    check:function() {
       
        return this.data > 20;
    }
}

export const ARMY_RULE60: IConditionInit<number> = {
    title: "מילואים 30 ימים ב 60 יום",
    failMessage: "Name cannot be empty.",
    data:mockData.miluim,
    check:function() {
       
        return this.data > 30;
    }
}

export const KIDS3_RULE: IConditionInit<number> = {
    title: "ילדים - מעל 3",
    failMessage: "אין ילדים מעל גיל 3",
    data:mockData.kids,
    check:function() {
       
        return this.data > 3;
    }
}

export const KIDS6_RULE: IConditionInit<number> = {
    title: "ילדים מעל 6",
    failMessage: " ילדים מעל 6",
    data:mockData.kids,
    check:function() {
       
        return this.data > 6;
    }
}

export const SALARY_RULE: IConditionInit<number> = {
    title: "משכורת עד 10 אלף",
    failMessage: "משכורת עד 10 אלף .",
    data:mockData.salary,
    check:function() {
       
        return this.data < 10000;
    }
}

export const KIDSBOX_SALARY_AND_3KIDS_RULE: IConditionInit<number> = {
    title: "אוסף תנאי זכאות עד 3 ילדים",
    failMessage: "אוסף תנאי זכאות עד 3 ילדים לא מתקיים",
    data:0,
    check: <ConditionContainer<number>>{
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
    check: <ConditionContainer<number>>{
        type: "all",
        conditions: [new Condition(
            KIDSBOX_SALARY_AND_3KIDS_RULE
        ), new Condition(
            KIDS6_RULE
        ),]
    }
}







export const conditions: Condition<number>[] = [
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
        AGE_RULE21
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
        AGE_RULE21
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