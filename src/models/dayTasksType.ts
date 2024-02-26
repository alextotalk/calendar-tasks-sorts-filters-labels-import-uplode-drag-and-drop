export type TaskType = {
    id:string
    text: string;
    labelColor?: string[];
    labelText?: string[];
}


export type DayTypeMap = Map<string, TaskType[]>;
