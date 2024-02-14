export interface Education {
    module:String,
    data:{
        date:Date, 
        course:Course, 
        institute:String, 
        state:String
    }
    
}

export interface Course{
    en:String,
    es:String
}
