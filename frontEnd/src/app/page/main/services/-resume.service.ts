import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Expertise } from '../interfaces/expertise';
import { Education } from '../interfaces/education';
import { Skill } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  expertises:Expertise[]=[];
  educations:Education[]=[];
  skills:Skill[]=[];
  languages:Skill[]=[];
  file:any;

  constructor() {}

  getExpertises():Expertise[]{
   return this.expertises = [
    {
      "module":"expertise",
      "data":{
          "start_date":new Date(2024,2,1), 
          "end_date":new Date(), 
          "position":{
            "en":"Backend Developer",
            "es":"Desarrollador Backend"
          }, 
          "company":"Kerigma Software", 
          "functions":{
            "en":[
              "MySql - Mongo DB - Postgres",
              "Firebase - Google cloud",
              "Html - JavaScript(JQuery, JTable, Angular) - Css(Bootstrap) - FlutterFlow",
              "Git – GitHub",
              "PHP - Laravel",
              "Linux"
            ],
            "es":[
              "MySql - Mongo DB - Postgres",
              "Firebase - Google cloud",
              "Html - JavaScript(JQuery, JTable, Angular) - Css(Bootstrap)",
              "Git – GitHub",
              "PHP - Laravel",
              "Linux"
            ]
          }
        }
    },
    {
      "module":"expertise",
      "data":{
          "start_date":new Date(2023,5,1), 
          "end_date":new Date(2024,2,1), 
          "position":{
            "en":"Freelance Developer",
            "es":"Desarrollador independiente"
          }, 
          "company":"JVN TECNOLOGÌAS", 
          "functions":{
            "en":[
              "MySql",
              "Html - JavaScript(JQuery, Ajax, JTable) - Css(Bootstrap)",
              "Git – GitHub",
              "PHP - Laravel",
              "Jira"
            ],
            "es":[
              "MySql",
              "Html - JavaScript(JQuery, Ajax, JTable) - Css(Bootstrap)",
              "Git – GitHub",
              "PHP - Laravel",
              "Jira"
            ]
          }
        }
    },
      {
        "module":"expertise",
        "data":{
            "start_date":new Date(2022,11,12), 
            "end_date":new Date(), 
            "position":{
              "en":"Software Developer",
              "es":"DESARROLLADOR DE SOFTWARE"
            }, 
            "company":"SERINFOR INFORMATICA", 
            "functions":{
              "en":[
                "SQLServer - Transact SQL",
                "FlexyGo (LowCode)",
                "Html5 - CSS3 - JavaScript",
                "Crystal Reports",
                "n8n - Replit"
              ],
              "es":[
                "SQLServer - Transact SQL",
                "FlexyGo (LowCode)",
                "Html5 - CSS3 - JavaScript",
                "Crystal Reports",
                "n8n - Replit"
              ]
            }
          }
      },
      {
        "module":"expertise",
        "data":{
          "start_date":new Date(2022,6,16), 
          "end_date":new Date(2022,11,9), 
          "position":
          {
            "en":"Aplication Analyst",
            "es":"Analista de Aplicaciones"
          }, 
          "company":"INELCO SAS", 
          "functions":{
            "en":[
              "Support for own applications (Siesa, Edificar, Sammi, GLPI)",
              "Development of solutions using office 365 Power Automate and Power Apps tools",
              "Development of custom apps in PHP, JavaScript, C# languages ​​according to the requirements of the different areas.",
              "Support for Oracle, SQLServer, MySql databases"
            ],
            "es":[
              "Soporte para aplicaciones propias (Siesa, Edificar, Sammi, GLPI)",
              "Desarrollo de soluciones utilizando herramientas Power Automate y Power Apps de office 365",
              "Desarrollo de apps personalizadas en lenguajes PHP, JavaScript, C# según los requerimientos de las diferentes áreas.",
              "Soporte para bases de datos Oracle, SQLServer, MySql"
            ]
          }
        }
      },
      {
        "module":"expertise",
        "data":{
          "start_date":new Date(2021,3,16), 
          "end_date":new Date(2022,6,15), 
          "position":{
            "en":"SUPPORT ASSISTANT",
            "es":"Asistente de Soporte"
          }, 
          "company":"TABLESA", 
          "functions":{
            "en":[
              "Remote and on-site support",
              "Web application maintenance (Wordpress, Joomla)",
              "Analysis and development of new applications, according to requirements, using php, c# languages",
              "Development of solutions using office 365 Power Automate and Power Apps tools"
            ],
            "es":[
              "Soporte remoto y presencial",
              "Mantenimiento de aplicaciones web (Wordpress, Joomla)",
              "Análisis y desarrollo de nuevas aplicaciones, según requerimientos, utilizando lenguajes php, c#",
              "Desarrollo de soluciones utilizando herramientas Power Automate y Power Apps de office 365"
            ]
          }
        }
      },
      /* {
        "module":"expertise",
        "data":{
          "start_date":new Date(2018,11,7), 
          "end_date":new Date(2021,3,12), 
          "position":{
            "en":"FUNCTIONAL SUPPORT",
            "es":"Soporte Funcional"
          }, 
          "company":"CORAL SOLUTIONS", 
          "functions":{
            "en":[
              "Remote and on-site support",
              "Web development using PHP, JavaScript technologies",
              "IP Telephony",
              "Oracle database support. (PLSQL)"
            ],
            "es":[
              "Soporte Remoto y en sitio",
              "Desarrollo web empleando tecnologias PHP, JavaScript",
              "Telefonia IP",
              "Soporte sobre bases de datos Oracle. (PLSQL)"
            ]
          }
        }
      } */
    ]
  }

  getEducations():Education[]{
    return this.educations = [
      {
        "module":"education",
        "data":{
          "date":new Date(2025,3,26), 
          "course":{
            "en":"SYSTEMS ENGINEERING",
            "es":"Ingenieria de Sistemas"
          }, 
          "institute":"UNAD", 
          "state":"Finalized"
        }
      },
      {
        "module":"education",
        "data":{
          "date":new Date(2021,12,288), 
          "course":{
            "en":"DIPLOMA IN PROGRAMMING SKILLS WITH EMPHASIS ON WEB DEVELOPMENT",
            "es":"Diplomado en programacion con enfasis en desarrollo web"
          }, 
          "institute":"UNAB", 
          "state":"Finalized"
        }
      },
      {
        "module":"education",
        "data":{
          "date":new Date(2018,7,5), 
          "course":{
            "en":"TECHNOLOGICAL SPECIALIZATION IN DATABASE MANAGEMENT AND SECURITY",
            "es":"ESPECIALIZACIÓN TECNOLÓGICA EN GESTIÓN Y SEGURIDAD DE BASES DE DATOS"
          }, 
          "institute":"SENA", 
          "state":"Finalized"
        }
      },
      {
        "module":"education",
        "data":{
          "date":new Date(2016,5,18), 
          "course":{
            "en":"TECHNOLOGY IN ANALYSIS AND DEVELOPMENT OF INFORMATION SYSTEMS",
            "es":"TECNOLOGÍA EN ANÁLISIS Y DESARROLLO DE SISTEMAS DE INFORMACIÓN"
          }, 
          "institute":"SENA", 
          "state":"Finalized"
        }
      }
    ]
  }

  getSkills():Skill[]{
    return this.skills=[
      {
        "technology":{
          "en":"HTML & CSS3",
          "es":"HTML & CSS3"
        },
        "percentage":95
      },
      {
        "technology":{
          "en":"Bootstrap",
          "es":"Bootstrap"
        },
        "percentage":85
      },
      {
        "technology":{
          "en":"JavaScript",
          "es":"JavaScript"
        },
        "percentage":70
      },
      {
        "technology":{
          "en":"Angular",
          "es":"Angular"
        },
        "percentage":50
      },
      {
        "technology":{
          "en":"PHP",
          "es":"PHP"
        },
        "percentage":85
      },
      {
        "technology":{
          "en":"Laravel",
          "es":"Laravel"
        },
        "percentage":75
      },
      {
        "technology":{
          "en":"SQL",
          "es":"SQL"
        },
        "percentage":85
      },
      {
        "technology":{
          "en":"GIT & GitHub",
          "es":"GIT & GitHub"
        },
        "percentage":65
      }

    ]
  }

  getLanguages():Skill[]{
    return this.languages=[
      {
        "technology":{
          "en":"Spanish",
          "es":"Español"
        },
        "percentage":99
      },
      {
        "technology":{
          "en":"English",
          "es":"Ingles"
        },
        "percentage":45
      }
    ]

  }

  getPdfFile():any{
    return this.file = {
      "en":"../../../assets/images/file/MiCV_en.pdf",
      "es":"../../../assets/images/file/MiCV_es.pdf"
    };
  }
}
