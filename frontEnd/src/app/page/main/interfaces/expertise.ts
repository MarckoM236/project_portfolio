export interface Expertise {
    module: String;
    data: {
            start_date: Date, 
            end_date:Date, 
            position:Position, 
            company:String, 
            functions:Function
    };    
}

export interface Position{
    en:String,
    es:String
}

export interface Function {
    en:String[],
    es:String[]
}
