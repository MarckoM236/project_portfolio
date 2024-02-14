export interface Project {
    title:ProjectLang,
    description:ProjectLang,
    url_image:String,
    gallery:Gallery[]
}

export interface Gallery{
    description:ProjectLang,
    url:String
}

export interface ProjectLang{
    en:String,
    es:String
}