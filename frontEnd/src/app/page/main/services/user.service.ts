import { Injectable } from '@angular/core';
import { User_Info } from '../interfaces/user_info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user! : User_Info;

  constructor() { }

  getUserInfo(){
    return this.user = {
      "photo" : "../../../../assets/images/fotoCV.jpg",
      "first_name" : "Marco",
      "second_name" : "Antonio",
      "first_lastname" : "Marin",
      "second_lastname" : "Franco",
      "phone" : "(+57) 3167482228",
      "email" : "Marcko236@gmail.com",
      "city" : "Cali",
      "department" : "Valle del Cauca",
      "country" : "Colombia",
      "birthdate" : new Date('1993/07/26'),
      "profession" : {
        "en":"FullStack Developer",
        "es":"Desarrollador FullStack"
      },
      "social_networks" : {
        "facebook": "https://www.facebook.com/marcko.maryn",
        "twitter": "",
        "linkedin" : "https://www.linkedin.com/in/marco-a-marin-f",
        "instagram" : "",
        "gitHub" : "https://github.com/MarckoM236"
      },
      "professional_profile" : {
        "en":`<p class='text-light'><strong>Systems Engineer</strong> with experience in backend development and web technologies.</p>
              <p class='text-light'>
                I mainly work as a backend developer, with hands-on experience in the PHP ecosystem, especially using 
                <strong>Laravel</strong>, along with <strong>MySQL</strong> and <strong>MongoDB</strong> for database management. 
                I’ve also worked with <strong>Angular</strong> on the frontend and use low-code/no-code tools like 
                <strong>FlutterFlow</strong>, <strong>n8n</strong>, and <strong>Replit</strong> to automate workflows and quickly prototype ideas.
              </p>
              <p class='text-light'>
                My technical skills include designing and consuming REST APIs, structuring databases, integrating services, and 
                version control with <strong>Git/GitHub</strong>. I’m a logical thinker, a fast learner, and committed to following 
                best development practices.
              </p>
              <p class='text-light'>
                I'm currently working on scalable web application projects, always looking to improve code performance 
                and maintainability.
              </p>`,
        "es":`<p class='text-light'><strong>Ingeniero de Sistemas</strong> con experiencia en desarrollo backend y tecnologías web.</p>
              <p class='text-light'>
                Trabajo principalmente como desarrollador backend, con experiencia en el ecosistema PHP, especialmente usando 
                <strong>Laravel</strong>, junto con <strong>MySQL</strong> y <strong>MongoDB</strong> para la gestión de bases de datos. 
                También he trabajado con <strong>Angular</strong> en el frontend y uso herramientas low-code/no-code como 
                <strong>FlutterFlow</strong>, <strong>n8n</strong> y <strong>Replit</strong> para automatizar procesos y crear prototipos de forma ágil.
              </p>
              <p class='text-light'>
                Tengo conocimientos en el diseño y consumo de APIs REST, estructuración de bases de datos, integración de servicios 
                y control de versiones con <strong>Git/GitHub</strong>. Me considero una persona lógica, curiosa y comprometida con 
                las buenas prácticas de desarrollo.
              </p>
              <p class='text-light'>
                Actualmente participo en el desarrollo de aplicaciones web escalables, siempre buscando optimizar el rendimiento 
                y la mantenibilidad del código.
              </p>`
      },
      "interests" : {
        "en":`<h5 class="mb-3">Passionate about technology</h5>
              <p class="mt-20">
                I like to experiment with different technological tools, and go beyond programming languages, 
                my curiosity and dedication to continuous learning allow me to enjoy facing challenges and learning new ways to find effective solutions to them.
              </p>`,
        "es":`<h5 class="mb-3">Apasionado por la tecnología</h5>
              <p class="mt-20">
                Me gusta experimentar con diferentes herramientas tecnológicas, e ir más allá de los lenguajes de programación,
                Mi curiosidad y dedicación al aprendizaje continuo me permiten disfrutar enfrentando desafíos y aprendiendo nuevas formas de encontrar soluciones efectivas a los mismos.
              </p>`
      }
    }
  }
}
