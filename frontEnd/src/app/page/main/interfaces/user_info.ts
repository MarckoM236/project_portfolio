export interface User_Info{
    photo : String,
    first_name : String,
    second_name : String,
    first_lastname : String,
    second_lastname : String,
    phone : String,
    email : String,
    city : String,
    department : String,
    country : String,
    birthdate : Date,
    profession : Language,
    social_networks : Social_Networks,
    professional_profile : Language,
    interests : Language
}

export interface Social_Networks{
    facebook:String,
    twitter:String, 
    linkedin:String, 
    instagram:String,
    gitHub:String
}

export interface Language{
    en:String,
    es:String
}